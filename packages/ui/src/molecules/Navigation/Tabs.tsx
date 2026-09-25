"use client";

import React, { forwardRef, useState, type ReactNode, type HTMLAttributes } from "react";
import { Icon, type IconName } from "../../atoms/Icons";
import "./Navigation.css";

export interface TabItem {
  value: string;
  label: ReactNode;
  icon?: IconName | ReactNode;
  disabled?: boolean;
  badge?: ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  items: TabItem[];
  variant?: "line" | "pill";
  direction?: "row" | "column";
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  className?: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      items = [],
      variant = "line",
      direction = "row",
      size = "md",
      dark = false,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const initialVal = defaultValue || (items.length > 0 ? items[0].value : "");
    const [internalValue, setInternalValue] = useState<string>(initialVal);

    const currentValue = isControlled ? value : internalValue;

    const handleSelectTab = (tabVal: string, tabDisabled?: boolean) => {
      if (tabDisabled) return;
      if (!isControlled) {
        setInternalValue(tabVal);
      }
      onValueChange?.(tabVal);
    };

    const renderTabIcon = (icon?: IconName | ReactNode) => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return <Icon name={icon as IconName} size={15} />;
      }
      return icon;
    };

    return (
      <div
        ref={ref}
        role="tablist"
        className={[
          "bf-tabs",
          `bf-tabs--${variant}`,
          `bf-tabs--${direction}`,
          `bf-tabs--${size}`,
          dark ? "bf-tabs--dark" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        {...props}
      >
        {items.map((tab) => {
          const isActive = tab.value === currentValue;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              className={[
                "bf-tab-item",
                isActive ? "bf-tab-item--active" : "",
                tab.disabled ? "bf-tab-item--disabled" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => handleSelectTab(tab.value, tab.disabled)}
            >
              {renderTabIcon(tab.icon)}
              <span>{tab.label}</span>
              {tab.badge && <span className="bf-tab-badge">{tab.badge}</span>}
            </button>
          );
        })}
      </div>
    );
  }
);

Tabs.displayName = "Tabs";
