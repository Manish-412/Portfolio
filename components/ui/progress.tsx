import * as React from "react";

import { cn } from "@/lib/utils";

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
};

export function Progress({ value, className, ...props }: ProgressProps) {
  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-white/10",
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-600"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
