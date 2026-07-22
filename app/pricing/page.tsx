import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing - Maryam Saleh | Graphic Designer",
  description: "View my pricing packages for branding, social media, and print design services.",
};

export default function PricingPage() {
  return <PricingContent />;
}

