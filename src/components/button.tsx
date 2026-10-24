import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;
}

export function Button({ text, children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full h-14 bg-green hover:bg-green-hover text-white font-poppins-semibold rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer ${className}`}
    >
      {text || children}
    </button>
  );
}