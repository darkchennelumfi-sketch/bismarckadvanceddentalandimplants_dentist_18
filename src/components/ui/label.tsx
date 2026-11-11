import * as React from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/70",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
