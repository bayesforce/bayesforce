import React, { type HTMLAttributes, type ReactNode } from "react";
import "./Typography.css";

export interface KickerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "cobalt" | "gold" | "dark";
  icon?: ReactNode;
}

export const Kicker: React.FC<KickerProps> = ({
  children,
  variant = "cobalt",
  icon,
  className = "",
  ...props
}) => {
  return (
    <div
      className={["bf-kicker", `bf-kicker--${variant}`, className].filter(Boolean).join(" ")}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
};
