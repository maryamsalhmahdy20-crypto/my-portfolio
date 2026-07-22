import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience - Maryam Saleh | Graphic Designer",
  description: "Explore Maryam Saleh's professional experience, education, and design journey.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}

