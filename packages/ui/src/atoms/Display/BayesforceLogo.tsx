import React, { forwardRef } from "react";
import {
  Logo,
  LogoMark,
  type LogoProps,
  type LogoVariant,
  type LogoTheme,
  type LogoSize,
  type LogoWeight,
  BAYESFORCE_MARK_PATHS,
} from "./Logo";

export { Logo, LogoMark, BAYESFORCE_MARK_PATHS };
export type { LogoProps, LogoVariant, LogoTheme, LogoSize, LogoWeight };

export interface BayesforceLogoProps extends LogoProps {}

/**
 * BayesforceLogo (Corporate Premium Edition)
 *
 * Implements art-directed corporate optical proportions:
 * - Optical Height: Cap-height ~74% of mark height
 * - Optical Alignment: Balanced baseline countering descenders/ascenders
 * - Outfit SemiBold 600 with -0.025em tracking
 * - Integrated 'Bayes' + 'force' color lockup
 * - Restrained 0.28x-0.3x gap scale
 * - Master SVG vector geometry
 */
export const BayesforceLogo = forwardRef<HTMLDivElement, BayesforceLogoProps>(
  (props, ref) => {
    return <Logo ref={ref} {...props} />;
  }
);

BayesforceLogo.displayName = "BayesforceLogo";
