import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-copper text-cream shadow-[0_10px_30px_-12px_rgba(191,106,69,0.7)] hover:bg-copper-dark hover:shadow-[0_16px_38px_-14px_rgba(191,106,69,0.8)] hover:-translate-y-0.5",
        dark: "bg-pine text-cream hover:bg-pine-deep hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(14,42,36,0.7)]",
        cream:
          "bg-cream text-pine hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(14,42,36,0.45)]",
        outline:
          "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream",
        "outline-light":
          "border border-cream/30 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-pine",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        link: "h-auto rounded-none bg-transparent p-0 text-ink underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-[12px]",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[15px]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
