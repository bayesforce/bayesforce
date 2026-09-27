"use client";

import { useState } from "react";
import type { ManualFlow, AIAssistedFlow, FlowStep } from "@/content/businessFunctions";
import s from "./WorkflowDragViz.module.css";

interface Props {
  manual: ManualFlow;
  aiAssisted: AIAssistedFlow;
}

function stepClass(step: FlowStep): string {
  const map: Record<FlowStep["type"], string> = {
    input:    s.stepInput,
    system:   s.stepSystem,
    human:    s.stepHuman,
    decision: s.stepDecision,
    output:   s.stepOutput,
  };
  return map[step.type] ?? "";
}

export function WorkflowDragViz({ manual, aiAssisted }: Props) {
  const [showAI, setShowAI] = useState(false);

  const flow = showAI ? aiAssisted : manual;
  const painSet   = new Set(manual.painPoints);
  const autoSet   = new Set(aiAssisted.automatedSteps);
  const humanSet  = new Set(aiAssisted.humanSteps);

  return (
    <div className={s.container}>
      <div className={s.flow} role="img" aria-label={showAI ? "AI-assisted workflow" : "Manual workflow"}>
        {flow.steps.map((step, i) => {
          const idx = String(i);
          const isFriction  = !showAI && painSet.has(idx);
          const isAutomated = showAI  && autoSet.has(idx);
          const isHuman     = showAI  && humanSet.has(idx);

          return (
            <div key={idx} className={s.stepRow}>
              <div
                className={[
                  s.step,
                  stepClass(step),
                  isFriction ? s.stepFriction : "",
                ].filter(Boolean).join(" ")}
              >
                <span className={s.stepLabel}>{step.label}</span>
                {isFriction  && <span className={`${s.stepBadge} ${s.badgeFriction}`} aria-label="friction point">Friction</span>}
                {isAutomated && <span className={`${s.stepBadge} ${s.badgeAI}`}       aria-label="automated by AI">AI</span>}
                {isHuman     && <span className={`${s.stepBadge} ${s.badgeHuman}`}    aria-label="human step">Human</span>}
              </div>
              {i < flow.steps.length - 1 && <div className={s.connector} aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={s.toggle}
        onClick={() => setShowAI((v) => !v)}
        aria-pressed={showAI}
      >
        <span className={s.toggleDot} aria-hidden="true" />
        {showAI ? "Show manual process" : "Show AI-assisted view"}
      </button>
    </div>
  );
}
