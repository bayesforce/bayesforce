import React, { forwardRef, type HTMLAttributes } from "react";

export type LogoVariant = "mark" | "full" | "wordmark";
export type LogoTheme = "light" | "dark" | "monochrome" | "white" | "adaptive";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl" | number;
export type LogoWeight = 500 | 600 | "medium" | "semibold";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Option 1: "mark" (just the logo asset)
   * Option 2: "full" (mark + Bayesforce text)
   * Also supports "wordmark" (text only)
   * @default "full"
   */
  variant?: LogoVariant;
  /**
   * Convenience boolean toggle between mark-only and full lockup:
   * withText={false} is equivalent to variant="mark"
   * withText={true} is equivalent to variant="full"
   */
  withText?: boolean;
  /**
   * Color theme:
   * - "adaptive": follows light/dark mode automatically
   * - "light": charcoal mark + deep charcoal & electric blue text
   * - "dark": crisp platinum mark + electric blue vector and text
   * - "white": pure white
   * - "monochrome": inherits currentColor
   * @default "adaptive"
   */
  theme?: LogoTheme;
  /**
   * Size presets or custom numeric pixel height
   * @default "md"
   */
  size?: LogoSize;
  /**
   * Font weight for the wordmark: 600 (SemiBold) for Corporate Premium, or 500 (Medium)
   * @default 600
   */
  weight?: LogoWeight;
  /**
   * Optional tagline below wordmark (e.g., "AI Capabilities for Organizations")
   */
  showTagline?: boolean;
  tagline?: string;
  className?: string;
}

/**
 * Raw SVG vector path coordinates from the master Bayesforce mark asset
 */
export const BAYESFORCE_MARK_PATHS = {
  viewBox: "264 270 725 710",
  // Engineered dark anchor / prior path
  priorPath:
    "M 312 552 L 302 561 L 289 578 L 281 595 L 276 615 L 278 650 L 289 676 L 297 687 L 317 705 L 332 713 L 351 719 L 388 726 L 414 735 L 443 750 L 470 770 L 496 798 L 518 833 L 536 880 L 542 906 L 551 925 L 558 935 L 582 956 L 611 967 L 633 968 L 659 962 L 686 945 L 699 930 L 708 914 L 723 861 L 738 827 L 754 802 L 770 784 L 720 805 L 702 810 L 676 811 L 654 805 L 634 792 L 621 777 L 610 757 L 601 729 L 590 706 L 568 680 L 548 666 L 522 654 L 495 645 L 448 636 L 446 634 L 447 631 L 492 617 L 527 603 L 550 591 L 568 578 L 592 552 L 606 528 L 610 508 L 607 495 L 602 487 L 590 477 L 580 473 L 553 473 L 437 516 L 382 530 L 344 536 L 330 541 Z",
  // Electric blue force / forward vector path
  vectorPath:
    "M 571 302 L 555 320 L 547 335 L 530 390 L 514 425 L 499 448 L 477 472 L 531 447 L 553 440 L 575 439 L 599 445 L 615 455 L 634 477 L 643 496 L 652 527 L 662 549 L 672 564 L 690 582 L 708 594 L 736 607 L 757 614 L 806 625 L 804 629 L 766 639 L 728 653 L 706 664 L 684 680 L 664 701 L 647 728 L 643 746 L 650 765 L 663 776 L 673 780 L 704 780 L 822 735 L 863 724 L 916 714 L 943 699 L 957 685 L 971 661 L 977 638 L 975 604 L 971 592 L 957 568 L 933 547 L 916 539 L 871 528 L 837 515 L 810 500 L 784 480 L 760 455 L 739 424 L 720 382 L 705 333 L 697 318 L 680 300 L 668 292 L 651 285 L 636 282 L 619 282 L 594 288 Z",
};

/**
 * Standalone Mark Component
 */
export const LogoMark = forwardRef<
  SVGSVGElement,
  {
    size?: number;
    theme?: LogoTheme;
    className?: string;
  }
>(({ size = 32, theme = "adaptive", className = "" }, ref) => {
  const primaryDarkColor =
    theme === "white"
      ? "#FFFFFF"
      : theme === "dark"
      ? "#F8FAFC"
      : theme === "monochrome"
      ? "currentColor"
      : theme === "light"
      ? "#11151B"
      : "currentColor";

  const blueElementColor =
    theme === "monochrome" ? "currentColor" : theme === "white" ? "#FFFFFF" : "#013EFA";

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={BAYESFORCE_MARK_PATHS.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      <path d={BAYESFORCE_MARK_PATHS.priorPath} fill={primaryDarkColor} />
      <path d={BAYESFORCE_MARK_PATHS.vectorPath} fill={blueElementColor} />
    </svg>
  );
});

LogoMark.displayName = "LogoMark";

/**
 * Bayesforce Logo Component (Corporate Premium Edition)
 *
 * Implements art-directed corporate optical principles:
 * 1. Optical Height: Capital 'B' height scaled to ~74% of mark visual height
 * 2. Optical Center: Vertical baseline aligned to the visual mass of the mark
 * 3. Typography: Outfit SemiBold (600) with tight bespoke tracking (-0.025em)
 * 4. Integrated Wordmark: Unified 'Bayesforce' lockup with subtle color distinction
 * 5. Restrained Spacing: Tight 0.28x-0.3x gap scale for unified corporate presence
 * 6. Vector Fidelity: Rendered using master SVG geometry
 */
export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    {
      variant = "full",
      withText,
      theme = "adaptive",
      size = "md",
      weight = 600,
      showTagline = false,
      tagline = "AI Capabilities for Organizations",
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    // Resolve effective variant (withText takes precedence if explicitly provided)
    const effectiveVariant: LogoVariant =
      withText !== undefined ? (withText ? "full" : "mark") : variant;

    // Optical metrics scale based on mark height
    // In Outfit, cap-height is ~0.71 of font-size.
    // For cap-height = 74% of mark height, fontSize ≈ markSize * (0.74 / 0.71) ≈ markSize * 1.04
    const metricsConfig: Record<
      Exclude<LogoSize, number>,
      { markSize: number; fontSize: number; gap: number; tagSize: number }
    > = {
      xs: { markSize: 20, fontSize: 21, gap: 6, tagSize: 9 },
      sm: { markSize: 26, fontSize: 27, gap: 7.5, tagSize: 10 },
      md: { markSize: 34, fontSize: 35, gap: 9.5, tagSize: 11 },
      lg: { markSize: 44, fontSize: 46, gap: 12, tagSize: 12 },
      xl: { markSize: 58, fontSize: 60, gap: 16, tagSize: 14 },
    };

    const metrics =
      typeof size === "number"
        ? {
            markSize: size,
            fontSize: Math.round(size * 1.04),
            gap: Math.round(size * 0.28),
            tagSize: Math.max(9, Math.round(size * 0.3)),
          }
        : metricsConfig[size] || metricsConfig.md;

    // Numerical weight
    const fontWeightValue =
      weight === "medium" || weight === 500 ? 500 : 600;

    // Color definitions
    const primaryDarkColor =
      theme === "white"
        ? "#FFFFFF"
        : theme === "dark"
        ? "#F8FAFC"
        : theme === "monochrome"
        ? "currentColor"
        : theme === "light"
        ? "#11151B"
        : undefined; // adaptive uses CSS class

    const blueElementColor =
      theme === "monochrome"
        ? "currentColor"
        : theme === "white"
        ? "#FFFFFF"
        : "#013EFA";

    const bayesTextColorClass =
      theme === "adaptive"
        ? "text-[#11151B] dark:text-[#F8FAFC]"
        : theme === "dark"
        ? "text-[#F8FAFC]"
        : theme === "white"
        ? "text-white"
        : theme === "monochrome"
        ? "text-current"
        : "text-[#11151B]";

    const forceTextColorClass =
      theme === "white"
        ? "text-white"
        : theme === "monochrome"
        ? "text-current"
        : "text-[#013EFA]";

    const taglineColorClass =
      theme === "white"
        ? "text-blue-200"
        : theme === "dark"
        ? "text-blue-400"
        : "text-[#013EFA]";

    // Mark-only option
    if (effectiveVariant === "mark") {
      return (
        <div
          ref={ref}
          className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
          style={style}
          {...props}
        >
          <LogoMark size={metrics.markSize} theme={theme} />
        </div>
      );
    }

    // Full Lockup or Wordmark option
    return (
      <div
        ref={ref}
        className={`inline-flex items-center select-none ${className}`}
        style={{
          gap: `${metrics.gap}px`,
          ...style,
        }}
        {...props}
      >
        {effectiveVariant !== "wordmark" && (
          <LogoMark size={metrics.markSize} theme={theme} />
        )}

        <div className="flex flex-col justify-center leading-none">
          <span
            style={{
              fontFamily: 'var(--font-display, var(--bf-font-display, "Outfit", sans-serif))',
              fontSize: `${metrics.fontSize}px`,
              fontWeight: fontWeightValue,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              // Optical vertical nudge: slightly lift text baseline to align with visual center of mark
              transform: "translateY(-0.035em)",
            }}
            className="inline-flex items-baseline"
          >
            <span
              className={bayesTextColorClass}
              style={primaryDarkColor ? { color: primaryDarkColor } : undefined}
            >
              Bayes
            </span>
            <span
              className={forceTextColorClass}
              style={{ color: blueElementColor }}
            >
              force
            </span>
          </span>

          {showTagline && (
            <span
              style={{
                fontFamily: 'var(--font-body, var(--bf-font-sans, "Inter", sans-serif))',
                fontSize: `${metrics.tagSize}px`,
                fontWeight: 600,
                letterSpacing: "0.05em",
                marginTop: `${Math.round(metrics.gap * 0.35)}px`,
              }}
              className={`uppercase tracking-wider ${taglineColorClass}`}
            >
              {tagline}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Logo.displayName = "Logo";
