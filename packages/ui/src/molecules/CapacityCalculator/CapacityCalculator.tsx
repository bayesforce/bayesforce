"use client";

import React, { useState } from "react";
import { Button } from "../../atoms/Buttons";
import "./CapacityCalculator.css";

export interface CapacityCalculatorProps {
  onBookAudit?: () => void;
  className?: string;
}

export const CapacityCalculator: React.FC<CapacityCalculatorProps> = ({
  onBookAudit,
  className = "",
}) => {
  const [teamSize, setTeamSize] = useState<number>(20);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [avgCostPerYearLakhs, setAvgCostPerYearLakhs] = useState<number>(18); // INR 18L or ~$22k USD avg

  // Calculations
  const weeklyWastedHours = teamSize * hoursPerWeek;
  const annualWastedHours = weeklyWastedHours * 48; // 48 working weeks
  const hoursLiberated = Math.round(annualWastedHours * 0.72); // 72% average automation/coordination liberation
  const equivalentFTEUnlocked = ((teamSize * 3.4)).toFixed(0);
  const annualSavingsValueLakhs = Math.round((hoursLiberated / (48 * 40)) * avgCostPerYearLakhs);

  return (
    <div className={["bf-calculator", className].filter(Boolean).join(" ")}>
      <div className="bf-calculator__grid">
        {/* Controls */}
        <div className="bf-calculator__controls">
          <div>
            <span className="bf-calculator__result-kicker">Interactive Leverage Simulator</span>
            <h3 className="text-xl font-bold text-white mb-2">Estimate Your Operational Delta</h3>
            <p className="text-sm text-slate-400">
              Calculate how many hours of coordination machinery can be automated into operational throughput.
            </p>
          </div>

          <div className="bf-calculator__slider-group">
            <div className="bf-calculator__slider-header">
              <span>Core Team Size (Operations / Rev / PM)</span>
              <span className="bf-calculator__slider-val">{teamSize} people</span>
            </div>
            <input
              type="range"
              min={5}
              max={150}
              step={1}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="bf-calculator__slider"
              aria-label="Team size"
            />
          </div>

          <div className="bf-calculator__slider-group">
            <div className="bf-calculator__slider-header">
              <span>Weekly Coordination & Review Hours / Person</span>
              <span className="bf-calculator__slider-val">{hoursPerWeek} hrs / wk</span>
            </div>
            <input
              type="range"
              min={4}
              max={25}
              step={1}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="bf-calculator__slider"
              aria-label="Weekly coordination hours"
            />
          </div>

          <div className="bf-calculator__slider-group">
            <div className="bf-calculator__slider-header">
              <span>Average Annual Compensation Per Operator</span>
              <span className="bf-calculator__slider-val">₹{avgCostPerYearLakhs} L / yr</span>
            </div>
            <input
              type="range"
              min={6}
              max={50}
              step={2}
              value={avgCostPerYearLakhs}
              onChange={(e) => setAvgCostPerYearLakhs(Number(e.target.value))}
              className="bf-calculator__slider"
              aria-label="Average cost per operator"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bf-calculator__results">
          <div className="bf-calculator__result-main">
            <div className="bf-calculator__result-kicker">Effective Team Capacity Output</div>
            <div className="bf-calculator__result-multiplier">
              {teamSize} → {equivalentFTEUnlocked} FTE
            </div>
            <div className="bf-calculator__result-sub">
              Your {teamSize}-person team operates with the output equivalent of ~{equivalentFTEUnlocked} people
            </div>
          </div>

          <div className="bf-calculator__stats-row">
            <div className="bf-calculator__stat-item">
              <div className="bf-calculator__stat-num">
                {hoursLiberated.toLocaleString()} hrs
              </div>
              <div className="bf-calculator__stat-lbl">Annual Judgment Hours Liberated</div>
            </div>
            <div className="bf-calculator__stat-item">
              <div className="bf-calculator__stat-num" style={{ color: "#F59E0B" }}>
                ₹{annualSavingsValueLakhs} Lakhs
              </div>
              <div className="bf-calculator__stat-lbl">Annual Operating Value Created</div>
            </div>
          </div>

          <div className="mt-2">
            <Button
              variant="gold"
              size="lg"
              fullWidth
              onClick={onBookAudit}
            >
              Verify Your Baseline In 2-Week Sprint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
