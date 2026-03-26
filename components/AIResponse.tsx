"use client";

import { useEffect, useState } from "react";

export default function AIResponse({ incident }: any) {
  const fullText = `Patient is diabetic. Avoid sugar unless hypoglycemic.
Monitor breathing. Do NOT give penicillin.`;

  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [incident]);

  if (!incident) return null;

  return (
    <div className="glass p-4 rounded-xl mt-4">
      <h4 className="font-semibold mb-2">AI Emergency Guidance</h4>
      <p className="text-sm whitespace-pre-line">{text}</p>
    </div>
  );
}