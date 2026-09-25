import React from "react";
import { Kicker, Heading, Text, Icon } from "@bayesforce/ui";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

export interface PageHeaderProps {
  breadcrumbs?: BreadcrumbItem[];
  kicker: string;
  kickerIcon?: string;
  title: string;
  subtitle: string;
  dark?: boolean;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumbs,
  kicker,
  kickerIcon = "bolt",
  title,
  subtitle,
  dark = false,
  children,
}) => {
  return (
    <section
      className={`py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden ${
        dark ? "bg-[#08090C] text-white border-b border-white/10" : "bg-gradient-to-b from-blue-50/40 via-white to-white border-b border-slate-200/80"
      }`}
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} dark={dark} />}

        <div className="max-w-4xl">
          <div className="mb-4">
            <Kicker variant={dark ? "dark" : "cobalt"} icon={<Icon name={kickerIcon as any} size={15} />}>
              {kicker}
            </Kicker>
          </div>

          <Heading level="h1" dark={dark} className="mb-5 leading-[1.12] tracking-tight">
            {title}
          </Heading>

          <Text variant="lead" dark={dark} className="max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300 text-lg md:text-xl font-normal">
            {subtitle}
          </Text>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
};
