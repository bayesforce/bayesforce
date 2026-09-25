import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import "./DataDisplay.css";

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  value: ReactNode;
  label: ReactNode;
  description?: ReactNode;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  icon?: ReactNode;
  variant?: "default" | "cobalt";
  dark?: boolean;
  className?: string;
}

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      value,
      label,
      description,
      trend,
      icon,
      variant = "default",
      dark = false,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "bf-metric-card",
          dark ? "bf-metric-card--dark" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <div className="flex items-center justify-between mb-2">
          {icon && (
            <div
              className={[
                "w-10 h-10 rounded-xl flex items-center justify-center text-lg",
                dark
                  ? "bg-white/5 border border-white/10 text-blue-400"
                  : "bg-blue-50 border border-blue-100 text-[#013EFA]",
              ].join(" ")}
            >
              {icon}
            </div>
          )}
          {trend && (
            <span
              className={[
                "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                trend.isPositive !== false
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-rose-50 text-rose-700 border border-rose-200",
              ].join(" ")}
            >
              {trend.value}
            </span>
          )}
        </div>

        <div
          className={[
            "bf-metric-val",
            variant === "cobalt" ? "bf-metric-val--cobalt" : "",
          ].join(" ")}
        >
          {value}
        </div>

        <div className="bf-metric-label">{label}</div>

        {description && (
          <p
            className={`text-xs mt-1.5 leading-relaxed ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

MetricCard.displayName = "MetricCard";
