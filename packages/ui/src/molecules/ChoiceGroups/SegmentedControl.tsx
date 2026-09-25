import React, { forwardRef, type ReactNode } from "react";

export interface SegmentedControlItem {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  items: SegmentedControlItem[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      items,
      value,
      onChange,
      size = "md",
      dark = false,
      fullWidth = false,
      className = "",
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "p-1 text-xs gap-1",
      md: "p-1 text-sm gap-1.5",
      lg: "p-1.5 text-base gap-2",
    }[size];

    const itemPadding = {
      sm: "px-2.5 py-1",
      md: "px-3.5 py-1.5",
      lg: "px-5 py-2",
    }[size];

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={[
          "inline-flex items-center rounded-full font-['Outfit'] transition-all",
          fullWidth ? "w-full flex" : "",
          dark
            ? "bg-[#161B23] border border-[#2A3441]"
            : "bg-slate-100/80 border border-slate-200/80",
          sizeClasses,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {items.map((item) => {
          const isSelected = item.value === value;
          return (
            <button
              key={item.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={item.disabled}
              onClick={() => onChange(item.value)}
              className={[
                "inline-flex items-center justify-center gap-1.5 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none",
                fullWidth ? "flex-1" : "",
                itemPadding,
                isSelected
                  ? dark
                    ? "bg-[#013EFA] text-white shadow-md shadow-blue-600/30"
                    : "bg-white text-[#013EFA] shadow-xs"
                  : dark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900",
                item.disabled ? "opacity-40 cursor-not-allowed" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

SegmentedControl.displayName = "SegmentedControl";
