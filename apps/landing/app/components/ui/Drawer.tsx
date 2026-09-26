"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import styles from "./Drawer.module.css";

export function Drawer({ opened, onClose, title, footer, children }: {
  opened: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!opened) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [opened, onClose]);

  if (!opened) return null;
  return (
    <div className="fixed inset-0 z-[100]">
      <button type="button" className={styles.backdrop} aria-label="Close navigation menu" onClick={onClose} />
      <aside role="dialog" aria-modal="true" aria-label="Navigation menu" className={styles.panel}>
        <div className={styles.header}>
          {title}
          <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close navigation menu"><X size={20} /></button>
        </div>
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </aside>
    </div>
  );
}
