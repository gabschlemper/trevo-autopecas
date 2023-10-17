import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  type,
  onClick,
}: buttonProps) {
  return (
    <button
      type={type}
      className={`rounded-3xl uppercase hover:shadow-lg hover:scale-105 transition-all font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
