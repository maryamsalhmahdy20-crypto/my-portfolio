"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Comment = {
  id: number;
  name: string;
  email: string;
  comment: string;
};

export default function Testimonials() {
  const [comments, setComments] = useState<Comment[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  async function loadComments() {
    if (!supabase) return;
    
    const { data } = await supabase
      .from("comments")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (data) setComments(data);
  }

  useEffect(() => {
    loadComments();
  }, []);

  async function sendComment() {
    if (!name || !email || !comment) {
      alert("Please fill all fields");
      return;
    }

    if (!supabase) {
      alert("Database connection not available");
      return;
    }

    const { error } = await supabase.from("comments").insert([
      {
        name,
        email,
        comment,
        approved: false,
      },
    ]);

    if (error) {
      console.log(error);
      alert("Error");
      return;
    }

    alert("Comment sent successfully. It will appear after approval.");

    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <section className="py-20 max-w-4xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Testimonials
      </h2>

      <div className="bg-[#161d2f] rounded-xl p-8 mb-16">

        <input
          className="w-full mb-5 p-4 rounded bg-[#232c41] text-white"
          placeholder="Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full mb-5 p-4 rounded bg-[#232c41] text-white"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <textarea
          className="w-full mb-5 p-4 rounded bg-[#232c41] text-white h-40"
          placeholder="Write your opinion..."
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

        <button
          onClick={sendComment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4"
        >
          Send
        </button>

      </div>

      <div className="space-y-6">

        {comments.map((item)=>(
          <div
            key={item.id}
            className="bg-[#161d2f] rounded-xl p-6"
          >

            <h3 className="text-xl font-bold text-white">
              {item.name}
            </h3>

            <p className="text-blue-400 mb-3">
              {item.email}
            </p>

            <p className="text-gray-300">
              {item.comment}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}