import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Icon, type IconName } from "../../atoms/Icons";
import "./Navigation.css";

export interface StepItem {
  title: ReactNode;
  description?: ReactNode;
  icon?: IconName | ReactNode;
  error?: boolean;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  activeStep?: number;
  steps: StepItem[];
  orientation?: "horizontal" | "vertical";
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep = 0,
      steps = [],
      orientation = "horizontal",
      onStepClick,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const renderStepIcon = (
      step: StepItem,
      idx: number,
      isCompleted: boolean,
      isActive: boolean,
      isError: boolean
    ) => {
      if (isError) {
        return <Icon name="alert-circle" size={16} />;
      }
      if (isCompleted) {
        return <Icon name="check" size={16} />;
      }
      if (step.icon) {
        if (typeof step.icon === "string") {
          return <Icon name={step.icon as IconName} size={16} />;
        }
        return step.icon;
      }
      return idx + 1;
    };

    return (
      <div
        ref={ref}
        className={[
          "bf-stepper",
          `bf-stepper--${orientation}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        {...props}
      >
        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;
          const isError = Boolean(step.error);
          const isLast = idx === steps.length - 1;

          return (
            <React.Fragment key={idx}>
              <div
                className={[
                  "bf-step",
                  isActive ? "bf-step--active" : "",
                  isCompleted ? "bf-step--completed" : "",
                  isError ? "bf-step--error" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onStepClick?.(idx)}
                role={onStepClick ? "button" : undefined}
                tabIndex={onStepClick ? 0 : undefined}
                style={{ cursor: onStepClick ? "pointer" : "default" }}
              >
                <div className="bf-step-icon-circle">
                  {renderStepIcon(step, idx, isCompleted, isActive, isError)}
                </div>
                <div className="bf-step-text">
                  <div className="bf-step-title">{step.title}</div>
                  {step.description && (
                    <div className="bf-step-description">{step.description}</div>
                  )}
                </div>
              </div>

              {!isLast && orientation === "horizontal" && (
                <div
                  className={[
                    "bf-step-line",
                    isCompleted ? "bf-step-line--completed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";
