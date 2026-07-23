"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, dir } = useLanguage();

  return (
    <footer className="py-12 text-center bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="text-3xl font-black tracking-tight text-white">
          {language === "ar" ? "مصممة مريم" : "Designer MAREAM"}
        </Link>
        <p className="mt-4 text-slate-400 max-w-md mx-auto">
          {language === "ar"
            ? "مصممة جرافيك متخصصة في الهوية البصرية، تصميم السوشيال ميديا، والطباعة."
            : "Graphic Designer specializing in Brand Identity, Social Media, and Print Design."}
        </p>
        <div className={`flex justify-center gap-6 mt-6 text-slate-500 text-sm ${dir === "rtl" ? "flex-row" : "flex-row"}`}>
          <Link href="/about" className="hover:text-blue-400 transition">{language === "ar" ? "عني" : "About"}</Link>
          <Link href="/portfolio" className="hover:text-blue-400 transition">{language === "ar" ? "أعمالي" : "Portfolio"}</Link>
          <Link href="/pricing" className="hover:text-blue-400 transition">{language === "ar" ? "الأسعار" : "Pricing"}</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">{language === "ar" ? "اتصل بي" : "Contact"}</Link>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {language === "ar" ? "مصممة مريم. جميع الحقوق محفوظة." : "Designer MAREAM. All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
