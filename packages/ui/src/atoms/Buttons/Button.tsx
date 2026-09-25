import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./Button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "gold"
  | "dark"
  | "ghost"
  | "ghost-dark";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  roundedFull?: boolean;
  as?: "button" | "a";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      roundedFull = false,
      className = "",
      disabled,
      as = "button",
      href,
      ...props
    },
    ref
  ) => {
    const classNames = [
      "bf-button",
      `bf-button--variant-${variant}`,
      `bf-button--size-${size}`,
      fullWidth ? "bf-button--full-width" : "",
      roundedFull ? "bf-button--rounded-full" : "",
      isLoading ? "bf-button--loading" : "",
      disabled ? "bf-button--disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (as === "a" && href) {
      return (
        <a
          href={href}
          className={classNames}
          aria-disabled={disabled || isLoading}
          {...(props as any)}
        >
          {leftIcon && <span className="bf-button__icon bf-button__icon--left">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="bf-button__icon bf-button__icon--right">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={classNames}
        disabled={disabled || isLoading}
        {...props}
      >
        {leftIcon && <span className="bf-button__icon bf-button__icon--left">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="bf-button__icon bf-button__icon--right">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
