"use client";

import React, { useState, type ReactNode } from "react";
import { Icon } from "../../atoms/Icons";
import "./Accordion.css";

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  dark?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  dark = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      className={[
        "bf-accordion",
        dark ? "bf-accordion--dark" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={["bf-accordion-item", isOpen ? "bf-accordion-item--open" : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              type="button"
              className="bf-accordion-trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="bf-accordion-icon">
                <Icon name="chevron-down" size={18} />
              </span>
            </button>
            {isOpen && <div className="bf-accordion-content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};
