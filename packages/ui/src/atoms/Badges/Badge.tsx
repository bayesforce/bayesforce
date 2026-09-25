import React, { type ReactNode, type HTMLAttributes } from "react";
import "./Badge.css";

export type BadgeVariant = "cobalt" | "gold" | "dark" | "slate" | "outline" | "success";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  withDot?: boolean;
  icon?: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cobalt",
  withDot = false,
  icon,
  className = "",
  ...props
}) => {
  return (
    <span
      className={["bf-badge", `bf-badge--${variant}`, className].filter(Boolean).join(" ")}
      {...props}
    >
      {withDot && <span className="bf-badge__dot" />}
      {icon && <span className="bf-badge__icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
