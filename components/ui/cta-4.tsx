"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

export interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  /** App route (e.g. `/contact`) or full URL for external links */
  href?: string;
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

function CtaLink({
  href,
  buttonText,
  className,
}: {
  href: string;
  buttonText: string;
  className?: string;
}) {
  const external = /^https?:\/\//i.test(href);
  const linkClassName = cn(
    "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-transparent bg-ink px-9 text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-20px_hsl(var(--ink)/0.45)] transition-all duration-300 hover:bg-ink/90 hover:shadow-[0_24px_52px_-22px_hsl(var(--brand)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {buttonText}
        <ArrowRight className="size-4" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      {buttonText}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}

export function Cta4({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  href = "/contact",
  items = defaultItems,
}: Cta4Props) {
  return (
    <section
      className="py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="relative flex flex-col items-start justify-between gap-12 overflow-hidden rounded-2xl border border-border/90 bg-muted/80 px-6 py-12 shadow-[0_28px_90px_-50px_hsl(var(--brand)/0.2)] md:flex-row md:gap-16 md:px-14 lg:px-20 lg:py-20">
              <BorderBeam
                size={90}
                duration={16}
                borderWidth={1.5}
                colorFrom="hsl(var(--brand) / 0.75)"
                colorTo="hsl(270 95% 88% / 0.45)"
              />
              <div className="relative z-[1] md:w-[55%] md:max-w-xl md:border-l-[4px] md:border-brand md:pl-9">
                <h2
                  id="cta-heading"
                  className="type-section-title text-balance text-foreground"
                >
                  {title}
                </h2>
                <p className="type-body mt-5 text-muted-foreground">
                  {description}
                </p>
                <CtaLink href={href} buttonText={buttonText} />
              </div>
              <div className="relative z-[1] md:w-[38%] md:min-w-[min(100%,16rem)]">
                <ul className="flex flex-col space-y-3 text-base font-medium leading-relaxed text-foreground">
                  {items.map((item, idx) => (
                    <li className="flex items-start gap-3" key={idx}>
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
