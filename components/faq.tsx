"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  const featureIllustration = "/illustration/question-mark.svg";

  const faqs = [
    {
      question: "How long does it take to build an AI product?",
      answer: "The timeline varies based on complexity, but most projects range from 4–12 weeks. We start with a discovery phase to understand your needs, then move into rapid prototyping and iterative development. Our goal is to get you to production as quickly as possible while maintaining quality.",
    },
    {
      question: "What industries do you work with?",
      answer: "We work across various industries including healthcare, fintech, e-commerce, education, and enterprise SaaS. Our team has experience building AI solutions for startups to large enterprises alike. If you have a problem that AI can solve, we can help.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes, we provide comprehensive post-launch support including monitoring, maintenance, and continuous improvement. We can also help you scale your AI infrastructure as your user base grows and provide training for your internal team to manage the product.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-muted/60 px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration */}
          <div className="flex items-center justify-center lg:order-1">
            <Image
              src={featureIllustration}
              alt="Frequently asked questions"
              width={400}
              height={400}
              loading="lazy"
              className="object-contain"
            />
          </div>

          {/* Right: FAQ */}
          <div className="lg:order-2">
            <h2 className="type-display mb-10 text-foreground">
              Questions we hear often
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card px-6 transition-all duration-200 hover:border-brand hover:shadow-lg">
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b-0"
                    >
                      <AccordionTrigger className="type-subhead py-6 text-left text-foreground transition-colors duration-200 hover:text-brand hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="type-body pb-6 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
