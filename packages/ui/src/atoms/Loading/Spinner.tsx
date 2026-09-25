import React, { type HTMLAttributes } from "react";
import "./Spinner.css";

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "cobalt" | "gold" | "white";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "cobalt",
  className = "",
  ...props
}) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={["bf-spinner", `bf-spinner--${size}`, `bf-spinner--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};
