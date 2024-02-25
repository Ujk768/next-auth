"use client";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();
  const onCLick = () => {
    router.push("/auth/login");
  };

  if (mode == "modal") {
    return <div>Implement Modal</div>;
  }
  return (
    <span onClick={onCLick} className="cursor-pointer">
      {children}
    </span>
  );
}
