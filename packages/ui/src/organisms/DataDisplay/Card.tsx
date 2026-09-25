import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./DataDisplay.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  interactive?: boolean;
  children: ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ dark = false, interactive = false, children, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "bf-card-root",
          dark ? "bf-card-root--dark" : "",
          interactive ? "bf-card-root--interactive" : "",
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
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={["bf-card-header", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className = "", ...props }, ref) => (
    <h3 ref={ref} className={["bf-card-title", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className = "", ...props }, ref) => (
    <p ref={ref} className={["bf-card-description", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={["bf-card-content", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={["bf-card-footer", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";
