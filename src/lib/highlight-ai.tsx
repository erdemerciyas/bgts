import React from "react";

const AI_GRADIENT_CLASS =
  "bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-extrabold";

const REST_CLASS = "text-slate-900";

export function highlightAI(text: string): React.ReactNode {
  if (!text) return text;
  const parts = text.split(/(AI)/g);
  return parts.map((part, i) =>
    part === "AI" ? (
      <span key={i} className={AI_GRADIENT_CLASS}>
        AI
      </span>
    ) : part ? (
      <span key={i} className={REST_CLASS}>
        {part}
      </span>
    ) : null
  );
}
