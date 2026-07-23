"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import MusicPlayer from "@/components/MusicPlayer";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, dir } = useLanguage();

  const links = [
    { nameEn: "Home", nameAr: "الرئيسية", href: "/" },
    { nameEn: "About", nameAr: "عني", href: "/about" },
    { nameEn: "Portfolio", nameAr: "أعمالي", href: "/portfolio" },
    { nameEn: "Pricing", nameAr: "الأسعار", href: "/pricing" },
    { nameEn: "Testimonials", nameAr: "آراء العملاء", href: "/testimonials" },
    { nameEn: "Contact", nameAr: "اتصل بي", href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black tracking-tight">
          {language === "ar" ? "مصممة مريم" : "Designer Maryam"}
        </Link>

        <div className="flex items-center gap-4">
          <nav className={`hidden md:flex gap-8 ${dir === "rtl" ? "ml-4" : "mr-4"}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {language === "ar" ? link.nameAr : link.nameEn}
              </Link>
            ))}
          </nav>

          {/* Music Player */}
          <MusicPlayer />

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-sm font-medium text-slate-300 hover:text-white hover:border-blue-500 transition"
          >
            {language === "ar" ? "EN" : "AR"}
          </button>
        </div>
      </div>
    </header>
  );
}
