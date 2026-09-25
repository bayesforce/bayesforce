import React, { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import "./Inputs.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  dark?: boolean;
  leftIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, dark = false, leftIcon, className = "", id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="bf-input-group">
        {label && (
          <label
            htmlFor={inputId}
            className={["bf-input-label", dark ? "bf-input-label--dark" : ""].filter(Boolean).join(" ")}
          >
            {label}
          </label>
        )}
        <div className="bf-input-wrapper">
          <input
            id={inputId}
            ref={ref}
            className={["bf-input", dark ? "bf-input--dark" : "", className].filter(Boolean).join(" ")}
            {...props}
          />
        </div>
        {error && <span className="bf-input-error">{error}</span>}
        {helperText && !error && <span className="bf-input-helper">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
