import React from "react";
import { Icon } from "../../atoms/Icons";
import "./FooterSection.css";

export const FooterSection: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <footer className={["bf-footer", className].filter(Boolean).join(" ")}>
      <div className="bf-footer__inner">
        <div className="bf-footer__top">
          {/* Brand Col */}
          <div className="bf-footer__brand-col">
            <div className="flex items-center gap-3">
              <Icon name="bayes-logo" size={34} />
              <span className="bf-footer__brand-title">BayesForce</span>
            </div>
            <p className="bf-footer__brand-desc">
              Organizational Execution Intelligence. Systems that carry the machinery of an organization so its people can carry its ambition.
            </p>
            <div className="bf-footer__quote-box">
              &ldquo;We update our beliefs as new evidence arrives.&rdquo; — Named in honor of Thomas Bayes, University of Edinburgh alumnus.
            </div>
          </div>

          {/* Capabilities Col */}
          <div>
            <h4 className="bf-footer__col-title">Capabilities</h4>
            <ul className="bf-footer__nav-list">
              <li><a href="#pillars" className="bf-footer__nav-link">Workflow Redesign</a></li>
              <li><a href="#pillars" className="bf-footer__nav-link">Governed Agent Systems</a></li>
              <li><a href="#pillars" className="bf-footer__nav-link">Execution Cadence Engine</a></li>
              <li><a href="#c-suite" className="bf-footer__nav-link">Executive Agenda</a></li>
              <li><a href="#diagnostic" className="bf-footer__nav-link">Execution Diagnostic</a></li>
            </ul>
          </div>

          {/* Philosophy Col */}
          <div>
            <h4 className="bf-footer__col-title">Philosophy</h4>
            <ul className="bf-footer__nav-list">
              <li><a href="#belief" className="bf-footer__nav-link">Our Belief</a></li>
              <li><a href="#principles" className="bf-footer__nav-link">4 Operating Principles</a></li>
              <li><a href="#distribution" className="bf-footer__nav-link">3 Distributions Law</a></li>
              <li><a href="#difference" className="bf-footer__nav-link">Anti-Legacy Model</a></li>
              <li><a href="#calculator" className="bf-footer__nav-link">Capacity Simulator</a></li>
              <li><a href="#journey" className="bf-footer__nav-link">Client Journey</a></li>
            </ul>
          </div>

          {/* Locations & Beachhead */}
          <div>
            <h4 className="bf-footer__col-title">Headquarters</h4>
            <div className="bf-footer__address space-y-2">
              <p className="font-bold text-white">Primary Operations:</p>
              <p>Mumbai & Pune, India</p>
              <p className="pt-2 font-bold text-white">Global Engagements:</p>
              <p>Remote Systems Engineering Worldwide</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bf-footer__bottom">
          <div>
            &copy; {new Date().getFullYear()} BayesForce Consulting. All rights reserved. Precision AI for Modern Operations.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security & Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Client IP Guarantee</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
