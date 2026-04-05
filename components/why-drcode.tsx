"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Smooth easing curves
const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function WhyDrCode() {
  const prefersReducedMotion = useReducedMotion();

  const reasons = [
    {
      title: "Real products, not demos",
      description: "We build production systems that serve real users, not proof-of-concepts that sit on a shelf.",
      image: "/illustration/man-riding-a-rocket.svg",
    },
    {
      title: "Close collaboration",
      description: "Your team works directly with ours. No layers of account managers or project coordinators.",
      image: "/illustration/shaking-hands.svg",
    },
    {
      title: "End-to-end ownership",
      description: "We own the entire journey from initial idea to deployment and beyond. One team, full accountability.",
      image: "/illustration/engineer.svg",
    },
    {
      title: "Build, measure, improve",
      description: "Rapid iterations based on real data and user feedback. We ship fast and learn faster.",
      image: "/illustration/business-success-chart.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: easeOutQuart,
      },
    },
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: easeOutQuart }}
        >
          <h2 className="type-display mb-6 text-gray-900">
            Why work with us
          </h2>
          <p className="type-body-lg mx-auto text-gray-600">
            We're not consultants. We're builders who ship.
          </p>
        </motion.div>

        {/* Two-column list layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6 group"
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.25, ease: easeOutQuart }}
            >
              {/* Icon/Image */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center"
                  whileHover={
                    prefersReducedMotion ? undefined : { scale: 1.05, rotate: 2 }
                  }
                  transition={{ duration: 0.25, ease: easeOutQuart }}
                >
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="type-card-title mb-3 text-gray-900 transition-colors duration-200 group-hover:text-[#875BF8]">
                  {reason.title}
                </h3>
                <p className="type-body text-gray-600">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
