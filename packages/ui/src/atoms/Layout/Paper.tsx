import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./Layout.css";

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "obsidian" | "subtle" | "ghost";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  elevation?: "none" | "sm" | "md" | "lg";
  bordered?: boolean;
  hoverable?: boolean;
  children?: ReactNode;
  className?: string;
}

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      variant = "default",
      radius = "lg",
      elevation = "sm",
      bordered = true,
      hoverable = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "bf-paper",
          `bf-paper--variant-${variant}`,
          `bf-paper--radius-${radius}`,
          `bf-paper--elevation-${elevation}`,
          bordered ? "bf-paper--bordered" : "",
          hoverable ? "bf-paper--hoverable" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Paper.displayName = "Paper";
