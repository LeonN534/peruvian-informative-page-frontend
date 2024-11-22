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
      className={`text-red-400 text-sm absolute medium:font-normal medium:text-lg top-full translate-y-1 ${
        className || ""
      }`}
    >
      {error[0]}
    </div>
  );
};

export default ValidationErrors;
