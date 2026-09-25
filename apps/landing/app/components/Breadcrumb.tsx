import React from "react";
import Link from "next/link";
import { Icon } from "@bayesforce/ui";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumb: React.FC<{ items: BreadcrumbItem[]; dark?: boolean }> = ({
  items,
  dark = false,
}) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium font-sans mb-6 flex-wrap">
      <Link
        href="/"
        className={`transition-colors ${
          dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-[#013EFA]"
        }`}
      >
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <span className={dark ? "text-slate-600" : "text-slate-300"}>/</span>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`transition-colors ${
                  dark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-[#1637F5]"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`font-semibold ${dark ? "text-blue-400" : "text-slate-800"}`}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
