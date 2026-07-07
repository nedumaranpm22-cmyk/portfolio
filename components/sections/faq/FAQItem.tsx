"use client";

import { useState } from "react";

export default function FAQItem({ faq }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl border p-5">
      <button
        onClick={() => {
          console.log("Clicked", open);
          setOpen(!open);
        }}
        className="w-full text-left font-bold"
      >
        {faq.question}
      </button>

      {open && (
        <div className="mt-4 rounded bg-red-100 p-4">
          {faq.answer}
        </div>
      )}
    </div>
  );
}