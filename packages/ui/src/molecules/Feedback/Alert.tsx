import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Icon, type IconName } from "../../atoms/Icons";
import "./Feedback.css";

export type AlertVariant = "info" | "success" | "warning" | "danger" | "obsidian";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: ReactNode;
  icon?: IconName | ReactNode;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      title,
      icon,
      onClose,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const defaultIconName: Record<AlertVariant, IconName> = {
      info: "info",
      success: "check-circle",
      warning: "alert-triangle",
      danger: "alert-circle",
      obsidian: "sparkles",
    };

    const renderIcon = () => {
      if (icon) {
        if (typeof icon === "string") {
          return <Icon name={icon as IconName} size={18} />;
        }
        return icon;
      }
      return <Icon name={defaultIconName[variant]} size={18} />;
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={["bf-alert", `bf-alert--${variant}`, className].filter(Boolean).join(" ")}
        {...props}
      >
        <span className="bf-alert-icon">{renderIcon()}</span>
        <div className="bf-alert-body">
          {title && <div className="bf-alert-title">{title}</div>}
          <div className="bf-alert-content">{children}</div>
        </div>
        {onClose && (
          <button
            type="button"
            className="bf-alert-close"
            onClick={onClose}
            aria-label="Close alert"
          >
            <Icon name="x" size={16} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
