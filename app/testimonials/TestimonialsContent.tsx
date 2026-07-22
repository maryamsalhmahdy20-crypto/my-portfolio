"use client";

import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            {language === "ar" ? "آراء العملاء" : "Testimonials"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            {language === "ar" ? "ماذا يقول" : "What"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "العملاء" : "Clients Say"}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            {language === "ar"
              ? "آراء الأشخاص الذين عملت معهم في مشاريع التصميم."
              : "Feedback from people I've worked with on their design projects."}
          </p>
        </div>
      </section>

      {/* Testimonials Component */}
      <section className="pb-20">
        <Testimonials />
      </section>
    </main>
  );
}

