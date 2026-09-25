import React from "react";
import Link from "next/link";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../components/PageHeader";

export const metadata = {
  title: "About Bayesforce | Why We Exist & Operating Principles",
  description:
    "Bayesforce exists so systems can carry more of the machinery of work and people can carry more of their ambition. Learn about our beliefs, operating principles, and origins.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "About" }]}
        kicker="About Bayesforce"
        kickerIcon="compass"
        title="Systems Should Carry More of the Machinery so People Can Carry More Ambition."
        subtitle="We build AI capabilities inside organizations to turn existing systems, data, and workflows into intelligent operations."
      />

      {/* 2. Why Bayesforce Exists */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-[860px] mx-auto space-y-8 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
          <Kicker variant="cobalt" icon={<Icon name="sparkles" size={15} />}>
            Why Bayesforce Exists
          </Kicker>

          <Heading level="h2" className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Your people shouldn&apos;t have to be the integration layer.
          </Heading>

          <p>
            Organizations already run on CRMs, ERPs, databases, helpdesks, document stores, email, chat, project management tools, and BI dashboards. Yet despite all this software, human beings spend the majority of their working hours searching, reconciling, coordinating, reporting, following up, and manually keying data across disconnected tools.
          </p>

          <p className="text-xl font-semibold text-slate-900 border-l-4 border-[#1637F5] pl-6 py-2 italic bg-blue-50/50 rounded-r-2xl">
            Systems should carry more of the machinery of an organization so its people can carry more of its ambition.
          </p>

          <p>
            For decades, software recorded work without executing it. When information moved between systems or when exceptions arose, a human was required to act as the cognitive glue. Today, we can build AI systems that understand operational context, reason over messy real-world data, take action across existing tools, and operate reliably within explicit boundaries.
          </p>

          <p>
            Bayesforce does not replace organizations with black boxes. We build the engineering layers—data pipelines, AI coworkers, evaluation harnesses, and sovereign capability—that make AI work in production.
          </p>
        </div>
      </section>

      {/* 3. What We Believe */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-3xl mb-14">
            <Kicker variant="cobalt" icon={<Icon name="layers" size={15} />}>
              Core Convictions
            </Kicker>
            <Heading level="h2" className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              What We Believe
            </Heading>
            <Text variant="lead">
              Our engineering approach is grounded in five structural beliefs about artificial intelligence, modern software, and organizational design.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="font-mono text-xs font-bold text-[#1637F5] uppercase">
                Belief 01
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                AI should amplify human judgment rather than simply replace people.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The objective is not maximum autonomy for its own sake. It is appropriate automation that handles repetitive cognitive machinery while elevating human taste, ethics, and strategic discernment.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="font-mono text-xs font-bold text-[#1637F5] uppercase">
                Belief 02
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Software should increasingly carry work, not merely record it.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional enterprise SaaS created vast systems of record that left the integration burden on employees. The next generation of systems are systems of action that carry workflows forward end-to-end.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="font-mono text-xs font-bold text-[#1637F5] uppercase">
                Belief 03
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                AI adoption is not the same as AI-native operations.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Distributing generic chat licenses to employees creates prompt fatigue. Real operational advantage comes from redesigning critical workflows around reliable digital labor and structured context.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="font-mono text-xs font-bold text-[#1637F5] uppercase">
                Belief 04
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Production AI needs evidence, controls, and continuous improvement.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Demos are easy; production is disciplined. Autonomous workflows require workflow-specific evaluation suites, regression benchmarks, deterministic guardrails, tool tracing, and human oversight.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 md:col-span-2 lg:col-span-2">
              <div className="font-mono text-xs font-bold text-[#1637F5] uppercase">
                Belief 05
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Organizations should get better at learning from their own work.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every exception handled, document processed, and decision approved generates empirical evidence. An organization that captures and synthesizes this operational exhaust creates compounding capability over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How We Operate */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-3xl mb-14">
            <Kicker variant="cobalt" icon={<Icon name="settings" size={15} />}>
              Operating Principles
            </Kicker>
            <Heading level="h2" className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              How We Operate
            </Heading>
            <Text variant="lead">
              Our delivery methodology is structured around clarity, engineering rigor, and empirical accountability.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Start with the workflow.",
                desc: "We diagnose how work actually happens today before specifying models, prompts, or architectures.",
              },
              {
                num: "02",
                title: "Work with existing systems.",
                desc: "Your ERPs, CRMs, and databases stay. We layer intelligent action across the software you already trust.",
              },
              {
                num: "03",
                title: "Build for production.",
                desc: "We engineer evals, failure monitoring, latency budgets, and security controls from day one.",
              },
              {
                num: "04",
                title: "Keep humans where judgment matters.",
                desc: "Consequential actions remain subject to explicit human review, dual authorization, and clear audit trails.",
              },
              {
                num: "05",
                title: "Measure outcomes.",
                desc: "We track empirical operational metrics: cycle time reduction, error suppression, and recovered capacity.",
              },
              {
                num: "06",
                title: "Improve continuously.",
                desc: "Workflows collect edge cases and exceptions to iteratively refine evaluation benchmarks and prompts.",
              },
              {
                num: "07",
                title: "Reuse what can be reused.",
                desc: "We accelerate delivery using battle-tested architectural patterns, connector blueprints, and eval suites.",
              },
              {
                num: "08",
                title: "Update beliefs based on evidence.",
                desc: "We calibrate operational hypotheses against real production data rather than rigid dogma.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5"
              >
                <div className="font-mono text-xs font-bold text-[#1637F5]">
                  {item.num}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why the Name */}
      <section className="py-20 px-4 sm:px-6 bg-[#08090C] text-white">
        <div className="max-w-[860px] mx-auto space-y-8">
          <Kicker variant="dark" icon={<Icon name="scale" size={15} />}>
            The Origin
          </Kicker>

          <Heading level="h2" dark className="text-3xl md:text-4xl font-black">
            Why the Name Bayesforce?
          </Heading>

          <div className="space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              Our firm takes its name from <strong className="text-white font-semibold">Thomas Bayes</strong> (c. 1701–1761), the statistician and philosopher who formulated what is now known as Bayesian inference.
            </p>
            <p>
              Bayesian thinking is centered on a simple, profound discipline: <span className="text-amber-300 font-medium">updating beliefs in light of new evidence</span>. You start with a prior understanding of the world, test it against empirical reality, and revise your position as real data arrives.
            </p>
            <p>
              Modern organizations operate in dynamic environments where static assumptions rapidly decay. Applying Bayesian discipline to enterprise operations means building systems that continuously learn from their own execution, update their models against real exceptions, and compound organizational capability over time.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white font-bold text-lg">
                Have a workflow to discuss?
              </div>
              <p className="text-xs text-slate-400">
                Tell us where your team spends manual effort today.
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="font-bold"
                rightIcon={<Icon name="arrow-right" size={16} />}
              >
                Have a workflow to discuss? →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
