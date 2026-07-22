import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonials - Maryam Saleh | Graphic Designer",
  description: "Read what clients say about working with Maryam Saleh on their branding and design projects.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}

