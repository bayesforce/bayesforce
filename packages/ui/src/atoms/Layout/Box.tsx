import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./Layout.css";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children?: ReactNode;
  className?: string;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = "div", children, className = "", ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={["bf-box", className].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
