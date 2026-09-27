"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Ensure GSAP plugins are registered safely on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // Set default animation easing and timing
  gsap.defaults({
    ease: "power3.out",
    duration: 0.7,
  });
}

export { gsap, ScrollTrigger, useGSAP };
