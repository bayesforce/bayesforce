"use client";

import React, { useState, useRef, useEffect, type ReactNode, type ReactElement, cloneElement } from "react";

export interface PopoverProps {
  children: ReactElement<any>;
  content: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  dark?: boolean;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  placement = "bottom",
  dark = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const placementClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }[placement];

  return (
    <div ref={containerRef} className="relative inline-block">
      {cloneElement(children, {
        onClick: (e: React.MouseEvent) => {
          setIsOpen(!isOpen);
          children.props.onClick?.(e);
        },
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
      })}

      {isOpen && (
        <div
          role="dialog"
          className={[
            "absolute z-50 p-4 rounded-xl shadow-xl min-w-[200px] border font-sans text-sm animate-in fade-in zoom-in-95 duration-150",
            dark
              ? "bg-[#161B23] border-[#2A3441] text-white"
              : "bg-white border-slate-200 text-[#11151B]",
            placementClasses,
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {content}
        </div>
      )}
    </div>
  );
};
