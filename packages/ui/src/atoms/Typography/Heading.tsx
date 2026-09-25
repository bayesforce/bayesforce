import React, { type ElementType, type HTMLAttributes, type ReactNode } from "react";
import "./Typography.css";

export type HeadingLevel = "hero" | "h1" | "h2" | "h3" | "h4";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: HeadingLevel;
  as?: ElementType;
  gradient?: boolean;
  goldGradient?: boolean;
  dark?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = "h2",
  as,
  gradient = false,
  goldGradient = false,
  dark = false,
  className = "",
  ...props
}) => {
  const Component = as || (level === "hero" ? "h1" : level);
  const classNames = [
    "bf-heading",
    `bf-heading--${level}`,
    gradient ? "bf-heading--gradient" : "",
    goldGradient ? "bf-heading--gradient-gold" : "",
    dark ? "bf-heading--dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
};
