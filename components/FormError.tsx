import { FaExclamationTriangle } from "react-icons/fa";
interface FormErrorProps {
  message?: string;
}

export function FormError(props: FormErrorProps) {
  if (!props.message) return null;
  return (
    <div className="p-3 rounded-md flex items-center gap-x-2 bg-destructive/15 text-destructive">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{props.message}</p>
    </div>
  );
}
