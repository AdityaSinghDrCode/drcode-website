"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MessageSquare,
  Mic2,
  Sparkles,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { cn } from "@/lib/utils";

const PREVIEW_DESKTOP = "/interview/interviewbot.drcode.ai_(my).png";
const PREVIEW_MOBILE = "/interview/interviewbot.drcode.ai_(iPhone SE).png";
const PRODUCT_URL = "https://interviewbot.drcode.ai/";

const PILL_FEATURES = [
  { icon: Sparkles, label: "AI-powered" },
  { icon: Mic2, label: "Voice-based" },
  { icon: BarChart3, label: "Analytics" },
] as const;

const BEYOND_BASICS = [
  {
    icon: MessageSquare,
    title: "Receive personalized feedback",
    body: "Skill-specific insights, strengths, gaps, and progress tracking so every session moves you forward.",
  },
  {
    icon: ClipboardCheck,
    title: "Get detailed skill assessments",
    body: "After each run, see what you already do well and what to improve next, with clear next steps.",
  },
  {
    icon: FileText,
    title: "Practice from your resume",
    body: "Sessions and feedback align with your resume so prep stays relevant to the roles you want.",
  },
] as const;

const CAPABILITIES = [
  "AI-powered mock interviews",
  "Voice-based interview practice",
  "Personalized interview analytics",
  "Practice anytime, anywhere",
  "Simulate real interview pressure",
  "Resume analysis",
  "Interactive, conversational prep",
] as const;

const STEPS = [
  {
    step: "01",
    title: "Upload your resume",
    body: "Share context so questions match your background.",
  },
  {
    step: "02",
    title: "Select your role",
    body: "Pick the track you want to practice for.",
  },
  {
    step: "03",
    title: "Start the interview",
    body: "Voice session, then structured feedback and analytics.",
  },
] as const;

const FAQS = [
  {
    q: "What is DrCode Interview?",
    a: "A voice-based AI mock interview product. You answer out loud, then receive structured feedback and analytics to improve.",
  },
  {
    q: "How many interviews can I take per day?",
    a: "Limits depend on your institution or plan. Sign in on the product site to see the rules for your account.",
  },
  {
    q: "Can colleges access student performance?",
    a: "If your school uses DrCode Interview with reporting, admins may have dashboards. Ask your program how access works for you.",
  },
  {
    q: "Should I prepare like a real interview?",
    a: "Yes. Use a quiet space, allow microphone access, and answer honestly so feedback matches how you would perform live.",
  },
  {
    q: "Do I need microphone access?",
    a: "Yes. Voice interviews need the microphone enabled in the browser or app.",
  },
] as const;

const primaryCtaClass = cn(
  "inline-flex min-h-11 items-center justify-center rounded-full border border-transparent bg-ink px-7 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_hsl(var(--ink)/0.45)] transition-all duration-300 hover:bg-ink/90 hover:shadow-[0_24px_52px_-22px_hsl(var(--brand)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
);

export function DrcodeInterviewsContent() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/25">
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden px-4 pb-10 pt-20 md:px-6 md:pb-16 md:pt-24">
          <ContainerScroll
            titleComponent={
              <div className="mx-auto max-w-[42rem] md:max-w-4xl">
                <p className="type-eyebrow text-brand">DrCode Interview</p>
                <h1 className="mt-4 text-balance text-[clamp(1.75rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground md:mt-5">
                  Level up your prep with tailored AI interview simulations.
                </h1>
                <p className="type-body-lg mx-auto mt-5 max-w-[40ch] text-pretty text-muted-foreground">
                  Practice out loud, get structured feedback, and track progress, built for serious interview prep.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-10 md:gap-3">
                  {PILL_FEATURES.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      {label}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex justify-center sm:mt-12">
                  <Link
                    href={PRODUCT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 text-base font-semibold text-brand transition hover:gap-3"
                  >
                    Explore product
                    <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                  </Link>
                </div>
              </div>
            }
          >
            <div className="relative h-full min-h-[220px] w-full md:min-h-0">
              <Image
                src={encodeURI(PREVIEW_MOBILE)}
                alt="DrCode Interview on a phone-sized viewport"
                fill
                className="rounded-xl object-contain object-top md:hidden"
                sizes="100vw"
                priority
              />
              <Image
                src={encodeURI(PREVIEW_DESKTOP)}
                alt="DrCode Interview product preview"
                fill
                className="hidden rounded-xl object-cover object-left-top md:block"
                sizes="(min-width: 768px) min(80rem, 90vw), 0"
                priority
              />
            </div>
          </ContainerScroll>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-20 px-4 pb-24 pt-4 md:space-y-28 md:px-6 md:pt-8">
        <section aria-labelledby="beyond-heading" className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Go beyond the basics
          </p>
          <h2
            id="beyond-heading"
            className="type-section-title mt-3 text-balance font-semibold text-foreground"
          >
            Feedback that turns practice into progress
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
            {BEYOND_BASICS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border-2 border-border bg-card p-6 text-left shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="practice-heading"
          className="relative overflow-hidden rounded-3xl border-2 border-border bg-gradient-to-b from-muted/50 to-muted/20 px-5 py-12 shadow-sm md:px-12 md:py-16"
        >
          <BorderBeam
            size={100}
            duration={14}
            borderWidth={1.5}
            colorFrom="hsl(var(--brand) / 0.85)"
            colorTo="hsl(270 95% 88% / 0.5)"
          />
          <div className="relative z-[1]">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="practice-heading"
              className="type-section-title text-balance font-semibold text-foreground"
            >
              Practice. Perform. Perfect.
            </h2>
            <p className="type-body-lg mx-auto mt-4 text-muted-foreground">
              From theory to real-time performance. One focused flow for interview prep.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <li
                key={item}
                className="flex min-h-[3rem] items-start gap-3 rounded-xl border-2 border-border bg-background px-4 py-3.5 text-left text-sm font-medium leading-snug text-foreground shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Link
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                primaryCtaClass,
                "gap-2 px-8 py-3 text-base",
                "inline-flex",
              )}
            >
              Try for free now
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </div>
          </div>
        </section>

        <section aria-labelledby="how-heading">
          <h2
            id="how-heading"
            className="type-section-title text-balance text-center font-semibold text-foreground"
          >
            How it works
          </h2>
          <p className="type-body-lg mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Upload your resume, choose a role, and start a voice-based mock interview. Get
            feedback and analytics after each session.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map(({ step, title, body }) => (
              <div key={step} className="text-center md:text-left">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/12 text-lg font-bold text-brand">
                  {step}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="type-section-title text-balance text-center font-semibold text-foreground"
          >
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="px-5 py-5 text-left text-base font-semibold text-foreground hover:bg-muted/40 hover:no-underline md:px-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="border-t border-border/80 bg-muted/20 px-5 pb-5 pt-0 text-base leading-relaxed text-muted-foreground md:px-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="border-t border-border pt-12 text-center text-sm text-muted-foreground">
          <p className="text-base font-semibold text-foreground">DrCode Interview</p>
          <p className="mx-auto mt-2 max-w-md text-pretty">
            Policies, contact, and the full product experience live on the interview site.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:underline"
            >
              interviewbot.drcode.ai
            </Link>
            <span className="hidden text-border sm:inline" aria-hidden>
              |
            </span>
            <Link
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Privacy &amp; terms
            </Link>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            © {new Date().getFullYear()} DrCode Interview. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
