import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../components/PageHeader";
import { CAREER_ROLES } from "../data/site-data";

export const metadata = {
  title: "Careers at Bayesforce | Build Systems That Make Organizations More Capable",
  description:
    "Join Bayesforce to engineer production AI systems, data pipelines, workflow state machines, and statistical evaluation harnesses.",
};

const DISCIPLINES = [
  {
    title: "AI Engineering",
    icon: "cpu",
    desc: "Designing and orchestrating multi-agent systems, structured reasoning pipelines, prompt engineering, and deterministic fallback mechanics.",
  },
  {
    title: "Workflow Engineering",
    icon: "layers",
    desc: "Mapping enterprise operating cadences, dissecting cross-team handoffs, and engineering robust state machines for mission-critical operations.",
  },
  {
    title: "Data & Context Engineering",
    icon: "database",
    desc: "Integrating messy enterprise sources (ERP, CRM, SQL, PDFs) into synchronized, AI-ready datasets and semantic retrieval systems.",
  },
  {
    title: "Evaluation & Reliability",
    icon: "shield-check",
    desc: "Building workflow-specific evaluation harnesses, statistical regression benchmarks, latency budgets, and deterministic guardrails.",
  },
  {
    title: "Applied Research",
    icon: "sparkles",
    desc: "Investigating state-of-the-art foundation models, agentic frameworks, structured decoding, and context compression for enterprise workloads.",
  },
  {
    title: "Product Engineering",
    icon: "code",
    desc: "Developing beautiful, responsive interfaces and human-in-the-loop decision environments that empower operators to supervise autonomous tasks.",
  },
  {
    title: "Implementation",
    icon: "zap",
    desc: "Deploying production capabilities inside client virtual private clouds and enterprise environments with high velocity and zero disruption.",
  },
  {
    title: "Business Development",
    icon: "trending-up",
    desc: "Engaging executive leadership (CFOs, COOs, VPs of Ops) to diagnose complex workflow bottlenecks and scope high-ROI engagements.",
  },
  {
    title: "Capability Building",
    icon: "book-open",
    desc: "Designing and delivering corporate workshops, training champions, and transferring modern AI engineering practices to in-house teams.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Careers" }]}
        kicker="Careers at Bayesforce"
        kickerIcon="users"
        title="Build Systems That Make Organizations More Capable."
        subtitle="We build AI capabilities inside organizations so their systems carry more of the machinery of work and their people can carry more of their ambition."
      />

      {/* 2. The Disciplines of Work */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-3xl mb-14">
            <Kicker variant="cobalt" icon={<Icon name="sparkles" size={15} />}>
              The Work We Do
            </Kicker>
            <Heading level="h2" className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Disciplines of Systems & Capability Engineering
            </Heading>
            <Text variant="lead">
              Building AI that functions reliably in production requires cross-disciplinary mastery across nine critical engineering and operational vectors.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DISCIPLINES.map((d, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1637F5] flex items-center justify-center">
                  <Icon name={d.icon as any} size={18} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{d.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Work Here & How We Operate */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Kicker variant="cobalt" icon={<Icon name="check-circle" size={15} />}>
                Why Work Here
              </Kicker>
              <Heading level="h2" className="text-3xl font-black text-slate-900">
                High Agency, Production Craft, and Direct Impact
              </Heading>
              <p className="text-slate-700 text-base leading-relaxed">
                At Bayesforce, you won&apos;t spend your days building disposable AI demo apps or writing bloated slide decks. You will work on real enterprise machinery—rebuilding core workflows that process millions in transactions and thousands of operational hours.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Extreme leverage:</strong> Small, elite teams owning full-stack production systems without layers of bureaucracy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Deep technical craft:</strong> Work directly with LLM evals, deterministic state machines, and live enterprise data.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Service-to-product upside:</strong> Reusable patterns and frameworks directly translate into productized software.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Kicker variant="cobalt" icon={<Icon name="settings" size={15} />}>
                How Bayesforce Operates
              </Kicker>
              <Heading level="h2" className="text-3xl font-black text-slate-900">
                The Operating Principles We Live By
              </Heading>
              <p className="text-slate-700 text-base leading-relaxed">
                We organize our team around clarity, empirical evidence, and direct customer outcomes rather than corporate politics.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-[#1637F5] shrink-0 mt-0.5" />
                  <span><strong>Start with the workflow:</strong> We solve real operational problems before choosing architectures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-[#1637F5] shrink-0 mt-0.5" />
                  <span><strong>Build for production:</strong> Every system includes regression suites, observability, and cost controls.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="text-[#1637F5] shrink-0 mt-0.5" />
                  <span><strong>Update on evidence:</strong> We treat ideas as hypotheses and update them when production metrics speak.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Open Roles Section */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <Kicker variant="cobalt" icon={<Icon name="briefcase" size={15} />}>
                Current Openings
              </Kicker>
              <Heading level="h2" className="text-3xl font-black text-slate-900">
                Open Engineering & Capability Roles
              </Heading>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Mumbai / Pune Centers & Global Remote
            </div>
          </div>

          <div className="space-y-8">
            {CAREER_ROLES.map((role) => (
              <div
                key={role.id}
                className="p-8 md:p-10 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-300 transition-all space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#1637F5] uppercase tracking-wider block mb-1">
                      {role.department} • {role.type}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{role.title}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 text-slate-700">
                      {role.location}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-[#1637F5] font-bold">
                      {role.experience}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {role.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-bold text-slate-900 uppercase">
                      What You Will Build & Lead:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {role.whatYouWillBuild.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="check" size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs font-bold text-slate-900 uppercase">
                      What We Look For:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {role.requirements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="arrow-right" size={13} className="text-[#1637F5] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-mono">
                    Direct engineering leadership review.
                  </div>
                  <a href={`mailto:sagar@bayesforce.com?subject=Application for ${encodeURIComponent(role.title)}`}>
                    <Button variant="primary" size="sm" className="font-bold">
                      Apply via Email →
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How to Apply & General Interest */}
      <section className="py-20 px-4 sm:px-6 bg-[#08090C] text-white">
        <div className="max-w-[860px] mx-auto text-center space-y-6">
          <Kicker variant="dark" icon={<Icon name="mail" size={15} />}>
            How to Apply
          </Kicker>
          <Heading level="h2" dark className="text-3xl font-black">
            General Interest & Direct Application
          </Heading>
          <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
            Don&apos;t see an exact opening that matches your profile? We are always seeking high-agency engineers, systems thinkers, and capability builders. Send us links to your projects, GitHub repositories, technical writings, or a brief analysis of an operational workflow you believe should be automated.
          </p>
          <div className="pt-4">
            <a href="mailto:sagar@bayesforce.com?subject=Bayesforce General Interest Application">
              <Button
                variant="primary"
                size="lg"
                className="font-bold"
                rightIcon={<Icon name="arrow-right" size={16} />}
              >
                Send General Application to sagar@bayesforce.com →
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
