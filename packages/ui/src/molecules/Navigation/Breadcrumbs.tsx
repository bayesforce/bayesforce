import React, { forwardRef, type HTMLAttributes, type ReactNode, type MouseEvent } from "react";
import { Icon, type IconName } from "../../atoms/Icons";
import "./Navigation.css";

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  icon?: IconName | ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: IconName | ReactNode;
  showHomeIcon?: boolean;
  dark?: boolean;
  className?: string;
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items = [],
      separator = "chevron-right",
      showHomeIcon = true,
      dark = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const renderIcon = (icon?: IconName | ReactNode) => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return <Icon name={icon as IconName} size={14} />;
      }
      return icon;
    };

    const renderSeparator = () => {
      if (typeof separator === "string") {
        return <Icon name={separator as IconName} size={12} />;
      }
      return separator;
    };

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={[
          "bf-breadcrumbs",
          dark ? "bf-breadcrumbs--dark" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {showHomeIcon && (
          <>
            <a href="/" aria-label="Home" className="bf-breadcrumb-item">
              <Icon name="home" size={14} />
            </a>
            <span className="bf-breadcrumb-separator">{renderSeparator()}</span>
          </>
        )}

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <React.Fragment key={idx}>
              {isLast ? (
                <span className="bf-breadcrumb-item bf-breadcrumb-item--active" aria-current="page">
                  {renderIcon(item.icon)}
                  <span>{item.label}</span>
                </span>
              ) : (
                <a
                  href={item.href || "#"}
                  className="bf-breadcrumb-item"
                  onClick={item.onClick}
                >
                  {renderIcon(item.icon)}
                  <span>{item.label}</span>
                </a>
              )}

              {!isLast && (
                <span className="bf-breadcrumb-separator">{renderSeparator()}</span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    );
  }
);

Breadcrumbs.displayName = "Breadcrumbs";
