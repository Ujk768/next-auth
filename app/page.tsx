import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/LoginButton";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col  items-center text-center justify-center bg-sky-500 text-white">
      <h1
        className={cn("text-6xl text-semibold drop-shadow-md ", font.className)}
      >
        Auth
      </h1>
      <p>Simple auth service</p>
      <div className="pt-10">
        <LoginButton>
          <Button variant="secondary" className="w-full">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
