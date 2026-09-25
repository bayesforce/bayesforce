import React from "react";
import "./PrincipleCard.css";

export interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
  takeaway?: string;
  className?: string;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({
  number,
  title,
  description,
  takeaway,
  className = "",
}) => {
  return (
    <div className={["bf-principle-card", className].filter(Boolean).join(" ")}>
      <div className="bf-principle-card__number">{number}</div>
      <h3 className="bf-principle-card__title">{title}</h3>
      <p className="bf-principle-card__content">{description}</p>
      {takeaway && <div className="bf-principle-card__takeaway">{takeaway}</div>}
    </div>
  );
};
