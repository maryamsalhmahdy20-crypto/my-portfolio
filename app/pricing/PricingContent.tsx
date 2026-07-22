"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for small businesses or personal brands getting started.",
    features: [
      "Logo Design (2 concepts)",
      "Business Card Design",
      "Social Media Profile Kit",
      "1 Revision Round",
      "Source Files (PNG, JPG)",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$350",
    description: "Ideal for businesses needing a complete brand presence.",
    features: [
      "Logo Design (4 concepts)",
      "Brand Color Palette",
      "Typography Selection",
      "Business Card & Letterhead",
      "Social Media Kit (5 posts)",
      "2 Revision Rounds",
      "Source Files (AI, PNG, PDF)",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$700",
    description: "Comprehensive branding package for established businesses.",
    features: [
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
    highlighted: false,
  },
];

const addons = [
  { name: "Additional Logo Concept", price: "$50" },
  { name: "Social Media Post (per post)", price: "$25" },
  { name: "Flyer/Brochure Design", price: "$80" },
  { name: "Packaging Design", price: "$150" },
  { name: "Website UI Design (per page)", price: "$100" },
];

export default function PricingContent() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[6px] text-blue-400 font-semibold">Pricing</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mt-4 tracking-tight">
            Design
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Packages</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the package that fits your needs. Custom quotes available for larger projects.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
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
                    Most Popular
                  </div>
                )}

                <div className="mt-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-5xl font-black">{plan.price}</span>
                  </div>
                  <p className="text-slate-400 mt-4">{plan.description}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
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
                  Get Started
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
            <h2 className="text-3xl md:text-4xl font-black">Add-On Services</h2>
            <p className="text-slate-400 mt-4">Enhance your package with additional services.</p>
          </motion.div>

          <div className="space-y-4">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition"
              >
                <span className="text-white font-medium">{addon.name}</span>
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
            <h3 className="text-2xl font-bold">Need a Custom Quote?</h3>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Every project is unique. Contact me for a personalized quote tailored to your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold transition"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

