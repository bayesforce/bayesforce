"use client";

import React, { useState, useRef, useEffect, forwardRef, type ReactNode } from "react";
import { Icon } from "../../atoms/Icons";
import "./Select.css";

export interface SelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  dark?: boolean;
  className?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Select an option",
      disabled = false,
      dark = false,
      className = "",
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string>(defaultValue || "");
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentValue = isControlled ? controlledValue : internalValue;
    const selectedOption = options.find((opt) => opt.value === currentValue);

    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleOutsideClick);
      }
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen]);

    const handleSelect = (val: string) => {
      if (!isControlled) {
        setInternalValue(val);
      }
      onChange?.(val);
      setIsOpen(false);
    };

    return (
      <div
        ref={containerRef}
        className={["bf-select-wrapper", className].filter(Boolean).join(" ")}
      >
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={[
            "bf-select-trigger",
            isOpen ? "bf-select-trigger--open" : "",
            disabled ? "bf-select-trigger--disabled" : "",
            dark ? "bf-select-trigger--dark" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span className={!selectedOption ? "text-slate-400" : ""}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <Icon
            name="chevron-down"
            size={16}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          <div
            role="listbox"
            className={[
              "bf-select-dropdown",
              dark ? "bf-select-dropdown--dark" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {options.map((opt) => {
              const isSelected = opt.value === currentValue;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => !opt.disabled && handleSelect(opt.value)}
                  className={[
                    "bf-select-option",
                    isSelected ? "bf-select-option--selected" : "",
                    opt.disabled ? "opacity-40 cursor-not-allowed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Icon name="check" size={14} className="text-[#013EFA]" />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
