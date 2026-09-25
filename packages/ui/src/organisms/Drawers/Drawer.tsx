"use client";

import React, { useEffect, type ReactNode } from "react";
import { Icon } from "../../atoms/Icons";
import { IconButton } from "../../atoms/Buttons/IconButton";
import "./Drawers.css";

export interface DrawerProps {
  opened: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  placement?: "left" | "right" | "bottom";
  size?: "sm" | "md" | "lg" | "full";
  dark?: boolean;
  withCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  children: ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  opened,
  onClose,
  title,
  footer,
  placement = "right",
  size = "md",
  dark = false,
  withCloseButton = true,
  closeOnClickOutside = true,
  closeOnEscape = true,
  children,
  className = "",
}) => {
  useEffect(() => {
    if (!opened) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [opened, closeOnEscape, onClose]);

  if (!opened) return null;

  return (
    <>
      <div
        className="bf-drawer-overlay"
        onClick={() => closeOnClickOutside && onClose()}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={[
          "bf-drawer",
          `bf-drawer--${placement}`,
          `bf-drawer--size-${size}`,
          dark ? "bf-drawer--dark" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {(title || withCloseButton) && (
          <div className="bf-drawer-header">
            {title && <div className="bf-drawer-title">{title}</div>}
            {withCloseButton && (
              <IconButton
                icon={<Icon name="x" size={18} />}
                variant={dark ? "dark" : "ghost"}
                size="sm"
                aria-label="Close drawer"
                onClick={onClose}
              />
            )}
          </div>
        )}

        <div className="bf-drawer-body">{children}</div>

        {footer && <div className="bf-drawer-footer">{footer}</div>}
      </div>
    </>
  );
};
