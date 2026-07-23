import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonials - Designer MAREAM | Graphic Designer",
  description: "Read what clients say about working with Designer MAREAM on their branding and design projects.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}

