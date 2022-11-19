import { Button } from "@/components/widgets/atoms/Button";
import Link from "next/link";

export function Login() {
  return (
    <div className=" flex h-screen flex-col items-center justify-between bg-red-900 p-8">
      <div />
      <h1 className="text-center font-display text-3xl leading-10 text-amber-400">
        Bolão Copa do Mundo
        <br />
        Qatar 2022
      </h1>

      <Button>
        <Link href="/dashboard" className=" w-full">
          <a>Login</a>
        </Link>
      </Button>
    </div>
  );
}
