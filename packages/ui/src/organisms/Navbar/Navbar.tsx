import React from "react";
import { Icon } from "../../atoms/Icons";
import { Button } from "../../atoms/Buttons";
import "./Navbar.css";

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavbarLink[];
  onBookDiagnostic?: () => void;
  className?: string;
}

const defaultLinks: NavbarLink[] = [
  { label: "Our Belief", href: "#belief" },
  { label: "Capabilities", href: "#pillars" },
  { label: "Executive Agenda", href: "#c-suite" },
  { label: "Distribution Law", href: "#distribution" },
  { label: "Capacity Simulator", href: "#calculator" },
  { label: "The Difference", href: "#difference" },
];

export const Navbar: React.FC<NavbarProps> = ({
  links = defaultLinks,
  onBookDiagnostic,
  className = "",
}) => {
  return (
    <header className={["bf-navbar", className].filter(Boolean).join(" ")}>
      <div className="bf-navbar__inner">
        <a href="#" className="bf-navbar__brand">
          <Icon name="bayes-logo" size={34} />
          <div className="bf-navbar__logo-text">
            <span className="bf-navbar__name">BayesForce</span>
            <span className="bf-navbar__tagline">Make More Happen</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="bf-navbar__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="bf-navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bf-navbar__actions">
          <Button
            variant="primary"
            size="sm"
            onClick={onBookDiagnostic}
            as="a"
            href="#diagnostic"
            rightIcon={<Icon name="arrow-right" size={14} />}
          >
            Execution Diagnostic
          </Button>
        </div>
      </div>
    </header>
  );
};
