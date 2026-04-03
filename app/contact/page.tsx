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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Form - fits in viewport */}
      <section className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header & Illustration */}
            <div className="space-y-8">
              <div>
                <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#875BF8] mb-4">
                  Get in touch
                </p>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                  Contact Us
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Let's discuss how we can help you build something great
                </p>
              </div>

              {/* SVG Illustration */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/illustration/work-from-home.svg"
                  alt="Contact Us"
                  width={400}
                  height={400}
                  priority
                  className="object-contain max-w-md"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section - below the fold */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Other ways to reach us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="tel:+919999410384"
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-[#875BF8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#875BF8]/10 group-hover:bg-[#875BF8]/20 transition-colors duration-300 mb-6">
                <Phone className="w-8 h-8 text-[#875BF8]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#875BF8] transition-colors duration-300">
                Phone
              </h3>
              <span className="text-lg text-gray-600 font-medium">
                +91 99994 10384
              </span>
            </a>

            <a
              href="mailto:hello@drcode.ai"
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-[#875BF8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#875BF8]/10 group-hover:bg-[#875BF8]/20 transition-colors duration-300 mb-6">
                <Mail className="w-8 h-8 text-[#875BF8]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#875BF8] transition-colors duration-300">
                Email
              </h3>
              <span className="text-lg text-gray-600 font-medium">
                hello@drcode.ai
              </span>
            </a>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="text-[#875BF8] hover:text-[#6d4ac6] font-semibold inline-flex items-center gap-2 transition-colors duration-200"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
