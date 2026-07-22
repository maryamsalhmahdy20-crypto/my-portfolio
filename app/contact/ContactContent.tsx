"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Camera, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Camera,
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Globe,
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Code2,
    color: "hover:text-gray-300",
  },
];

export default function ContactContent() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            {language === "ar" ? "تواصل معي" : "Get In Touch"}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            {language === "ar" ? "لنعمل" : "Let&apos;s Work"}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}{language === "ar" ? "معاً" : "Together"}
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            {language === "ar"
              ? "لدي مشروع في بالك؟ يسعدني سماع أفكارك. تواصل معي وأخبرني عن مشروعك."
              : "Have a project in mind? I'd love to hear about it. Let's create something amazing together."}
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
              </h3>
              <a
                href="mailto:designermaream@gmail.com"
                className="text-slate-400 hover:text-blue-400 transition break-all"
              >
                designermaream@gmail.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === "ar" ? "رقم الهاتف" : "Phone"}
              </h3>
              <a
                href="tel:+96477042185816"
                className="text-slate-400 hover:text-blue-400 transition"
                dir="ltr"
              >
                +964 0774 218 5816
              </a>
              <p className="text-slate-500 text-sm mt-1">
                {language === "ar" ? "العراق - البصرة" : "Basrah, Iraq"}
              </p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === "ar" ? "الموقع" : "Location"}
              </h3>
              <p className="text-slate-400">
                {language === "ar" ? "البصرة، العراق" : "Basrah, Iraq"}
              </p>
            </motion.div>
          </div>

          {/* Social Media & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800/50 border border-slate-800 rounded-3xl p-10 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              {language === "ar" ? "تابعني على" : "Follow Me On"}
            </h3>
            <div className="flex justify-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center transition duration-300 hover:border-blue-500 ${social.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <p className="text-slate-400 mt-8 leading-relaxed max-w-xl mx-auto">
              {language === "ar"
                ? "يمكنك التواصل معي عبر البريد الإلكتروني أو الهاتف. سأرد عليك في أقرب وقت ممكن."
                : "You can reach me via email or phone. I'll get back to you as soon as possible."}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

