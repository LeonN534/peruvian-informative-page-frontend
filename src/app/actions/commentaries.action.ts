"use server";

import { z } from "zod";
import { Topics } from "../enums/topics.enum";
import { revalidateTag } from "next/cache";
import { postCommentary } from "../services/commentaries.service";
import { redirect } from "next/navigation";

const baseTextFieldSchema = z
  .string()
  .min(10, { message: "(El comentario no puede ser tan corto.)" });

const schemaCommentary = z.object({
  commentary: baseTextFieldSchema,
});

export async function publishCommentAction(
  topic: Topics,
  userId: string,
  prevState: any,
  formData: FormData
) {
  const validatedFields = schemaCommentary.safeParse({
    commentary: formData.get("comment"),
  });

  const content = formData.get("comment") as string;

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Error en los campos",
      apiErrors: null,
      fieldsData: {
        commentary: content,
      },
    };
  }

  const responseData = await postCommentary(content, topic);

  if (!responseData) {
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Ops! Algo salió mal. Por favor, inténtalo de nuevo.",
      fieldsData: {
        commentary: content,
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
        commentary: content,
      },
    };
  }

  if (responseData.success) {
    revalidateTag("commentaries");
    redirect(`/${topic}?page=1`);
  }
}
