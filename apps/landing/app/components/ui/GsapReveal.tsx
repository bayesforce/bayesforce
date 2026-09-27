"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  targetSelector?: string;
  start?: string;
  as?: React.ElementType;
}

export const GsapReveal: React.FC<GsapRevealProps> = ({
  children,
  className = "",
  direction = "up",
  distance = 28,
  duration = 0.8,
  delay = 0,
  stagger = 0.08,
  targetSelector,
  start = "top 88%",
  as: Component = "div",
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      let xOffset = 0;
      let yOffset = 0;

      if (direction === "up") yOffset = distance;
      else if (direction === "down") yOffset = -distance;
      else if (direction === "left") xOffset = distance;
      else if (direction === "right") xOffset = -distance;

      const targets = targetSelector
        ? containerRef.current.querySelectorAll(targetSelector)
        : containerRef.current;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x: xOffset,
          y: yOffset,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger: targetSelector ? stagger : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
};
