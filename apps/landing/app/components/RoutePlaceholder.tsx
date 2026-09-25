import React from "react";
import Link from "next/link";

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
    <main className="min-h-[70vh] flex flex-col justify-center items-center py-20 px-4 sm:px-6 bg-slate-50/50">
      <div className="max-w-2xl w-full mx-auto text-center space-y-6 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-36 bg-[#013EFA]/5 blur-2xl rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-[#013EFA]" />
          <span className="text-slate-500">{badge}:</span>
          <span className="font-semibold text-[#013EFA]">{route}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
          {description}
        </p>

        {subRoutes && subRoutes.length > 0 && (
          <div className="pt-8 border-t border-slate-100 mt-8">
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
              Available Routes
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {subRoutes.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-200 text-slate-700 hover:text-[#013EFA] transition-all"
                >
                  <span>{sub.label}</span>
                  <span className="text-slate-400">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
