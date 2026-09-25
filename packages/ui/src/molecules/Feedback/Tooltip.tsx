"use client";

import React, { useState, type ReactNode } from "react";
import "./Feedback.css";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom";
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="bf-tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={["bf-tooltip", `bf-tooltip--${position}`, className].filter(Boolean).join(" ")}
        >
          {content}
        </div>
      )}
    </div>
  );
};
