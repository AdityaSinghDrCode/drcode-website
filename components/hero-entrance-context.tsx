"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type HeroEntranceContextValue = {
  mounted: boolean;
  prefersReducedMotion: boolean;
};

const HeroEntranceContext = createContext<HeroEntranceContextValue | null>(
  null,
);

export function HeroEntranceProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateReducedMotion = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateReducedMotion();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateReducedMotion);
      return () => mediaQuery.removeEventListener("change", updateReducedMotion);
    }

    mediaQuery.addListener(updateReducedMotion);
    return () => mediaQuery.removeListener(updateReducedMotion);
  }, []);

  return (
    <HeroEntranceContext.Provider value={{ mounted, prefersReducedMotion }}>
      {children}
    </HeroEntranceContext.Provider>
  );
}

export function useHeroEntrance() {
  const ctx = useContext(HeroEntranceContext);
  if (!ctx) {
    throw new Error("useHeroEntrance must be used within HeroEntranceProvider");
  }
  return ctx;
}
