import React from "react";
import { Badge } from "../../atoms/Badges";
import "./DistributionCard.css";

export interface DistributionMetric {
  label: string;
  value: string;
}

export interface DistributionCardProps {
  name: string;
  shape: string;
  badge: string;
  badgeVariant?: "cobalt" | "gold" | "slate";
  isActive?: boolean;
  metrics: DistributionMetric[];
  className?: string;
}

export const DistributionCard: React.FC<DistributionCardProps> = ({
  name,
  shape,
  badge,
  badgeVariant = "slate",
  isActive = false,
  metrics,
  className = "",
}) => {
  return (
    <div
      className={[
        "bf-distribution-card",
        isActive ? "bf-distribution-card--active" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="bf-distribution-card__badge">
        <Badge variant={badgeVariant}>{badge}</Badge>
      </div>
      <h3 className="bf-distribution-card__title">{name}</h3>
      <div className="bf-distribution-card__shape">{shape}</div>
      <div className="bf-distribution-card__metrics">
        {metrics.map((m, idx) => (
          <div key={idx} className="bf-distribution-card__metric-row">
            <span className="bf-distribution-card__metric-label">{m.label}:</span>
            <span className="bf-distribution-card__metric-value">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
