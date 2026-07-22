import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact - Maryam Saleh | Graphic Designer",
  description: "Get in touch with Maryam Saleh for branding, social media, and print design projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}

