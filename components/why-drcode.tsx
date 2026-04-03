"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyDrCode() {
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[4.25rem] font-semibold text-gray-900 mb-6 leading-[0.95] tracking-[-0.02em]">
            Why work with us
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-[46ch] mx-auto leading-8">
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
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Icon/Image */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#875BF8] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
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
