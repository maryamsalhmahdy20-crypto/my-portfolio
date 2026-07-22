import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience - Designer Maryam | Graphic Designer",
  description: "Explore Designer Maryam's professional experience, education, and design journey.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}

