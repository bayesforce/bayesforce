"use client";

import React, { useState } from "react";
import { Heading, Text, Kicker, Icon, Button } from "@bayesforce/ui";
import { PageHeader } from "../components/PageHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    workflowToImprove: "",
    systemsInvolved: "",
    bottleneckDescription: "",
    anythingElse: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Contact" }]}
        kicker="Initiate an Engagement"
        kickerIcon="mail"
        title="Show Us Your Workflow."
        subtitle="Tell us what happens today, where people spend time, and which systems are involved. We'll start from the workflow rather than from an AI product."
      />

      {/* 2. Contact Content Grid */}
      <section className="py-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & What Happens Next */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <Kicker variant="cobalt" icon={<Icon name="sparkles" size={15} />}>
                Our Approach
              </Kicker>
              <h3 className="text-xl font-bold text-slate-900">
                We start from the work, not a generic software pitch.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                When you share a workflow with Bayesforce, we analyze how information moves, where manual reconciliation accumulates, what should be automated, and what must remain under human review.
              </p>
              <div className="pt-2 space-y-3 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Icon name="check" size={15} className="text-[#1637F5]" />
                  <span>No pushy qualification calls or generic slide decks.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size={15} className="text-[#1637F5]" />
                  <span>Direct review by experienced AI & systems engineers.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" size={15} className="text-[#1637F5]" />
                  <span>Clear assessment of technical feasibility and ROI.</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Box */}
            <div className="p-8 rounded-3xl bg-[#08090C] text-white border border-white/10 space-y-6">
              <div className="text-xs font-mono uppercase font-bold text-blue-400 tracking-wider">
                Direct Channels
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="mail" size={18} className="text-[#1637F5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Direct Inquiries:</span>
                    <a href="mailto:sagar@bayesforce.com" className="font-bold text-white hover:text-blue-400 transition-colors">
                      sagar@bayesforce.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="globe" size={18} className="text-[#1637F5] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Delivery Centers:</span>
                    <span className="text-slate-200">Mumbai & Pune, India (Global Remote Engagements)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="shield-check" size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">Confidentiality:</span>
                    <span className="text-slate-200">Strict NDA protection for all workflow details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Workflow Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <Icon name="check" size={32} />
                  </div>
                  <Heading level="h2" className="text-2xl font-bold text-slate-900">
                    Workflow Details Received
                  </Heading>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, {formData.name}. Our systems engineering team will review your workflow context and get back to you promptly with initial feasibility thoughts.
                  </p>
                  <div className="pt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                      className="font-bold"
                    >
                      Submit Another Workflow →
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">
                      Start the Conversation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Tell us how the work happens today. No long qualification questions required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Health"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                        Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Head of Operations"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                      What workflow are you trying to improve? *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.workflowToImprove}
                      onChange={(e) => setFormData({ ...formData, workflowToImprove: e.target.value })}
                      placeholder="e.g. Three-way invoice reconciliation / RFP response generation / IT access triage"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                      Which systems are involved? *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.systemsInvolved}
                      onChange={(e) => setFormData({ ...formData, systemsInvolved: e.target.value })}
                      placeholder="e.g. NetSuite, Salesforce, Gmail, Zendesk, SharePoint PDFs"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                      What is currently difficult / expensive / slow? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.bottleneckDescription}
                      onChange={(e) => setFormData({ ...formData, bottleneckDescription: e.target.value })}
                      placeholder="e.g. Our operations team spends 30 hours a week manually extracting line items from vendor PDFs and matching them against PO records. Exceptions create a 9-day delay in our month-end close."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5 uppercase">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={2}
                      value={formData.anythingElse}
                      onChange={(e) => setFormData({ ...formData, anythingElse: e.target.value })}
                      placeholder="e.g. We require deployment inside our AWS VPC, or we have custom security requirements."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1637F5]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      className="w-full justify-center font-bold"
                      rightIcon={<Icon name="arrow-right" size={16} />}
                    >
                      Start the conversation →
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
