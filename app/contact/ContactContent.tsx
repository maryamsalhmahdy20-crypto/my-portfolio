"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Camera, Code2 } from "lucide-react";

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
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            Let&apos;s Work
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Together</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 focus:border-blue-500 outline-none transition text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 focus:border-blue-500 outline-none transition text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 focus:border-blue-500 outline-none transition text-white"
                />
                <textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 focus:border-blue-500 outline-none transition text-white resize-none"
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Thank you! This is a demo form. Please email me directly at maryam@example.com");
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition font-bold text-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Info</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-slate-400 mt-1">maryam@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-slate-400 mt-1">Basrah, Iraq</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-800">
                  <h3 className="text-lg font-semibold mb-6">Follow Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center transition duration-300 hover:border-blue-500 ${social.color}`}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                    <p className="text-slate-300 leading-relaxed">
                      I typically respond within 24 hours. Let&apos;s discuss how I can help bring your vision to life!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

