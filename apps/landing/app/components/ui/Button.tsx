import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const styles: Record<ButtonVariant, string> = {
  primary: "border-blue-600 bg-[#013EFA] text-white hover:border-[#0029A8] hover:bg-[#0029A8]",
  secondary: "border-slate-200 bg-white text-slate-900 hover:border-blue-200 hover:bg-blue-50",
  outline: "border-slate-300 bg-transparent text-slate-800 hover:border-[#013EFA] hover:text-[#013EFA]",
  dark: "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = "primary", size = "md", leftIcon, rightIcon, fullWidth, className = "", type, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type ?? "button"}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border font-sans font-semibold tracking-[-0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013EFA] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  );
});
