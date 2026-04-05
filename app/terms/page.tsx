import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for DrCode AI Venture Studio services. Review our service terms, refund policy, user obligations, and legal information. Effective July 2024.",
  keywords: [
    "DrCode terms",
    "AI service terms",
    "venture studio legal",
    "terms and conditions",
    "refund policy",
    "service agreement",
    "AI development terms"
  ],
  openGraph: {
    title: "Terms and Conditions | DrCode — AI Venture Studio",
    description: "Terms and Conditions for DrCode AI Venture Studio services. Review our service terms, refund policy, and legal information.",
    url: "https://drcode.ai/terms",
    type: "website",
  },
  twitter: {
    title: "Terms and Conditions | DrCode — AI Venture Studio",
    description: "Terms and Conditions for DrCode AI Venture Studio services. Review our service terms, refund policy, and legal information.",
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-brand md:text-base">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 text-center mb-16">
            Effective Date: July 2024
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By using DrCode&apos;s services, you agree to be bound by these Terms
                  and Conditions. If you do not agree, please do not use our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Services Provided
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  DrCode provides automated code review, bug finder and fixing tool
                  to assist users in analyzing and improving their code.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Free Trial
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We offer a 14-day free trial of our services. After the trial
                  period, you may be required to select a subscription plan to
                  continue using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Refund and Cancellation Policy
                </h2>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>All payments are non-refundable.</li>
                  <li>
                    Users may take advantage of a free trial without needing to
                    enter credit card information.
                  </li>
                  <li>
                    To start a paid subscription, payment method needs to be added.
                  </li>
                  <li>
                    If you decide to cancel your subscription, you can discontinue
                    at any time and no further charges will be deducted.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. User Obligations
                </h2>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Users agree to:
                </p>
                <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-2">
                  <li>
                    Provide accurate information during the registration process.
                  </li>
                  <li>
                    Use our services in compliance with all applicable laws and
                    regulations.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Data Usage and Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your use of DrCode is governed by our Privacy Policy, which
                  outlines how we collect, use, and protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall DrCode or Airia Technologies be liable for any
                  indirect, incidental, special, consequential, or punitive damages
                  arising from or related to your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Changes to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your use of DrCode is governed by our Privacy Policy, which
                  outlines how we collect, use, and protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Governing Law
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in
                  accordance with the laws of India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please
                  contact us at{" "}
                  <a
                    href="mailto:hello@drcode.ai"
                    className="text-brand hover:underline"
                  >
                    hello@drcode.ai
                  </a>
                </p>
              </section>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="font-medium text-brand hover:underline"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
