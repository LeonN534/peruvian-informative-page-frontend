const ValidationErrors = ({
  error,
  className,
}: {
  error: string[];
  className?: string;
}) => {
  if (!error) return null;
  return (
    <div
      className={`text-error text-body-small medium:font-normal medium:text-lg ${
        className || ""
      }`}
    >
      {error[0]}
    </div>
  );
};

export default ValidationErrors;
