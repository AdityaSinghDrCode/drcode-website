"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  delay?: number;
}

function TestimonialCard({
  name,
  role,
  image,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative rounded-md border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_#000] dark:border-white/20 dark:shadow-[8px_8px_0px_0px_#fff] dark:hover:shadow-[12px_12px_0px_0px_#fff]">
        <div className="relative z-10">
          <div className="mb-4">
            <Quote className="h-8 w-8 text-black dark:text-white" />
          </div>

          <div className="mb-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < rating
                    ? "fill-black text-black dark:fill-white dark:text-white"
                    : "text-gray-400 dark:text-gray-600"
                }`}
              />
            ))}
          </div>

          <p className="mb-6 font-medium leading-relaxed text-black dark:text-white">
            &quot;{content}&quot;
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={image}
              alt={`${name}, ${role}`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-md border-4 border-black object-cover dark:border-white"
            />
            <div>
              <h4 className="font-bold text-black dark:text-white">{name}</h4>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder",
    image: "/avatar/1.jpg",
    content:
      "They took a messy idea and turned it into a product we could put in front of users fast. The pace and clarity stood out from day one.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Engineering lead",
    image: "/avatar/2.jpg",
    content:
      "Solid architecture, pragmatic trade-offs, and no hand-waving. We shipped to production with confidence instead of crossing our fingers.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Product lead",
    image: "/avatar/3.jpg",
    content:
      "Onboarding was straightforward and every milestone was something we could actually demo. It felt like building with a real product team.",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "Technical lead",
    image: "/avatar/4.jpg",
    content:
      "They think end-to-end: UX, models, and ops. We could trace decisions back to customer impact instead of internal politics.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "CEO & founder",
    image: "/avatar/5.jpg",
    content:
      "Direct communication and zero fluff. We scaled scope when it made sense and cut when it did not—exactly how I want to work.",
    rating: 5,
  },
  {
    name: "James Taylor",
    role: "Lead engineer",
    image: "/avatar/6.jpg",
    content:
      "Clean handoffs, readable code, and docs that matched reality. Integrating our stack was smoother than with most external teams.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function HeroTestimonials() {
  return (
    <div className="relative z-10 overflow-hidden bg-white py-16 lg:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="mx-auto mb-6 max-w-4xl text-center text-4xl font-black leading-tight tracking-tighter text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            variants={titleVariants}
          >
            What teams say
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-center text-lg leading-relaxed tracking-tight text-gray-600 md:text-xl dark:text-gray-400"
            variants={titleVariants}
          >
            Founders and operators we have partnered with on AI products—from
            first prototype through production.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              content={testimonial.content}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
