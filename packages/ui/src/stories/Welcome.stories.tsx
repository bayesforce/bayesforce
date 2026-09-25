import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Text, Kicker } from "../atoms/Typography";
import { Badge } from "../atoms/Badges";
import { Button } from "../atoms/Buttons";
import { Icon } from "../atoms/Icons";
import { Card } from "../atoms/Display";

const meta: Meta = {
  title: "Welcome/BayesForce Design System",
  parameters: {
    layout: "padded",
  },
};

export default meta;

export const Overview: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem 1rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <Kicker variant="cobalt" icon={<Icon name="bayes-logo" size={18} />}>
          BayesForce UI Universe
        </Kicker>
        <Heading level="hero" gradient className="mb-2">
          Make More Happen
        </Heading>
        <Text variant="lead">
          Enterprise Design System and Component Library for BayesForce Organizational Execution Intelligence.
        </Text>
      </div>

      {/* Palette Tokens */}
      <Heading level="h2" className="mb-4">
        1. Executive Color Tokens (Zero Teal)
      </Heading>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
        <Card>
          <div style={{ height: 60, background: "#013EFA", borderRadius: 8, marginBottom: 8 }} />
          <div style={{ fontWeight: 700 }}>Signature Cobalt Blue</div>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748B" }}>#013EFA (Logo Brand)</div>
        </Card>
        <Card>
          <div style={{ height: 60, background: "#11151B", borderRadius: 8, marginBottom: 8 }} />
          <div style={{ fontWeight: 700 }}>Obsidian Black</div>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748B" }}>#11151B (Obsidian Canvas)</div>
        </Card>
        <Card>
          <div style={{ height: 60, background: "#F59E0B", borderRadius: 8, marginBottom: 8 }} />
          <div style={{ fontWeight: 700 }}>Sovereign Gold</div>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748B" }}>#F59E0B (Highlight)</div>
        </Card>
        <Card>
          <div style={{ height: 60, background: "#64748B", borderRadius: 8, marginBottom: 8 }} />
          <div style={{ fontWeight: 700 }}>Titanium Slate</div>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748B" }}>#64748B (Muted)</div>
        </Card>
        <Card>
          <div style={{ height: 60, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, marginBottom: 8 }} />
          <div style={{ fontWeight: 700 }}>Ice Canvas</div>
          <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748B" }}>#F8FAFC (Canvas)</div>
        </Card>
      </div>

      {/* Interactive Primitives Sample */}
      <Heading level="h2" className="mb-4">
        2. Component Primitives
      </Heading>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "2rem" }}>
        <Button variant="primary">Primary Cobalt</Button>
        <Button variant="gold">Sovereign Gold</Button>
        <Button variant="dark">Obsidian Dark</Button>
        <Button variant="outline">Outline</Button>
        <Badge variant="cobalt" withDot>Cobalt Badge</Badge>
        <Badge variant="gold">Gold Metric</Badge>
        <Badge variant="success">Success State</Badge>
      </div>
    </div>
  ),
};
