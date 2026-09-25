"use client";

import React from "react";
import Link from "next/link";
import { Heading, Text, Button, Icon, Kicker } from "@bayesforce/ui";

export const DiagnosticCTA: React.FC<{
  title?: string;
  subtitle?: string;
  dark?: boolean;
}> = ({
  title = "Have a workflow that shouldn't require this much human effort?",
  subtitle = "Show us how the work happens today. We'll help identify what can be automated, what should remain human, and what it takes to make the workflow work in production.",
  dark = true,
}) => {
  return (
    <section className={`py-20 px-4 sm:px-6 relative overflow-hidden ${dark ? "bg-[#11151B] text-white border-t border-[#2A3441]" : "bg-blue-50/50 border-t border-slate-200"}`}>
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#013EFA]/12 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10 text-center">
        <div className="inline-flex mb-4">
          <Kicker variant={dark ? "dark" : "cobalt"} icon={<Icon name="sparkles" size={15} />}>
            Start From the Workflow
          </Kicker>
        </div>

        <Heading level="h1" dark={dark} className="mb-4 max-w-3xl mx-auto leading-tight text-3xl md:text-4xl">
          {title}
        </Heading>

        <Text variant="lead" dark={dark} className="max-w-2xl mx-auto mb-9 text-slate-400">
          {subtitle}
        </Text>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              variant="primary"
              size="lg"
              className="font-bold shadow-lg shadow-blue-500/20"
              rightIcon={<Icon name="arrow-right" size={16} />}
            >
              Show us your workflow
            </Button>
          </Link>
          <Link href="/what-we-build">
            <Button
              variant={dark ? "secondary" : "outline"}
              size="lg"
              className={dark ? "border-white/20 text-white hover:bg-white/10" : ""}
              leftIcon={<Icon name="layers" size={16} />}
            >
              See what we build
            </Button>
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <Icon name="check" size={14} className="text-emerald-400" />
            <span>100% Client Source Code & IP Ownership</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" size={14} className="text-emerald-400" />
            <span>Systems of Record Stay in Place</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" size={14} className="text-emerald-400" />
            <span>Sensible Automation, Not Maximum Autonomy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
