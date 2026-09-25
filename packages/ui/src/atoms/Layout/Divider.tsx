import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./Layout.css";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed";
  labelPosition?: "left" | "center" | "right";
  children?: ReactNode;
  className?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      variant = "solid",
      labelPosition = "center",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={[
          "bf-divider",
          `bf-divider--${orientation}`,
          `bf-divider--variant-${variant}`,
          children ? `bf-divider--label-${labelPosition}` : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children && <span>{children}</span>}
      </div>
    );
  }
);

Divider.displayName = "Divider";
