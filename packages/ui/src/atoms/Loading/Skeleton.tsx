import React, { forwardRef, type HTMLAttributes } from "react";
import "./Spinner.css";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  radius?: "sm" | "md" | "lg" | "full";
  className?: string;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      width,
      height,
      circle = false,
      radius = "md",
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const customWidth = typeof width === "number" ? `${width}px` : width;
    const customHeight = typeof height === "number" ? `${height}px` : height;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={[
          "bf-skeleton",
          circle ? "bf-skeleton--circle" : `bf-skeleton--radius-${radius}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          width: circle ? customHeight || customWidth : customWidth,
          height: circle ? customWidth || customHeight : customHeight,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  variant?: "cobalt" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      variant = "cobalt",
      size = "md",
      showLabel = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div ref={ref} className={["bf-progress-wrapper", className].filter(Boolean).join(" ")} {...props}>
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          className={["bf-progress-track", `bf-progress-track--${size}`].join(" ")}
        >
          <div
            className={["bf-progress-fill", `bf-progress-fill--${variant}`].join(" ")}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="bf-progress-label">{Math.round(percentage)}%</span>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
