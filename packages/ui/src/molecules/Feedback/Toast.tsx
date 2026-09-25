"use client";

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { Icon, type IconName } from "../../atoms/Icons";
import "./Feedback.css";

export type ToastVariant = "info" | "success" | "warning" | "danger" | "obsidian";

export interface ToastItem {
  id: string;
  title?: ReactNode;
  message: ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  toast: (options: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, message, variant = "info", duration = 4500 }: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, message, variant, duration }]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <div className="bf-toast-container" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={[
              "bf-toast",
              t.variant === "obsidian" ? "bf-toast--obsidian" : "",
            ].join(" ")}
          >
            <span className="bf-alert-icon">
              <Icon
                name={
                  t.variant === "success"
                    ? "check-circle"
                    : t.variant === "danger"
                    ? "alert-circle"
                    : t.variant === "warning"
                    ? "alert-triangle"
                    : t.variant === "obsidian"
                    ? "sparkles"
                    : "info"
                }
                size={18}
                className={
                  t.variant === "success"
                    ? "text-emerald-500"
                    : t.variant === "danger"
                    ? "text-rose-500"
                    : t.variant === "warning"
                    ? "text-amber-500"
                    : t.variant === "obsidian"
                    ? "text-blue-400"
                    : "text-[#013EFA]"
                }
              />
            </span>
            <div className="flex-1 min-w-0">
              {t.title && <div className="bf-toast-title">{t.title}</div>}
              <div className="bf-toast-message">{t.message}</div>
            </div>
            <button
              type="button"
              className="bf-alert-close"
              onClick={() => removeToast(t.id)}
              aria-label="Dismiss toast"
            >
              <Icon name="x" size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
