import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact - Designer MAREAM | Graphic Designer",
  description: "Get in touch with Designer MAREAM for branding, social media, and print design projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}

