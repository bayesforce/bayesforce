import React, { type ReactNode } from "react";
import "./StatsCard.css";

export interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  variant?: "default" | "cobalt" | "gold";
  dark?: boolean;
  icon?: ReactNode;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  description,
  variant = "default",
  dark = false,
  icon,
  className = "",
}) => {
  return (
    <div
      className={["bf-stats-card", dark ? "bf-stats-card--dark" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center justify-between">
        <div
          className={[
            "bf-stats-card__value",
            variant === "cobalt" ? "bf-stats-card__value--cobalt" : "",
            variant === "gold" ? "bf-stats-card__value--gold" : "",
            dark && variant === "default" ? "bf-stats-card__value--dark" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {value}
        </div>
        {icon && <div className="bf-stats-card__icon">{icon}</div>}
      </div>
      <div
        className={["bf-stats-card__label", dark ? "bf-stats-card__label--dark" : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {label}
      </div>
      {description && (
        <div
          className={[
            "bf-stats-card__description",
            dark ? "bf-stats-card__description--dark" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </div>
      )}
    </div>
  );
};
