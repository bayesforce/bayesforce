import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./DataDisplay.css";

export interface TimelineItemData {
  id?: string | number;
  title: ReactNode;
  description?: ReactNode;
  time?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
}

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  items: TimelineItemData[];
  dark?: boolean;
  className?: string;
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ items, dark = false, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "bf-timeline",
          dark ? "bf-timeline--dark" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {items.map((item, idx) => (
          <div key={item.id ?? idx} className="bf-timeline-item">
            {idx < items.length - 1 && <div className="bf-timeline-line" />}
            <div
              className={[
                "bf-timeline-node",
                item.active ? "bf-timeline-node--active" : "",
              ].join(" ")}
            >
              {item.icon}
            </div>
            <div className="bf-timeline-content">
              <div className="flex items-center justify-between">
                <div className="bf-timeline-title">{item.title}</div>
                {item.time && (
                  <span
                    className={`text-xs font-medium ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {item.time}
                  </span>
                )}
              </div>
              {item.description && (
                <div className="bf-timeline-description">{item.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Timeline.displayName = "Timeline";
