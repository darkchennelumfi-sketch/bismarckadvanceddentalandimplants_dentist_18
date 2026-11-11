import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-xl border border-ink/15 bg-white/70 px-4 text-[15px] text-ink placeholder:text-ink/65 transition-colors focus-visible:border-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
