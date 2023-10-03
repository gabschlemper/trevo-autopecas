import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, className, type }: buttonProps) {
  return (
    <button
      type={type}
      className={`rounded-3xl py-2 px-5 uppercase hover:shadow-lg hover:scale-105 transition-all font-bold ${className}`}
    >
      {children}
    </button>
  );
}
