"use client";

import React, { type ReactNode } from "react";
import { Modal } from "./Modal";
import { Button } from "../../atoms/Buttons/Button";

export interface ConfirmDialogProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: ReactNode;
  message: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  dark?: boolean;
  isLoading?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  opened,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  danger = false,
  dark = false,
  isLoading = false,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      size="sm"
      dark={dark}
      footer={
        <>
          <Button
            variant={dark ? "ghost-dark" : "outline"}
            size="sm"
            onClick={onClose}
            disabled={isLoading}
          >
            {cancelLabel}
          </Button>
          <Button
            variant={danger ? "gold" : "primary"}
            size="sm"
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <p className="text-slate-600 dark:text-slate-300">{message}</p>
    </Modal>
  );
};
