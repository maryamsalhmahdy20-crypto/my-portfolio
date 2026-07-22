"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const plans = [
  {
    nameEn: "Starter",
    nameAr: "المبتدئ",
    price: "$150",
    descriptionEn: "Perfect for small businesses or personal brands getting started.",
    descriptionAr: "مثالي للشركات الصغيرة أو العلامات التجارية الشخصية الجديدة.",
    featuresEn: [
      "Logo Design (2 concepts)",
      "Business Card Design",
      "Social Media Profile Kit",
      "1 Revision Round",
      "Source Files (PNG, JPG)",
    ],
    featuresAr: [
      "تصميم شعار (مفهومين)",
      "تصميم بطاقة عمل",
      "طقم حسابات سوشيال ميديا",
      "جولة مراجعة واحدة",
      "ملفات المصدر (PNG, JPG)",
    ],
    highlighted: false,
  },
  {
    nameEn: "Professional",
    nameAr: "الاحترافي",
    price: "$350",
    descriptionEn: "Ideal for businesses needing a complete brand presence.",
    descriptionAr: "مثالي للشركات التي تحتاج حضور علامة تجارية كامل.",
    featuresEn: [
      "Logo Design (4 concepts)",
      "Brand Color Palette",
      "Typography Selection",
      "Business Card & Letterhead",
      "Social Media Kit (5 posts)",
      "2 Revision Rounds",
      "Source Files (AI, PNG, PDF)",
    ],
    featuresAr: [
      "تصميم شعار (4 مفاهيم)",
      "لوحة ألوان العلامة التجارية",
      "اختيار الخطوط",
      "بطاقة عمل وقرطاسية",
      "طقم سوشيال ميديا (5 منشورات)",
      "جولتان مراجعة",
      "ملفات المصدر (AI, PNG, PDF)",
    ],
    highlighted: true,
  },
  {
    nameEn: "Enterprise",
    nameAr: "المؤسسات",
    price: "$700",
    descriptionEn: "Comprehensive branding package for established businesses.",
    descriptionAr: "باقة هوية بصرية شاملة للشركات القائمة.",
    featuresEn: [
      "Complete Brand Identity",
      "Logo Design (6 concepts)",
      "Full Color Palette & Typography",
      "Brand Guidelines Document",
      "Business Stationery Suite",
      "Social Media Kit (10 posts)",
      "Packaging Design",
      "3 Revision Rounds",
      "Source Files (All formats)",
    ],
    featuresAr: [
      "هوية بصرية كاملة",
      "تصميم شعار (6 مفاهيم)",
      "لوحة ألوان وخطوط كاملة",
      "دليل العلامة التجارية",
      "طقم القرطاسية المكتبية",
      "طقم سوشيال ميديا (10 منشورات)",
      "تصميم تغليف",
      "3 جولات مراجعة",
      "ملفات المصدر (جميع الصيغ)",
    ],
    highlighted: false,
  },
];

const addons = [
  { nameEn: "Additional Logo Concept", nameAr: "مفهوم شعار إضافي", price: "$50" },
  { nameEn: "Social Media Post (per post)", nameAr: "منشور سوشيال ميديا (للإنشاد)", price: "$25" },
  { nameEn: "Flyer/Brochure Design", nameAr: "تصميم فلاير/بروشور", price: "$80" },
  { nameEn: "Packaging Design", nameAr: "تصميم تغليف", price: "$150" },
  { nameEn: "Website UI Design (per page)", nameAr: "تصميم واجهة موقع (للصفحة)", price: "$100" },
];

export default function PricingContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            {language === "ar" ? "الأسعار" : "Pricing"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            {language === "ar" ? "باقات" : "Design"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "التصميم" : "Packages"}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            {language === "ar"
              ? "اختر الباقة التي تناسب احتياجاتك. عروض أسعار مخصصة للمشاريع الأكبر."
              : "Choose the package that fits your needs. Custom quotes available for larger projects."}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.nameEn}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative rounded-3xl p-8 border-2 transition duration-300 hover:-translate-y-3 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-blue-500 shadow-xl shadow-blue-500/10"
                    : "bg-slate-900 border-slate-800 hover:border-blue-500"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-1.5 rounded-full text-sm font-semibold">
                    {language === "ar" ? "الأكثر طلباً" : "Most Popular"}
                  </div>
                )}

                <div className="mt-2">
                  <h3 className="text-2xl font-bold">
                    {language === "ar" ? plan.nameAr : plan.nameEn}
                  </h3>
                  <div className="mt-4">
                    <span className="text-5xl font-black">{plan.price}</span>
                  </div>
                  <p className="text-slate-400 mt-4">
                    {language === "ar" ? plan.descriptionAr : plan.descriptionEn}
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {(language === "ar" ? plan.featuresAr : plan.featuresEn).map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center mt-10 py-4 rounded-xl font-bold transition ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      : "bg-slate-800 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  {language === "ar" ? "ابدأ الآن" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black">
              {language === "ar" ? "خدمات إضافية" : "Add-On Services"}
            </h2>
            <p className="text-slate-400 mt-4">
              {language === "ar" ? "عزز باقتك بخدمات إضافية." : "Enhance your package with additional services."}
            </p>
          </motion.div>

          <div className="space-y-4">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.nameEn}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition"
              >
                <span className="text-white font-medium">
                  {language === "ar" ? addon.nameAr : addon.nameEn}
                </span>
                <span className="text-blue-400 font-bold text-lg">{addon.price}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold">
              {language === "ar" ? "هل تحتاج عرض سعر مخصص؟" : "Need a Custom Quote?"}
            </h3>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              {language === "ar"
                ? "كل مشروع فريد. تواصل معي للحصول على عرض سعر مخصص يناسب متطلباتك."
                : "Every project is unique. Contact me for a personalized quote tailored to your specific requirements."}
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold transition"
            >
              {language === "ar" ? "تواصل معي" : "Contact Me"}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

