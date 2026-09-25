import React, { type ElementType, type HTMLAttributes, type ReactNode } from "react";
import "./Typography.css";

export type TextVariant = "lead" | "body" | "sm" | "xs";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: TextVariant;
  as?: ElementType;
  muted?: boolean;
  dark?: boolean;
  mono?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  as: Component = "p",
  muted = false,
  dark = false,
  mono = false,
  className = "",
  ...props
}) => {
  const classNames = [
    "bf-text",
    `bf-text--${variant}`,
    muted ? "bf-text--muted" : "",
    dark ? "bf-text--dark" : "",
    mono ? "bf-text--mono" : "",
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
