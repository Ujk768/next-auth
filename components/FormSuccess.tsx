import { FaCheckCircle } from "react-icons/fa";
interface FormSuccessProps {
  message?: string;
}

export function FormSuccess(props: FormSuccessProps) {
  if (!props.message) return null;
  return (
    <div className="p-3 rounded-md flex items-center gap-x-2 bg-emerald-500/15 text-emerald-500">
      <FaCheckCircle className="h-4 w-4" />
      <p>{props.message}</p>
    </div>
  );
}
