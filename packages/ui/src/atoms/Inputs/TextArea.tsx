import React, { forwardRef, type TextareaHTMLAttributes } from "react";
import "./Inputs.css";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  dark?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, helperText, error, dark = false, className = "", id, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="bf-input-group">
        {label && (
          <label
            htmlFor={textareaId}
            className={["bf-input-label", dark ? "bf-input-label--dark" : ""].filter(Boolean).join(" ")}
          >
            {label}
          </label>
        )}
        <div className="bf-input-wrapper">
          <textarea
            id={textareaId}
            ref={ref}
            className={["bf-textarea", dark ? "bf-textarea--dark" : "", className].filter(Boolean).join(" ")}
            {...props}
          />
        </div>
        {error && <span className="bf-input-error">{error}</span>}
        {helperText && !error && <span className="bf-input-helper">{helperText}</span>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
