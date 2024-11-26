interface BackendValidationErrorProps {
  message: string | null;
  name: string;
  statusCode: string | null;
}

const BackendValidationError = ({
  error,
  className,
}: {
  readonly error: BackendValidationErrorProps;
  className?: string;
}) => {
  if (!error) return null;
  return (
    <div
      className={`text-red-400 text-sm absolute medium:font-normal medium:text-lg top-full translate-y-1 ${
        className || ""
      }`}
    >
      {error.message}
    </div>
  );
};

export default BackendValidationError;
