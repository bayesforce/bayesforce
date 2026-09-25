import React from "react";

export interface BayesforceLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "mark" | "full" | "wordmark";
  theme?: "light" | "dark" | "monochrome" | "white" | "adaptive";
  size?: "sm" | "md" | "lg" | "xl" | number;
  showTagline?: boolean;
  tagline?: string;
  className?: string;
}

export const BayesforceLogo: React.FC<BayesforceLogoProps> = ({
  variant = "full",
  theme = "adaptive",
  size = "md",
  showTagline = false,
  tagline = "AI Capabilities for Organizations",
  className = "",
  ...props
}) => {
  // Dimensions map
  const sizeConfig = {
    sm: { markSize: 28, titleSize: "text-lg", tagSize: "text-[0.65rem]", gap: "gap-2.5" },
    md: { markSize: 38, titleSize: "text-[1.35rem]", tagSize: "text-[0.75rem]", gap: "gap-3" },
    lg: { markSize: 48, titleSize: "text-2xl", tagSize: "text-xs", gap: "gap-3.5" },
    xl: { markSize: 64, titleSize: "text-3xl", tagSize: "text-sm", gap: "gap-4" },
  };

  const currentSize =
    typeof size === "number"
      ? { markSize: size, titleSize: "text-xl", tagSize: "text-xs", gap: "gap-3" }
      : sizeConfig[size] || sizeConfig.md;

  // Theme color definitions
  const isDark = theme === "dark" || theme === "white";
  const primaryDarkColor =
    theme === "white"
      ? "#FFFFFF"
      : theme === "dark"
      ? "#F8FAFC"
      : theme === "monochrome"
      ? "currentColor"
      : theme === "light"
      ? "#11151B"
      : "currentColor"; // adaptive inherits text color for dark path

  const blueElementColor =
    theme === "monochrome" ? "currentColor" : theme === "white" ? "#FFFFFF" : "#013EFA";

  const textColor =
    theme === "white" || theme === "dark"
      ? "text-white"
      : theme === "monochrome"
      ? "text-current"
      : "text-[#08090C]";

  const taglineColor =
    theme === "white"
      ? "text-blue-300"
      : theme === "dark"
      ? "text-blue-400"
      : "text-[#013EFA]";

  const markSvg = (
    <svg
      width={currentSize.markSize}
      height={currentSize.markSize}
      viewBox="260 270 730 710"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200"
      aria-hidden="true"
    >
      {/* Dark Anchor / Prior Path */}
      <path
        d="M 312 552 L 302 561 L 289 578 L 281 595 L 276 615 L 278 650 L 289 676 L 297 687 L 317 705 L 332 713 L 351 719 L 388 726 L 414 735 L 443 750 L 470 770 L 496 798 L 518 833 L 536 880 L 542 906 L 551 925 L 558 935 L 582 956 L 611 967 L 633 968 L 659 962 L 686 945 L 699 930 L 708 914 L 723 861 L 738 827 L 754 802 L 770 784 L 720 805 L 702 810 L 676 811 L 654 805 L 634 792 L 621 777 L 610 757 L 601 729 L 590 706 L 568 680 L 548 666 L 522 654 L 495 645 L 448 636 L 446 634 L 447 631 L 492 617 L 527 603 L 550 591 L 568 578 L 592 552 L 606 528 L 610 508 L 607 495 L 602 487 L 590 477 L 580 473 L 553 473 L 437 516 L 382 530 L 344 536 L 330 541 Z"
        fill={primaryDarkColor}
      />
      {/* Electric Blue Force / Vector Path */}
      <path
        d="M 571 302 L 555 320 L 547 335 L 530 390 L 514 425 L 499 448 L 477 472 L 531 447 L 553 440 L 575 439 L 599 445 L 615 455 L 634 477 L 643 496 L 652 527 L 662 549 L 672 564 L 690 582 L 708 594 L 736 607 L 757 614 L 806 625 L 804 629 L 766 639 L 728 653 L 706 664 L 684 680 L 664 701 L 647 728 L 643 746 L 650 765 L 663 776 L 673 780 L 704 780 L 822 735 L 863 724 L 916 714 L 943 699 L 957 685 L 971 661 L 977 638 L 975 604 L 971 592 L 957 568 L 933 547 L 916 539 L 871 528 L 837 515 L 810 500 L 784 480 L 760 455 L 739 424 L 720 382 L 705 333 L 697 318 L 680 300 L 668 292 L 651 285 L 636 282 L 619 282 L 594 288 Z"
        fill={blueElementColor}
      />
    </svg>
  );

  if (variant === "mark") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} {...props}>
        {markSvg}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`} {...props}>
      {variant !== "wordmark" && markSvg}
      <div className="flex flex-col justify-center">
        <span
          className={`font-display font-black tracking-tight ${currentSize.titleSize} ${textColor} leading-none`}
        >
          Bayesforce
        </span>
        {showTagline && (
          <span
            className={`font-mono font-bold tracking-wider uppercase ${currentSize.tagSize} ${taglineColor} mt-1`}
          >
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
};
