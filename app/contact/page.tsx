import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities. Call +91 99994 10384 or email hello@drcode.ai",
  keywords: [
    "contact DrCode",
    "AI consulting contact",
    "venture studio contact",
    "AI development inquiry",
    "partnership opportunities",
    "DrCode team contact",
  ],
  openGraph: {
    title: "Contact Us | DrCode — AI Venture Studio",
    description:
      "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities.",
    url: "https://drcode.ai/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Us | DrCode — AI Venture Studio",
    description:
      "Get in touch with DrCode AI Venture Studio. Contact our team for AI product development, consulting, and partnership opportunities.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      {/* Hero Section with Form - fits in viewport */}
      <section className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header & Illustration */}
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand md:text-base">
                  Get in touch
                </p>
                <h1 className="mb-6 text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-foreground md:text-6xl">
                  Contact Us
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Share your idea or product needs—we respond within one business
                  day, usually sooner.
                </p>
              </div>

              {/* SVG Illustration */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/illustration/work-from-home.svg"
                  alt="Person working from home"
                  width={400}
                  height={400}
                  priority
                  className="object-contain max-w-md"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section - below the fold */}
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-[-0.02em] text-foreground md:text-4xl">
            Other ways to reach us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="tel:+919999410384"
              className="group block rounded-3xl border-2 border-border bg-card p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 transition-colors duration-200 group-hover:bg-brand/20">
                <Phone className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-brand">
                Phone
              </h3>
              <span className="text-lg font-medium text-muted-foreground">
                +91 99994 10384
              </span>
            </a>

            <a
              href="mailto:hello@drcode.ai"
              className="group block rounded-3xl border-2 border-border bg-card p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 transition-colors duration-200 group-hover:bg-brand/20">
                <Mail className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-brand">
                Email
              </h3>
              <span className="text-lg font-medium text-muted-foreground">
                hello@drcode.ai
              </span>
            </a>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium text-brand transition-colors duration-200 hover:text-brand-hover focus:outline-none focus-visible:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
