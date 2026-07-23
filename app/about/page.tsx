import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About - Designer MAREAM | Graphic Designer",
  description: "Learn more about Designer MAREAM, a creative graphic designer specializing in brand identity, social media campaigns, and print design.",
};

export default function AboutPage() {
  return <AboutContent />;
}

