import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-[15px] text-ink placeholder:text-ink/65 transition-colors focus-visible:border-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
