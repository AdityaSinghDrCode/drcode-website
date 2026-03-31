"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "./ui/border-beam";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build an AI product?",
      answer:
        "The timeline varies based on complexity, but most projects range from 4-12 weeks. We start with a discovery phase to understand your needs, then move into rapid prototyping and iterative development. Our goal is to get you to production as quickly as possible while maintaining quality.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work across various industries including healthcare, fintech, e-commerce, education, and enterprise SaaS. Our team has experience building AI solutions for startups and Fortune 500 companies alike. If you have a problem that AI can solve, we can help.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes, we provide comprehensive post-launch support including monitoring, maintenance, and continuous improvement. We can also help you scale your AI infrastructure as your user base grows and provide training for your internal team to manage the product.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-16 text-center">
          Common questions
        </h2>

        <Accordion type="single" collapsible className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white px-6 transition-all duration-300 hover:border-[#875BF8]/30 hover:shadow-lg">
                {/* Border beam on hover */}
                <BorderBeam
                  size={200}
                  duration={10}
                  delay={index * 1.5}
                  colorFrom="#875BF8"
                  colorTo="#6366f1"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <AccordionItem
                  value={`item-${index}`}
                  className="border-b-0"
                >
                  <AccordionTrigger className="text-xl md:text-2xl font-semibold text-black hover:no-underline py-6 hover:text-[#875BF8] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base md:text-lg leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
