import React, { type HTMLAttributes, type ReactNode } from "react";
import "./Display.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverLift?: boolean;
  dark?: boolean;
  accent?: "gold" | "cobalt" | "none";
  subtle?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverLift = false,
  dark = false,
  accent = "none",
  subtle = false,
  className = "",
  ...props
}) => {
  const classNames = [
    "bf-card",
    hoverLift ? "bf-card--hover-lift" : "",
    dark ? "bf-card--dark" : "",
    subtle ? "bf-card--subtle" : "",
    accent === "gold" ? "bf-card--gold-accent" : "",
    accent === "cobalt" ? "bf-card--cobalt-accent" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
