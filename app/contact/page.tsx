"use client";

/*
===========================================
Contact Page
-------------------------------------------
هذه الصفحة ترسل الرسائل إلى Supabase.

يمكنك لاحقاً تعديل:
- الألوان
- النصوص
- حجم الحقول
===========================================
*/

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Send } from "lucide-react";

export default function ContactPage() {
  // بيانات النموذج
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // حالة الإرسال
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("messages")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    setLoading(false);

    if (error) {
      alert("حدث خطأ أثناء الإرسال");
      console.error(error);
      return;
    }

    alert("تم إرسال رسالتك بنجاح ✔");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="min-h-screen bg-[#05081d] text-white flex items-center justify-center px-6 py-20">

      <form
        onSubmit={sendMessage}
        className="w-full max-w-3xl bg-[#11182d] rounded-3xl p-10 space-y-7"
      >

        <h1 className="text-5xl font-bold">
          Contact Me
        </h1>

        <input
          required
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl bg-[#222c41] p-5 outline-none"
        />

        <input
          required
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-[#222c41] p-5 outline-none"
        />

        <textarea
          required
          rows={7}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl bg-[#222c41] p-5 outline-none resize-none"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 duration-300 rounded-xl py-5 flex justify-center items-center gap-3 font-semibold text-lg"
        >
          <Send size={22} />

          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </section>
  );
}