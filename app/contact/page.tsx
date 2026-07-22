import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact - Designer Maryam | Graphic Designer",
  description: "Get in touch with Designer Maryam for branding, social media, and print design projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}

