import React from "react";
import Link from "next/link";
import styles from "./RoutePlaceholder.module.css";

export interface RouteLink {
  label: string;
  href: string;
  description?: string;
}

export interface RoutePlaceholderProps {
  route: string;
  title: string;
  description: string;
  badge?: string;
  subRoutes?: RouteLink[];
}

export const RoutePlaceholder: React.FC<RoutePlaceholderProps> = ({
  route,
  title,
  description,
  badge = "Route",
  subRoutes,
}) => {
  return (
    <main className={styles.page}>
      <div className={styles.panel}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeLabel}>{badge}:</span>
          <span className={styles.badgeRoute}>{route}</span>
        </div>

        <h1 className={styles.title}>
          {title}
        </h1>

        <p className={styles.description}>
          {description}
        </p>

        {subRoutes && subRoutes.length > 0 && (
          <div className={styles.routes}>
            <p className={styles.routesLabel}>
              Available Routes
            </p>
            <div className={styles.routeLinks}>
              {subRoutes.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={styles.routeLink}
                >
                  <span>{sub.label}</span>
                  <span className={styles.arrow}>&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
