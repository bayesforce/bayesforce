import React, { type ReactNode } from "react";
import { Icon } from "../../atoms/Icons";
import { Badge } from "../../atoms/Badges";
import "./OfferingCard.css";

export interface OfferingCardProps {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  outcome: string;
  badgeText?: string;
  badgeVariant?: "cobalt" | "gold" | "slate" | "dark";
  isFeatured?: boolean;
  dark?: boolean;
  className?: string;
}

export const OfferingCard: React.FC<OfferingCardProps> = ({
  step,
  title,
  description,
  deliverables,
  outcome,
  badgeText,
  badgeVariant = "gold",
  isFeatured = false,
  dark = false,
  className = "",
}) => {
  return (
    <div
      className={[
        "bf-offering-card",
        isFeatured ? "bf-offering-card--featured" : "",
        dark ? "bf-offering-card--dark" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="bf-offering-card__header">
        <span className="bf-offering-card__step-tag">{step}</span>
        {badgeText && <Badge variant={badgeVariant}>{badgeText}</Badge>}
      </div>
      <h3 className="bf-offering-card__title">{title}</h3>
      <p className="bf-offering-card__description">{description}</p>
      <ul className="bf-offering-card__deliverables">
        {deliverables.map((item, index) => (
          <li key={index} className="bf-offering-card__deliverable-item">
            <span className="bf-offering-card__deliverable-icon">
              <Icon name="check" size={16} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="bf-offering-card__outcome">
        <strong>Proven Delta:</strong> {outcome}
      </div>
    </div>
  );
};
