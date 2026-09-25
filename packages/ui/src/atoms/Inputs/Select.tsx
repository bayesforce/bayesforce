import React, { forwardRef, type SelectHTMLAttributes } from "react";
import "./Inputs.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
  dark?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, helperText, error, dark = false, className = "", id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="bf-input-group">
        {label && (
          <label
            htmlFor={selectId}
            className={["bf-input-label", dark ? "bf-input-label--dark" : ""].filter(Boolean).join(" ")}
          >
            {label}
          </label>
        )}
        <div className="bf-input-wrapper">
          <select
            id={selectId}
            ref={ref}
            className={["bf-select", dark ? "bf-select--dark" : "", className].filter(Boolean).join(" ")}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {error && <span className="bf-input-error">{error}</span>}
        {helperText && !error && <span className="bf-input-helper">{helperText}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";
