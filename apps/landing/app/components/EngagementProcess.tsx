"use client";

import React, { useState } from "react";
import { Icon, Heading, Text, Kicker } from "@bayesforce/ui";

const ENGAGEMENT_STAGES = [
  { step: 1, name: "Understand", desc: "Inspect live workflow, interviews with operating owners, and review existing system topology." },
  { step: 2, name: "Map", desc: "Decompose the workflow into 13-stage architecture: identifying data, rules, and human gates." },
  { step: 3, name: "Prioritize", desc: "Quantify manual drag, estimate ROI, and isolate the single highest-yield operational wedge." },
  { step: 4, name: "Engineer", desc: "Build extraction pipelines, multi-agent state machines, and sandboxed tool connections." },
  { step: 5, name: "Control", desc: "Deploy golden evaluation suites, permission boundaries, and 1-click human review cards." },
  { step: 6, name: "Deploy", desc: "Staged production rollout into client staging/production environment with monitoring." },
  { step: 7, name: "Measure", desc: "Measure empirical cycle time reduction, throughput expansion, and zero-error precision." },
  { step: 8, name: "Improve", desc: "Continuous feedback ingestion, edge-case cataloging, and internal team capability transfer." },
];

export const EngagementProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Kicker variant="cobalt" icon={<Icon name="compass" size={15} />}>
            Productized Engagement Lifecycle
          </Kicker>
          <Heading level="h2" className="mb-3 text-3xl md:text-4xl">
            How Bayesforce Engages
          </Heading>
          <Text variant="lead">
            A productized service: tailored to your organization, but increasingly repeatable through reusable engineering patterns, integrations, evaluation systems, and operating playbooks.
          </Text>
        </div>

        {/* Linear 8-Stage Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {ENGAGEMENT_STAGES.map((s) => {
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? "bg-[#013EFA] text-white border-[#013EFA] shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-blue-50/50 hover:border-blue-200"
                }`}
              >
                <div>
                  <span
                    className={`text-xs font-bold block mb-1 ${
                      isActive ? "text-blue-200" : "text-slate-400"
                    }`}
                  >
                    0{s.step}
                  </span>
                  <div className="font-bold text-sm leading-snug">{s.name}</div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full mt-4 flex items-center justify-center text-[10px] ${
                    isActive ? "bg-white text-[#013EFA]" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  <Icon name="arrow-right" size={11} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Box for Selected Stage */}
        <div className="p-8 rounded-3xl bg-[#11151B] text-white border border-[#2A3441] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#013EFA] text-white font-bold flex items-center justify-center text-sm shadow-md shadow-blue-500/30">
                0{activeStep}
              </span>
              <h3 className="text-2xl font-black text-white">
                Stage {activeStep}: {ENGAGEMENT_STAGES[activeStep - 1].name}
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl font-normal">
              {ENGAGEMENT_STAGES[activeStep - 1].desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 text-xs text-slate-300 shrink-0 space-y-1">
            <div className="text-blue-400 font-bold tracking-wider uppercase">Lifecycle Flow</div>
            <div className="font-medium text-slate-400">Diagnose &bull; Design &bull; Build &bull; Integrate &bull; Deploy &bull; Operate &bull; Measure</div>
          </div>
        </div>
      </div>
    </section>
  );
};
