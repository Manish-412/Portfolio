"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type DropdownContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-flex">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({
  className,
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = React.useContext(DropdownContext);
  if (!context) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => context.setOpen(!context.open)}
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(DropdownContext);
  if (!context?.open) return null;

  return (
    <div
      className={cn(
        "absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "w-full rounded-xl px-3 py-2 text-left text-sm text-muted-foreground hover:bg-white/10 hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
