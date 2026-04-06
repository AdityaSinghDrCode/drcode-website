"use client";

import Image from "next/image";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

/**
 * Stock-style demo for `ContainerScroll` using a local asset (`public/interview/image.png`).
 * Import on a page when you want the default “Scroll Animations” hero from the integration guide.
 */
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/interview/image.png"
          alt=""
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
