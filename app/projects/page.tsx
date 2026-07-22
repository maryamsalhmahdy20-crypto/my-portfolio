import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects - Maryam Saleh | Graphic Designer",
  description: "Browse all graphic design projects by Maryam Saleh including branding, social media, and print design.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}

