import { Outfit } from "next/font/google";

/** Display-style substitute for Cal Sans (not on Google Fonts). */
export const calsans = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-calsans",
});
