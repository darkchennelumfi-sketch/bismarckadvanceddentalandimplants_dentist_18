"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setServerError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError(
        "We couldn’t send your request just now. Please call us instead.",
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[480px] flex-col items-start justify-center rounded-[1.6rem] border border-ink/10 bg-white/60 p-8 sm:p-10">
        <span className="grid size-14 place-items-center rounded-full bg-pine text-cream">
          <Check className="size-6" />
        </span>
        <h2 className="mt-6 font-display text-3xl text-ink">
          Thank you — we’ve got it.
        </h2>
        <p className="mt-3 max-w-md text-[14px] leading-7 text-ink/65">
          Your request has been received. Our team will be in touch to help you
          find a time that works. If you need us sooner, please call the office.
        </p>
        <Button asChild variant="dark" className="mt-7">
          <a href={site.phone.href}>
            <Phone className="size-4" />
            {site.phone.display}
          </a>
        </Button>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-copper transition-colors hover:text-copper-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-[1.6rem] border border-ink/10 bg-white/60 p-6 shadow-[0_30px_80px_-50px_rgba(20,37,31,0.35)] sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-[1.6rem] text-ink">
          Request an appointment
        </h2>
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65">
          We’ll be in touch
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            placeholder="First name"
            aria-invalid={Boolean(errors.firstName)}
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p className="mt-1.5 text-[11px] text-copper-dark">
              {errors.firstName.message}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            placeholder="Last name"
            aria-invalid={Boolean(errors.lastName)}
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p className="mt-1.5 text-[11px] text-copper-dark">
              {errors.lastName.message}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1.5 text-[11px] text-copper-dark">
              {errors.email.message}
            </p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 000-0000"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-[11px] text-copper-dark">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            placeholder="Tell us what you’re looking for, or ask us a question."
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
          {errors.message ? (
            <p className="mt-1.5 text-[11px] text-copper-dark">
              {errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      {serverError ? (
        <p className="mt-4 rounded-xl border border-copper/25 bg-copper/8 px-4 py-3 text-[12px] text-copper-dark">
          {serverError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            Send request
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>

      <p className="mt-4 text-[11px] leading-5 text-ink/65">
        Please don’t include sensitive medical information in this form. For
        urgent dental concerns, call{" "}
        <a
          href={site.phone.href}
          className="font-semibold text-ink/65 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-copper"
        >
          {site.phone.display}
        </a>
        .
      </p>
    </form>
  );
}
