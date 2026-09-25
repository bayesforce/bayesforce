import React, { type HTMLAttributes, type ReactNode } from "react";
import "./Display.css";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dark?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  dark = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={["bf-glass-panel", dark ? "bf-glass-panel--dark" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};
