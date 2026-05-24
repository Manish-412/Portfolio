"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ToastContext } from "@/hooks/use-toast";

export type ToastMessage = {
  id: string;
  title: string;
  description?: string;
  variant?: "success" | "error" | "info";
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const push = React.useCallback(
    (toast: Omit<ToastMessage, "id">) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, ...toast }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, 4200);
    },
    []
  );

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, push, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export function ToastItem({
  toast,
  onDismiss,
}: {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}) {
  const variantClass =
    toast.variant === "success"
      ? "border-emerald-400/40"
      : toast.variant === "error"
        ? "border-rose-400/40"
        : "border-white/10";

  return (
    <div
      className={cn(
        "glass w-full rounded-2xl border px-4 py-3 text-sm shadow-lg",
        variantClass
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-medium text-foreground">{toast.title}</p>
          {toast.description ? (
            <p className="mt-1 text-xs text-muted-foreground">
              {toast.description}
            </p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Close
        </button>
      </div>
    </div>
  );
}
