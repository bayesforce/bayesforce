import React, { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import "./IconButton.css";

export type IconButtonVariant = "ghost" | "outline" | "dark";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  "aria-label": string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  rounded?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      "aria-label": ariaLabel,
      variant = "ghost",
      size = "md",
      rounded = false,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={props.type || "button"}
        aria-label={ariaLabel}
        className={[
          "bf-icon-button",
          `bf-icon-button--variant-${variant}`,
          `bf-icon-button--size-${size}`,
          rounded ? "bf-icon-button--rounded" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
