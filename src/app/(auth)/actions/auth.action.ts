"use server";

import { z } from "zod";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  forgotPasswordService,
  loginUserService,
  registerUserService,
  restorePasswordService,
} from "../../services/auth.service";

const cookieConfig = {
  maxAge: 60 * 60 * 24,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.COOKIE_SECURE?.toLowerCase() === "true" ? true : false,
};

const emailSchema = z
  .string()
  .min(1, { message: "(Este campo es obligatorio.)" })
  .email({ message: "(Ingresa un email válido.)" });

const passwordSchema = z
  .string()
  .min(1, { message: "(Este campo es obligatorio.)" })
  .refine(
    (value) =>
      /^(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/.test(
        value
      ),
    {
      message: "(La contraseña debe tener un número y un caracter especial.)",
    }
  )
  .refine((value) => value.length >= 6 && value.length <= 60, {
    message: "(La contraseña debe tener entre 6 y 60 caracteres.)",
  });

const confirmedPasswordSchema = z
  .string()
  .min(1, { message: "(Este campo es obligatorio.)" });

const schemaRegister = z
  .object({
    email: emailSchema,
    name: confirmedPasswordSchema,
    lastName: confirmedPasswordSchema,
    password: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "(Las contraseñas deben ser iguales.)",
    path: ["confirmedPassword"],
  });

const schemaLogin = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: "(Este campo es obligatorio.)" }),
});

const schemaForgotPassword = z.object({
  email: emailSchema,
});

const schemaRestorePassword = z
  .object({
    newPassword: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  })
  .refine((data) => data.newPassword === data.confirmedPassword, {
    message: "(Las contraseñas deben ser iguales.)",
    path: ["confirmedPassword"],
  });

const schemaChangePassword = z
  .object({
    currentPassword: confirmedPasswordSchema,
    newPassword: passwordSchema,
    confirmedPassword: confirmedPasswordSchema,
  })
  .refine((data) => data.newPassword === data.confirmedPassword, {
    message: "(Las contraseñas deben ser iguales.)",
    path: ["confirmedPassword"],
  });

export async function registerUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    password: formData.get("password"),
    confirmedPassword: formData.get("confirmedPassword"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Error en los campos",
      apiErrors: null,
      fieldsData: {
        email: formData.get("email"),
        name: formData.get("name"),
        lastName: formData.get("lastName"),
        password: formData.get("password"),
        confirmedPassword: formData.get("confirmedPassword"),
      },
    };
  }

  const responseData = await registerUserService({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    fullName: `${validatedFields.data.name} ${validatedFields.data.lastName}`,
  });

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Algo salió mal. Por favor, inténtalo de nuevo.",
      fieldsData: {
        email: formData.get("email"),
        name: formData.get("name"),
        lastName: formData.get("lastName"),
        password: formData.get("password"),
        confirmedPassword: formData.get("confirmedPassword"),
      },
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      apiErrors: responseData,
      zodErrors: null,
      message: "Fallo en el registro.",
      fieldsData: {
        email: formData.get("email"),
        name: formData.get("name"),
        lastName: formData.get("lastName"),
        password: formData.get("password"),
        confirmedPassword: formData.get("confirmedPassword"),
      },
    };
  }

  if (responseData.success && responseData.token) {
    const cookiesStore = await cookies();
    cookiesStore.set("jwt", responseData.token, {
      ...cookieConfig,
      sameSite: "lax",
    });
    revalidateTag("auth");
    redirect("/");
  }
}

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Error en los campos.",
      apiErrors: null,
      fieldsData: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
    };
  }

  const responseData = await loginUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Algo salió mal. Por favor, inténtalo de nuevo.",
      fieldsData: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      apiErrors: responseData,
      zodErrors: null,
      message: "Fallo en el inicio de sesión.",
      fieldsData: {
        email: formData.get("email"),
        password: formData.get("password"),
      },
    };
  }

  if (responseData.success && responseData.token) {
    const cookiesStore = await cookies();
    cookiesStore.set("jwt", responseData.token, {
      ...cookieConfig,
      sameSite: "lax",
    });
    revalidateTag("auth");
    redirect("/");
  }
}

export async function forgotPasswordAction(prevState: any, formData: FormData) {
  const validatedFields = schemaForgotPassword.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Error en los campos.",
      apiErrors: null,
      fieldsData: {
        email: formData.get("email"),
      },
    };
  }

  const responseData = await forgotPasswordService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Algo salió mal. Por favor, inténtalo de nuevo.",
      fieldsData: {
        email: formData.get("email"),
      },
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      apiErrors: responseData,
      zodErrors: null,
      message: "Fallo en el inicio de sesión.",
      fieldsData: {
        email: formData.get("email"),
      },
    };
  }

  return {
    ...prevState,
    fieldsData: {
      email: formData.get("email"),
    },
    modal: true,
  };
}

export async function restorePasswordAction(
  token: string,
  prevState: any,
  formData: FormData
) {
  const validatedFields = schemaRestorePassword.safeParse({
    newPassword: formData.get("newPassword"),
    confirmedPassword: formData.get("confirmedPassword"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Error en los campos.",
      apiErrors: null,
      fieldsData: {
        newPassword: formData.get("newPassword"),
        confirmedPassword: formData.get("confirmedPassword"),
      },
    };
  }
  const responseData = await restorePasswordService(
    {
      password: validatedFields.data.newPassword,
    },
    token
  );

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Algo salió mal. Por favor, inténtalo de nuevo.",
      fieldsData: {
        newPassword: formData.get("newPassword"),
        confirmedPassword: formData.get("confirmedPassword"),
      },
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      apiErrors: responseData,
      zodErrors: null,
      message: "Fallo en el inicio de sesión.",
      fieldsData: {
        newPassword: formData.get("newPassword"),
        confirmedPassword: formData.get("confirmedPassword"),
      },
    };
  }

  const cookiesStore = await cookies();

  cookiesStore.set("jwt", "", {
    ...cookieConfig,
    maxAge: 0,
    sameSite: "strict",
  });

  return {
    ...prevState,
    modal: true,
    fieldsData: {
      newPassword: formData.get("newPassword"),
      confirmedPassword: formData.get("confirmedPassword"),
    },
  };
}

// export async function changePasswordAction(prevState: any, formData: FormData) {
//   const validatedFields = schemaChangePassword.safeParse({
//     currentPassword: formData.get("currentPassword"),
//     newPassword: formData.get("newPassword"),
//     confirmedPassword: formData.get("confirmedPassword"),
//   });

//   if (!validatedFields.success) {
//     return {
//       ...prevState,
//       zodErrors: validatedFields.error.flatten().fieldErrors,
//       message: "Error en los campos.",
//       apiErrors: null,
//     };
//   }

//   const responseData = await changePasswordService({
//     currentPassword: validatedFields.data.currentPassword,
//     newPassword: validatedFields.data.newPassword,
//   });

//   if (!responseData) {
//     return {
//       ...prevState,
//       apiErrors: null,
//       zodErrors: null,
//       message: "Ops! Algo salió mal. Por favor, inténtalo de nuevo.",
//     };
//   }

//   if (responseData.error) {
//     return {
//       ...prevState,
//       apiErrors: responseData,
//       zodErrors: null,
//       message: "Fallo en el inicio de sesión.",
//     };
//   }
//   cookies().set("jwt", "", { ...cookieConfig, maxAge: 0, sameSite: "strict" });
//   return {
//     ...prevState,
//     modal: true,
//   };
// }

export async function logoutAction() {
  const cookiesStore = await cookies();
  cookiesStore.set("jwt", "", {
    ...cookieConfig,
    maxAge: 0,
    sameSite: "strict",
  });
  revalidateTag("auth");
}
