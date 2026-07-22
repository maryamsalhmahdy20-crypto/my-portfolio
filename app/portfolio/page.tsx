"use client";

import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
            {language === "ar" ? "أعمالي" : "My"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "المميزة" : "Portfolio"}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "استعرض أحدث مشاريعي في الهوية البصرية، السوشيال ميديا، وتصميم الطباعة."
              : "Explore my latest projects in branding, social media, and print design."}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  );
}
