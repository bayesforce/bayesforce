import React, { type ReactNode, type HTMLAttributes } from "react";
import "./Badge.css";

export type BadgeVariant = "cobalt" | "gold" | "dark" | "slate" | "outline" | "success" | "danger";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  withDot?: boolean;
  pulseDot?: boolean;
  icon?: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cobalt",
  size = "md",
  withDot = false,
  pulseDot = false,
  icon,
  className = "",
  ...props
}) => {
  return (
    <span
      className={[
        "bf-badge",
        `bf-badge--${variant}`,
        `bf-badge--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {withDot && (
        <span
          className={[
            "bf-badge__dot",
            pulseDot ? "bf-badge__dot--pulse" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />
      )}
      {icon && <span className="bf-badge__icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: "active" | "completed" | "pending" | "failed" | "archived";
  label?: string;
  size?: BadgeSize;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  size = "sm",
  className = "",
  ...props
}) => {
  const statusConfig = {
    active: { variant: "cobalt" as BadgeVariant, text: label || "Active", withDot: true, pulseDot: true },
    completed: { variant: "success" as BadgeVariant, text: label || "Completed", withDot: true, pulseDot: false },
    pending: { variant: "gold" as BadgeVariant, text: label || "Pending", withDot: true, pulseDot: false },
    failed: { variant: "danger" as BadgeVariant, text: label || "Failed", withDot: true, pulseDot: false },
    archived: { variant: "slate" as BadgeVariant, text: label || "Archived", withDot: false, pulseDot: false },
  }[status] || { variant: "slate" as BadgeVariant, text: label || status, withDot: false, pulseDot: false };

  return (
    <Badge
      variant={statusConfig.variant}
      size={size}
      withDot={statusConfig.withDot}
      pulseDot={statusConfig.pulseDot}
      className={className}
      {...props}
    >
      {statusConfig.text}
    </Badge>
  );
};
