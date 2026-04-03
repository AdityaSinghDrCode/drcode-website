"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Idea & Discovery",
      description: "We start by understanding your vision, challenges, and goals through in-depth discussions.",
      image: "/illustration/idea-launch.svg",
    },
    {
      number: "02",
      title: "Rapid Prototyping",
      description: "Quick iterations to validate concepts and get early feedback before full development.",
      image: "/illustration/working-vacation.svg",
    },
    {
      number: "03",
      title: "Build & Scale",
      description: "Production-grade development with clean code, testing, and scalable architecture.",
      image: "/illustration/product-launch.svg",
    },
    {
      number: "04",
      title: "Deploy & Monitor",
      description: "Launch with confidence and continuous monitoring to ensure everything runs smoothly.",
      image: "/illustration/remote-work.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="how-we-work"
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            How we work
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[44ch] mx-auto leading-8">
            Four steps from idea to production
          </p>
        </motion.div>

        {/* Vertical timeline layout */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number & Image Side */}
              <motion.div
                className="flex-shrink-0 relative md:w-64"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative w-64 h-64 flex items-center justify-center">
                  {/* Step number - large background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[200px] font-bold text-gray-100 leading-none">
                      {step.number}
                    </span>
                  </div>
                  {/* Image overlay */}
                  <div className="relative z-10">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={160}
                      height={160}
                      loading="lazy"
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <div className={`flex-1 text-center md:text-left ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}>
                <motion.div
                  className="inline-block mb-3 px-4 py-1 bg-purple-100 text-purple-900 rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  Step {step.number}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className={`text-lg text-gray-600 leading-relaxed max-w-md ${
                  index % 2 === 1 ? "md:ml-auto" : ""
                }`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
