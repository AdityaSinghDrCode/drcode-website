"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

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
    "mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-transparent bg-gray-900 px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#875BF8] focus-visible:ring-offset-2 active:scale-[0.98]",
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
          <div className="max-w-5xl w-full">
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2">
                <h2
                  id="cta-heading"
                  className="type-subhead mb-2 text-foreground"
                >
                  {title}
                </h2>
                <p className="type-body text-muted-foreground">
                  {description}
                </p>
                <CtaLink href={href} buttonText={buttonText} />
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-base font-medium leading-relaxed text-foreground">
                  {items.map((item, idx) => (
                    <li className="flex items-start gap-3" key={idx}>
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-[#875BF8]"
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
