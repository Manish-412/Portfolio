import * as React from "react";

import { cn } from "@/lib/utils";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  className?: string;
};

export function Switch({ checked, onCheckedChange, className }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full border border-white/15 bg-white/10 transition",
        checked && "bg-sky-500/40",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition",
          checked && "translate-x-6"
        )}
      />
    </button>
  );
}
