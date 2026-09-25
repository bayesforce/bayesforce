"use client";

import React, { useState } from "react";
import { Heading, Text, Kicker } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icons";
import { Input, Select, TextArea } from "../../atoms/Inputs";
import { Button } from "../../atoms/Buttons";
import { GridCanvas } from "../../atoms/Display";
import "./BookingSection.css";

export const BookingSection: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "coo",
    workflow: "operating_review",
    teamSize: "20-50",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="diagnostic" className={["bf-booking-section", className].filter(Boolean).join(" ")}>
      <GridCanvas variant="dots-dark" />
      <div className="bf-booking-section__inner">
        <div className="bf-booking-card">
          <div className="bf-booking-grid">
            {/* Info Side */}
            <div className="bf-booking-info">
              <div>
                <Kicker variant="dark" icon={<Icon name="calendar" size={18} />}>
                  Execution Diagnostic
                </Kicker>
                <Heading level="h1" dark className="mb-4">
                  Take the First Paid Step in Weeks
                </Heading>
                <Text variant="lead" dark className="mb-6">
                  Select one recurring operational bottleneck. In 2-4 weeks, we will map real work, establish empirical baselines, and deliver a working decision artifact.
                </Text>

                <div className="bf-booking-benefits">
                  <div className="bf-booking-benefit-item">
                    <span className="bf-booking-benefit-icon">
                      <Icon name="check" size={20} />
                    </span>
                    <span>Direct founder-led diagnostic evaluation</span>
                  </div>
                  <div className="bf-booking-benefit-item">
                    <span className="bf-booking-benefit-icon">
                      <Icon name="check" size={20} />
                    </span>
                    <span>100% Client ownership of all source code & systems</span>
                  </div>
                  <div className="bf-booking-benefit-item">
                    <span className="bf-booking-benefit-icon">
                      <Icon name="check" size={20} />
                    </span>
                    <span>Zero open-ended billable hours</span>
                  </div>
                </div>
              </div>

              <div className="bf-booking-market-box">
                <div className="bf-booking-market-title">Primary Beachhead Market</div>
                <div>Indian Mid-Market (Mumbai, Pune, NCR, Bangalore) & Global Operations-Heavy Enterprises.</div>
              </div>
            </div>

            {/* Form Side */}
            <div>
              {submitted ? (
                <div className="bf-booking-success">
                  <Icon name="check" size={54} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnostic Request Received</h3>
                  <p className="text-slate-300 text-base mb-6">
                    Thank you, {formData.name}. Our partners will review your workflow context and respond within 24 hours to schedule the diagnostic kick-off.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Workflow
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bf-booking-form">
                  <div className="bf-booking-form-row">
                    <Input
                      label="Your Name"
                      placeholder="e.g. Anand Sharma"
                      required
                      dark
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Work Email"
                      type="email"
                      placeholder="anand@company.com"
                      required
                      dark
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="bf-booking-form-row">
                    <Input
                      label="Company Name"
                      placeholder="e.g. Apex Global Services"
                      required
                      dark
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    <Select
                      label="Your Operating Role"
                      dark
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      options={[
                        { value: "founder", label: "Founder / CEO" },
                        { value: "coo", label: "COO / Head of Operations" },
                        { value: "cfo", label: "CFO / Finance Leader" },
                        { value: "vp_delivery", label: "VP Delivery / BU Head" },
                        { value: "revops", label: "Head of Revenue Operations" },
                      ]}
                    />
                  </div>

                  <div className="bf-booking-form-row">
                    <Select
                      label="Primary Bottleneck Workflow"
                      dark
                      value={formData.workflow}
                      onChange={(e) => setFormData({ ...formData, workflow: e.target.value })}
                      options={[
                        { value: "operating_review", label: "Management Operating Review & Reporting" },
                        { value: "delivery_utilization", label: "Delivery & Utilization Tracking" },
                        { value: "invoice_exceptions", label: "Invoice & Revenue Leakage Exceptions" },
                        { value: "revops_handoff", label: "Sales-to-Delivery Deal Handoff" },
                        { value: "customer_support", label: "Customer Operations & Triage" },
                      ]}
                    />
                    <Select
                      label="Team Size"
                      dark
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      options={[
                        { value: "10-25", label: "10 - 25 People" },
                        { value: "25-100", label: "25 - 100 People" },
                        { value: "100-500", label: "100 - 500 People" },
                        { value: "500+", label: "500+ People" },
                      ]}
                    />
                  </div>

                  <TextArea
                    label="Current Tools & Nature of Bottleneck (Optional)"
                    placeholder="e.g. We spend 2 days every week reconciling Excel sheets from ERP and Salesforce before our leadership review..."
                    dark
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    fullWidth
                    rightIcon={<Icon name="arrow-right" size={20} />}
                  >
                    Request Execution Diagnostic
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
