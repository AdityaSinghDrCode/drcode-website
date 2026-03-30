"use client";

import dynamic from "next/dynamic";
import { Button } from "./ui/button";

const GLSLHills = dynamic(() => import("./ui/glsl-hills").then((mod) => mod.GLSLHills), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute px-6">
        <p className="text-sm md:text-base font-medium tracking-widest uppercase text-purple-600">
          AI Venture Studio
        </p>
        <h1 className="font-semibold text-5xl md:text-7xl whitespace-pre-wrap text-gray-900">
          <span className="italic text-4xl md:text-6xl font-thin">
            Build AI Products
            <br />
          </span>
          from Idea to Production
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          We partner with startups and companies to design, build, and launch
          <br className="hidden md:block" />
          AI-native products used in the real world.
        </p>
        <div className="flex justify-center items-center pointer-events-auto pt-4">
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
}
