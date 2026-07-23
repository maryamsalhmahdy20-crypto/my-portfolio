import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience - Designer MAREAM | Graphic Designer",
  description: "Explore Designer MAREAM's professional experience, education, and design journey.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}

