import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Spinner } from "../Loading/Spinner";
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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

    // Gracefully clean redundant arrow characters from string children if rightIcon is provided
    let renderedChildren = children;
    if (rightIcon && typeof children === "string") {
      renderedChildren = children.replace(/(\s*(?:→|->|>>|&rarr;))+\s*$/, "").trim();
    }

    const content = (
      <>
        {isLoading ? (
          <Spinner size={size === "sm" ? "sm" : "md"} className="bf-button__spinner" />
        ) : (
          leftIcon && <span className="bf-button__icon bf-button__icon--left">{leftIcon}</span>
        )}
        <span>{renderedChildren}</span>
        {!isLoading && rightIcon && (
          <span className="bf-button__icon bf-button__icon--right">{rightIcon}</span>
        )}
      </>
    );

    if (as === "a" && href) {
      return (
        <a
          href={href}
          className={classNames}
          aria-disabled={disabled || isLoading}
          {...(props as any)}
        >
          {content}
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
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
