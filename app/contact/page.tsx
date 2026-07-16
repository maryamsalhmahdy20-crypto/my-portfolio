"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-32">

        <p className="uppercase tracking-[6px] text-blue-400">
          Contact
        </p>

        <h1 className="text-6xl font-black mt-4">
          Let's Work Together
        </h1>

        <p className="text-slate-400 mt-6 max-w-2xl leading-8">
          If you need branding, social media designs, print materials,
          UI design or any graphic work, feel free to contact me.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* المعلومات */}

          <div className="space-y-8">

            <div className="flex gap-5 items-center bg-slate-900 p-6 rounded-2xl">

              <Mail className="text-blue-400" size={30} />

              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-slate-400">
                  maryamsalhmahdy25@gmail.com
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-center bg-slate-900 p-6 rounded-2xl">

              <Phone className="text-blue-400" size={30} />

              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-slate-400">
                  07742185816
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-center bg-slate-900 p-6 rounded-2xl">

              <MapPin className="text-blue-400" size={30} />

              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-slate-400">
                  Basra - Iraq
                </p>
              </div>

            </div>

          </div>

          {/* الفورم */}

          <form className="bg-slate-900 rounded-3xl p-8 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500 resize-none"
            />

            <button
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 duration-300 rounded-xl py-4 w-full font-semibold"
            >
              <Send size={20} />
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}