import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="w-full rounded bg-yellow-300 p-3 font-semibold text-stone-800">
      {children}
    </button>
  );
}
