"use client";

import React, { useEffect, type ReactNode } from "react";
import { Icon } from "../../atoms/Icons";
import { IconButton } from "../../atoms/Buttons/IconButton";
import "./Modals.css";

export interface ModalProps {
  opened: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  dark?: boolean;
  withCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  children: ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  opened,
  onClose,
  title,
  description,
  footer,
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
    <div
      className="bf-modal-overlay"
      onClick={() => closeOnClickOutside && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={[
          "bf-modal-container",
          `bf-modal--size-${size}`,
          dark ? "bf-modal--dark" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || withCloseButton) && (
          <div className="bf-modal-header">
            <div>
              {title && <div className="bf-modal-title">{title}</div>}
              {description && <div className="bf-modal-description">{description}</div>}
            </div>
            {withCloseButton && (
              <IconButton
                icon={<Icon name="x" size={18} />}
                variant={dark ? "dark" : "ghost"}
                size="sm"
                aria-label="Close modal"
                onClick={onClose}
              />
            )}
          </div>
        )}

        <div className="bf-modal-body">{children}</div>

        {footer && <div className="bf-modal-footer">{footer}</div>}
      </div>
    </div>
  );
};
