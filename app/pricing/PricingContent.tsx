"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
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

// ─── Individual Services ─────────────────────────────────────────
const individualServices = [
  { nameEn: "Logo Design", nameAr: "تصميم شعار", price: "$100" },
  { nameEn: "Bag Design", nameAr: "تصميم حقيبة", price: "$25" },
  { nameEn: "Business Card Design", nameAr: "تصميم بطاقة عمل", price: "$15" },
  { nameEn: "Thank You Card Design", nameAr: "تصميم كارت شكر", price: "$15" },
  { nameEn: "Box Design", nameAr: "تصميم صندوق", price: "$30" },
  { nameEn: "Brochure Design", nameAr: "تصميم بروشور", price: "$40" },
  { nameEn: "Envelope Design", nameAr: "تصميم ظرف", price: "$10" },
  { nameEn: "Access Design", nameAr: "تصميم أكسس", price: "$10" },
  { nameEn: "Wrapping Paper Design", nameAr: "تصميم ورق تغليف", price: "$5" },
  { nameEn: "Social Media Post Template", nameAr: "تصميم منشور سوشيال ميديا", price: "$5" },
  { nameEn: "Story Publishing Template", nameAr: "تصميم قصة ستوري", price: "$5" },
  { nameEn: "Highlight Design", nameAr: "تصميم هايلايت", price: "$2" },
  { nameEn: "Sticker Design", nameAr: "تصميم استيكر", price: "$2" },
];

// ─── Design Packages ──────────────────────────────────────────────
const designPackages = [
  {
    nameEn: "Professional Identity",
    nameAr: "هوية احترافية",
    price: "$299",
    descriptionEn: "Ideal for professional companies looking to develop and enhance their brand.",
    descriptionAr: "مثالية للشركات المحترفة التي تتطلع لتطوير علامتها التجارية.",
    featuresEn: [
      "Complete Visual Identity Design",
      "All types of packaging (bags, boxes, cups, flags, etc.)",
      "Marketing Material Design (banner, brochure, invitation cards, etc.)",
      "Social Media Templates",
      "Story Post Templates",
      "Highlights",
    ],
    featuresAr: [
      "تصميم هوية بصرية كاملة",
      "جميع أنواع التغليف (أكياس، صناديق، أكواب، أعلام، إلخ)",
      "تصميم مواد تسويقية (بانر، بروشور، بطاقات دعوة، إلخ)",
      "قوالب سوشيال ميديا",
      "قوالب قصص ستوري",
      "هايلايتس",
    ],
  },
  {
    nameEn: "Complete Identity",
    nameAr: "هوية كاملة",
    price: "$150",
    descriptionEn: "Ideal for medium-sized businesses that need to enhance their visual identity.",
    descriptionAr: "مثالية للشركات المتوسطة التي تحتاج تعزيز هويتها البصرية.",
    featuresEn: [
      "Logo Design",
      "Business Card Design",
      "Thank You Card Design",
      "Bag Design",
      "Box Design",
      "Receipt Design",
      "Social Media Post Template",
      "3 Story Post Templates",
      "5 Highlights",
    ],
    featuresAr: [
      "تصميم شعار",
      "تصميم بطاقة عمل",
      "تصميم كارت شكر",
      "تصميم حقيبة",
      "تصميم صندوق",
      "تصميم إيصال",
      "قالب منشور سوشيال ميديا",
      "3 قوالب ستوري",
      "5 هايلايتس",
    ],
  },
  {
    nameEn: "The Perfect Start",
    nameAr: "البداية المثالية",
    price: "$100",
    descriptionEn: "Ideal for those starting their business and needing a strong visual identity.",
    descriptionAr: "مثالية لمن يبدأون مشوارهم التجاري ويحتاجون هوية بصرية قوية.",
    featuresEn: [
      "Logo Design",
      "Business Card Design",
      "Sticker Design",
      "Social Media Post Template",
      "Story Post Template",
      "3 Highlights",
    ],
    featuresAr: [
      "تصميم شعار",
      "تصميم بطاقة عمل",
      "تصميم استيكر",
      "قالب منشور سوشيال ميديا",
      "قالب ستوري",
      "3 هايلايتس",
    ],
  },
];

// ─── Web & App Services ──────────────────────────────────────────
const webUiServices = [
  { nameEn: "Landing Page (UI/UX)", nameAr: "لاندينج بيج (UI/UX)", price: "$120" },
  { nameEn: "Company Website UI/UX (4–6 Pages)", nameAr: "موقع شركة UI/UX (4–6 صفحات)", price: "$400" },
  { nameEn: "E-commerce UI/UX", nameAr: "متجر إلكتروني UI/UX", price: "$700" },
  { nameEn: "Mobile App UI/UX", nameAr: "تطبيق جوال UI/UX", price: "$600" },
];

const webDevServices = [
  { nameEn: "Portfolio Website", nameAr: "موقع بورتفوليو", price: "$550" },
  { nameEn: "Company Website", nameAr: "موقع شركة", price: "$950" },
  { nameEn: "E-commerce Website (Starting from)", nameAr: "متجر إلكتروني (يبدأ من)", price: "$2,000" },
  { nameEn: "Dashboard / Admin Panel (Starting from)", nameAr: "لوحة تحكم (يبدأ من)", price: "$1,200" },
];

// ─── Web Design Gallery ───────────────────────────────────────────
const webImages = [
  "/images/portfolio/web.jpg",
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

      {/* ─── SERVICES & PRICING (NEW) ───────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[6px] text-purple-400 font-semibold">
              {language === "ar" ? "الخدمات والأسعار" : "Services & Pricing"}
            </p>
            <h2 className="text-4xl md:text-6xl font-black mt-4">
              {language === "ar" ? "كل ما تحتاجه" : "Everything You"}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {" "}{language === "ar" ? "لمشروعك" : "Need"}
              </span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              {language === "ar"
                ? "أصمم واجهات وتجارب استخدام احترافية باستخدام Figma، وأطوّر مواقع ويب حديثة بأحدث التقنيات مثل Next.js وReact مع التركيز على الأداء، سرعة التحميل، وتجربة المستخدم."
                : "I design professional UI/UX interfaces using Figma, and develop modern websites with cutting-edge technologies like Next.js and React, focusing on performance, speed, and user experience."}
            </p>
          </motion.div>

          {/* ── Individual Services ── */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-2"
            >
              {language === "ar" ? "العروض والخدمات" : "Offers and services"}
            </motion.h3>
            <p className="text-slate-400 mb-8">
              {language === "ar" ? "نعمل على تنفيذ تصاميم أخرى حسب الطلب." : "We work on implementing other designs upon request."}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {individualServices.map((service, index) => (
                <motion.div
                  key={service.nameEn}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between hover:border-purple-500 transition group"
                >
                  <span className="text-white text-sm font-medium">
                    {language === "ar" ? service.nameAr : service.nameEn}
                  </span>
                  <span className="text-purple-400 font-bold text-lg">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Design Packages ── */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
            >
              {language === "ar" ? "الباقات الاحترافية" : "Professional Packages"}
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {designPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.nameEn}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-8 transition duration-300 hover:-translate-y-3 shadow-xl shadow-purple-500/10"
                >
                  <h4 className="text-2xl font-bold">{language === "ar" ? pkg.nameAr : pkg.nameEn}</h4>
                  <div className="mt-4">
                    <span className="text-5xl font-black">{pkg.price}</span>
                  </div>
                  <p className="text-slate-400 mt-4 text-sm">
                    {language === "ar" ? pkg.descriptionAr : pkg.descriptionEn}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {(language === "ar" ? pkg.featuresAr : pkg.featuresEn).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center mt-8 py-4 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition"
                  >
                    {language === "ar" ? "اطلب الآن" : "Order Now"}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Web & App Services ── */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
            >
              {language === "ar" ? "تصميم وبرمجة المواقع والتطبيقات" : "Web & App Design & Development"}
            </motion.h3>

            {/* UI/UX Design */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                🎨 {language === "ar" ? "تصميم واجهات (Figma)" : "UI/UX Design (Figma)"}
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {webUiServices.map((service, index) => (
                  <motion.div
                    key={service.nameEn}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col hover:border-purple-500 transition"
                  >
                    <span className="text-white font-medium text-sm mb-2">
                      {language === "ar" ? service.nameAr : service.nameEn}
                    </span>
                    <span className="text-purple-400 font-bold text-xl">{service.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Development */}
            <div>
              <h4 className="text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                💻 {language === "ar" ? "التصميم + البرمجة" : "Design + Development"}
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {webDevServices.map((service, index) => (
                  <motion.div
                    key={service.nameEn}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col hover:border-pink-500 transition"
                  >
                    <span className="text-white font-medium text-sm mb-2">
                      {language === "ar" ? service.nameAr : service.nameEn}
                    </span>
                    <span className="text-pink-400 font-bold text-xl">{service.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Web Design Gallery ── */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-4 text-center"
            >
              {language === "ar" ? "تصميم مواقع الويب" : "Web Design"}
            </motion.h3>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              {language === "ar"
                ? "تم تصميم موقع لمنصة توظيف احترافية تحاكي كل معايير تجربة المستخدم UI/UX"
                : "A professional job platform website designed with full UI/UX standards"}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {webImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative h-72 rounded-3xl overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

