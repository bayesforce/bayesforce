import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../../components/PageHeader";
import { DiagnosticCTA } from "../../components/DiagnosticCTA";
import { CrossLinksSection } from "../../components/CrossLinksSection";
import { CAPABILITIES } from "../../data/site-data";

export const metadata = {
  title: "AI Capability: Build the Capability to Do It Yourself | Bayesforce",
  description:
    "We transfer the methods, practices, and engineering knowledge teams need to identify, design, implement, operate, and improve AI-enabled work themselves.",
};

export default function AICapabilityPage() {
  const cap = CAPABILITIES.find((c) => c.slug === "ai-capability")!;

  const deliveryFormats = [
    { title: "Executive Alignment Workshops", format: "1–2 Day Sessions", desc: "For C-suite & board members: AI opportunity sizing, economics of digital labor, and capital allocation." },
    { title: "Applied Agent Engineering Bootcamps", format: "2–4 Week Intensive", desc: "For software & data engineers: state machines, hybrid retrieval, tool sandboxing, and eval harnesses." },
    { title: "Workflow-Specific Operator Training", format: "Tailored Functional Sprints", desc: "For Finance, Sales, Legal, and Ops leads: workflow redesign, prompt contracts, and human review mastery." },
    { title: "Train-the-Trainer / AI Champions", format: "Enterprise Scale Program", desc: "Upskilling internal transformation champions to independently identify and deploy new AI workflows." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[
          { label: "What We Build", href: "/what-we-build" },
          { label: "AI Capability" },
        ]}
        kicker="Capability Pillar 04"
        kickerIcon="sparkles"
        title="AI Capability"
        subtitle={cap.positioning}
      />

      {/* 2. Positioning & Anti-Dependency Stance */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Kicker variant="cobalt" icon={<Icon name="users" size={15} />}>
              Sustainable In-House Competence
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 leading-tight">
              Build the capability to do it yourself.
            </Heading>
            <Text variant="body" className="text-slate-600 leading-relaxed text-base">
              Not every organization wants Bayesforce to build and operate every AI capability for them. We also transfer the methods, practices, and engineering knowledge teams need to identify, design, implement, operate, and improve AI-enabled work themselves.
            </Text>
            <div className="p-6 rounded-2xl bg-purple-50/80 border border-purple-200 text-purple-950 text-sm leading-relaxed space-y-2">
              <div className="font-bold flex items-center gap-2 text-purple-900">
                <Icon name="sparkles" size={16} />
                Knowledge Transfer, Not Theory
              </div>
              <p>
                L&D is not a separate training business bolted onto Bayesforce. It is direct knowledge transfer from the capabilities we accumulate through real production implementations.
              </p>
            </div>
          </div>

          {/* Flywheel Box */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#08090C] text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 blur-[80px] rounded-full pointer-events-none" />
            <Kicker variant="dark" icon={<Icon name="activity" size={15} />}>
              The Bayesforce Capability Flywheel
            </Kicker>
            <h3 className="text-2xl font-bold text-white mb-4 mt-2">
              From Real Implementations to In-House Mastery
            </h3>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                <span className="text-blue-400 font-bold">1. What We Build</span>
                <span className="text-slate-500">→</span>
                <span>Real-world client workflow implementations</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                <span className="text-purple-400 font-bold">2. What We Learn</span>
                <span className="text-slate-500">→</span>
                <span>Empirical failure modes and engineering patterns</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">3. What We Publish</span>
                <span className="text-slate-500">→</span>
                <span>Open case studies, playbooks, and research</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                <span className="text-amber-400 font-bold">4. What We Teach</span>
                <span className="text-slate-500">→</span>
                <span>Hands-on bootcamps and workflow redesign</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-500/20 border border-blue-400/30 text-white font-bold flex items-center gap-2">
                <span>5. What Teams Do Themselves</span>
                <span className="text-emerald-400">→ Full In-House Sovereignty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capability Modules */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              Capability Programs
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900">
              Four Dimensions of Organizational AI Capability
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cap.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 font-mono font-bold text-xs flex items-center justify-center border border-purple-200">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Module 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  {pillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <Icon name="check" size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Delivery Formats & Capability Measurement */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Kicker variant="cobalt" icon={<Icon name="book-open" size={15} />}>
              Delivery & Measurement
            </Kicker>
            <Heading level="h2" className="text-3xl font-black text-slate-900 mb-3">
              Delivery Formats with Measurable Outcomes
            </Heading>
            <Text variant="lead">
              Serious programs should have measurable learning and operational capability outcomes rather than simply tracking attendance.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {deliveryFormats.map((fmt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 inline-block mb-3">
                    {fmt.format}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{fmt.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{fmt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button variant="primary" size="md" className="font-bold" rightIcon={<Icon name="arrow-right" size={14} />}>
                Build AI capability in-house →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Cross Links */}
      <CrossLinksSection
        title="Workflows & Case Studies Informed by Our Methods"
        subtitle="See how our capability transfer programs translate into real operational momentum."
        workflowSlugs={cap.relatedWorkflows}
        insightSlugs={cap.relatedInsights}
      />

      {/* 6. CTA */}
      <DiagnosticCTA
        title="Ready to build sovereign AI capability inside your organization?"
        subtitle="Tell us which teams you want to upskill and which workflows you want to tackle. We'll design a customized capability transfer program."
      />
    </main>
  );
}
