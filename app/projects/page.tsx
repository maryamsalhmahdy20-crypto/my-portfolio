import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects - Designer MAREAM | Graphic Designer",
  description: "Browse all graphic design projects by Designer MAREAM including branding, social media, and print design.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

