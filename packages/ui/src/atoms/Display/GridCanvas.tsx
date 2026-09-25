import React, { type HTMLAttributes } from "react";
import "./Display.css";

export interface GridCanvasProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "dots" | "dots-dark" | "lines";
}

export const GridCanvas: React.FC<GridCanvasProps> = ({
  variant = "dots",
  className = "",
  ...props
}) => {
  return (
    <div
      aria-hidden="true"
      className={["bf-grid-canvas", `bf-grid-canvas--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
};
