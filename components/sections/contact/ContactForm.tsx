"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Contact form integration will be added soon 🚀");
      setLoading(false);
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-xl"
    >
      <h3 className="mb-8 text-3xl font-bold">
        Send a Message
      </h3>

      <div className="space-y-5">

        <input
          required
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#FF6B4A]"
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#FF6B4A]"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#FF6B4A]"
        />

        <textarea
          required
          rows={6}
          placeholder="Your Message..."
          className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-[#FF6B4A]"
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-[#FF6B4A] py-4 font-semibold text-white transition hover:bg-[#ff5a36]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </div>
    </form>
  );
}