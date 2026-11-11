"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-ink/12", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-6 text-left font-display text-xl font-normal text-ink transition-colors hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/40 sm:text-2xl",
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-copper/50 group-data-[state=open]:border-copper group-data-[state=open]:bg-copper group-data-[state=open]:text-cream">
          <ChevronDown className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_280ms_cubic-bezier(0.22,1,0.36,1)] data-[state=open]:animate-[accordion-down_320ms_cubic-bezier(0.22,1,0.36,1)]"
      {...props}
    >
      <div className={cn("max-w-3xl pb-7 text-[15px] leading-7 text-ink/70", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
