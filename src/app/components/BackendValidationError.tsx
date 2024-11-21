interface BackendValidationErrorProps {
  message: string | null;
  name: string;
  statusCode: string | null;
}

const BackendValidationError = ({
  error,
  className,
  specialName,
}: {
  readonly error: BackendValidationErrorProps;
  className?: string;
  specialName?: string;
}) => {
  if (!error) return null;

  let newMessage = error.message;

  if (specialName === "productCategory") {
    if (error.message !== "Category not found") return;
    newMessage = "No existe una categoría con ese nombre. Creéla primero.";
  }

  if (specialName === "productBrand") {
    if (error.message !== "Brand not found") return;
    newMessage = "No existe una marca con ese nombre. Creéla primero.";
  }

  if (
    specialName !== "productCategory" &&
    specialName !== "productBrand" &&
    (error.message === "Category not found" ||
      error.message === "Brand not found")
  ) {
    return;
  }

  return (
    <div
      className={`text-error text-body-small medium:font-normal medium:text-lg ${
        className || ""
      }`}
    >
      {newMessage}
    </div>
  );
};

export default BackendValidationError;
