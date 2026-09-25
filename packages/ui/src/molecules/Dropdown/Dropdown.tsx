"use client";

import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  isValidElement,
  type ReactNode,
  type ReactElement,
  type HTMLAttributes,
} from "react";
import { Icon, type IconName } from "../../atoms/Icons";
import "./Dropdown.css";

export interface DropdownMenuItem {
  key: string | number;
  label: ReactNode;
  description?: ReactNode;
  icon?: IconName | ReactNode;
  href?: string;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  badge?: ReactNode;
  onClick?: (item: DropdownMenuItem) => void;
}

export type DropdownPlacement = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
export type DropdownTrigger = "click" | "hover";

export interface DropdownProps {
  items?: DropdownMenuItem[];
  children: ReactElement<any>;
  trigger?: DropdownTrigger;
  placement?: DropdownPlacement;
  dark?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnSelect?: boolean;
  disabled?: boolean;
  className?: string;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  customOverlay?: ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  children,
  trigger = "click",
  placement = "bottomLeft",
  dark = false,
  open: controlledOpen,
  onOpenChange,
  closeOnSelect = true,
  disabled = false,
  className = "",
  overlayClassName = "",
  overlayStyle,
  customOverlay,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (disabled || trigger !== "hover") return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (disabled || trigger !== "hover") return;
    hoverTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    if (disabled) return;
    if (trigger === "click") {
      e.stopPropagation();
      setOpen(!isOpen);
    }
    children.props.onClick?.(e);
  };

  const renderIcon = (icon?: IconName | ReactNode) => {
    if (!icon) return null;
    if (typeof icon === "string") {
      return <Icon name={icon as IconName} size={16} />;
    }
    return icon;
  };

  return (
    <div
      ref={containerRef}
      className={["bf-dropdown-wrapper", className].filter(Boolean).join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cloneElement(children, {
        onClick: handleTriggerClick,
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
      })}

      {isOpen && (
        <div
          className={[
            "bf-dropdown-overlay",
            `bf-dropdown-overlay--${placement}`,
            dark ? "bf-dropdown-overlay--dark" : "",
            overlayClassName,
          ]
            .filter(Boolean)
            .join(" ")}
          style={overlayStyle}
        >
          {customOverlay ? (
            customOverlay
          ) : (
            <ul className="bf-dropdown-menu" role="menu">
              {items?.map((item) => {
                if (item.divider) {
                  return <li key={item.key} className="bf-dropdown-divider" role="separator" />;
                }

                const itemContent = (
                  <>
                    <div className="bf-dropdown-item-content">
                      {item.icon && (
                        <span className="bf-dropdown-item-icon">{renderIcon(item.icon)}</span>
                      )}
                      <div>
                        <div className="bf-dropdown-item-label">{item.label}</div>
                        {item.description && (
                          <div className="bf-dropdown-item-description">{item.description}</div>
                        )}
                      </div>
                    </div>
                    {item.badge && <span className="bf-dropdown-item-badge">{item.badge}</span>}
                  </>
                );

                const itemClassName = [
                  "bf-dropdown-item",
                  item.danger ? "bf-dropdown-item--danger" : "",
                  item.disabled ? "bf-dropdown-item--disabled" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                const handleClick = () => {
                  if (item.disabled) return;
                  item.onClick?.(item);
                  if (closeOnSelect) setOpen(false);
                };

                if (item.href) {
                  return (
                    <li key={item.key} role="none">
                      <a
                        href={item.href}
                        className={itemClassName}
                        role="menuitem"
                        onClick={handleClick}
                      >
                        {itemContent}
                      </a>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.key}
                    className={itemClassName}
                    role="menuitem"
                    onClick={handleClick}
                  >
                    {itemContent}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
