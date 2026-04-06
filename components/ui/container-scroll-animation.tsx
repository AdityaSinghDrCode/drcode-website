"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { BorderBeam } from "@/components/ui/border-beam";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.72, 0.92] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -72]);

  return (
    <div
      className="relative flex h-[52rem] items-center justify-center p-2 md:h-[72rem] md:p-12 lg:p-20"
      ref={containerRef}
    >
      <div
        className="relative w-full py-8 md:py-24 lg:py-32"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="relative z-10 mx-auto max-w-5xl px-2 pb-8 text-center md:pb-12"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate: _translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 2px 4px rgba(15,23,42,0.04), 0 12px 28px rgba(15,23,42,0.08), 0 28px 64px rgba(15,23,42,0.12)",
      }}
      className="relative z-0 mx-auto mt-8 h-[26rem] w-full max-w-5xl overflow-hidden rounded-[28px] border-[3px] border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-2 shadow-2xl sm:mt-10 md:mt-14 md:h-[38rem] md:rounded-[32px] md:p-5"
    >
      <BorderBeam
        size={90}
        duration={14}
        borderWidth={2}
        colorFrom="hsl(var(--brand) / 0.85)"
        colorTo="hsl(270 70% 92% / 0.55)"
      />
      <div className="relative z-[1] h-full w-full overflow-hidden rounded-2xl border border-slate-100 bg-white md:rounded-[22px] md:p-3">
        {children}
      </div>
    </motion.div>
  );
};
