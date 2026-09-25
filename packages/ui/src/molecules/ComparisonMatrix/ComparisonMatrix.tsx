import React from "react";
import "./ComparisonMatrix.css";

export interface ComparisonRow {
  dimension: string;
  bayesforce: string;
  legacyConsulting: string;
  pointAiTools: string;
}

export interface ComparisonMatrixProps {
  rows: ComparisonRow[];
  className?: string;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  rows,
  className = "",
}) => {
  return (
    <div className={["bf-matrix-wrapper", className].filter(Boolean).join(" ")}>
      <table className="bf-matrix">
        <thead>
          <tr>
            <th className="bf-matrix__dimension">Strategic Dimension</th>
            <th className="bf-matrix__bayesforce">BayesForce</th>
            <th className="bf-matrix__legacy">Traditional Consulting</th>
            <th className="bf-matrix__point">Point AI Tools</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td className="bf-matrix__dimension">{row.dimension}</td>
              <td className="bf-matrix__bayesforce">{row.bayesforce}</td>
              <td className="bf-matrix__legacy">{row.legacyConsulting}</td>
              <td className="bf-matrix__point">{row.pointAiTools}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
