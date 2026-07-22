"use client";

import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            {language === "ar" ? "المشاريع" : "Projects"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            {language === "ar" ? "كل" : "All"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "المشاريع" : "Projects"}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            {language === "ar"
              ? "مجموعة كاملة من أعمالي التصميمية عبر مختلف الفئات."
              : "A complete collection of my design work across different categories."}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>
    </main>
  );
}

