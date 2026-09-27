"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "./index";

export interface ScrollRevealOptions {
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  ease?: string;
  targetSelector?: string;
  once?: boolean;
}

/**
 * Hook for scrolling reveals using GSAP ScrollTrigger
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const containerRef = useRef<T>(null);

  const {
    direction = "up",
    distance = 32,
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    start = "top 85%",
    ease = "power3.out",
    targetSelector,
    once = true,
  } = options;

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
          ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return containerRef;
}

/**
 * Hook for animating number counters (e.g. stats, percentages)
 */
export function useCountUp<T extends HTMLElement = HTMLElement>(
  endValue: number,
  options: {
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    startTrigger?: string;
  } = {}
) {
  const elementRef = useRef<T>(null);
  const {
    duration = 1.5,
    decimals = 0,
    prefix = "",
    suffix = "",
    startTrigger = "top 90%",
  } = options;

  useGSAP(
    () => {
      if (!elementRef.current) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: endValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: startTrigger,
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (elementRef.current) {
            const formatted = obj.val.toFixed(decimals);
            elementRef.current.innerText = `${prefix}${formatted}${suffix}`;
          }
        },
      });
    },
    { scope: elementRef }
  );

  return elementRef;
}
