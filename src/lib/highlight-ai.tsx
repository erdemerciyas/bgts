import React from "react";

const AI_GRADIENT_CLASS =
  "bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-extrabold";

export function highlightAI(text: string): React.ReactNode {
  if (!text) return text;
  const parts = text.split(/(AI)/g);
  return parts.map((part, i) =>
    part === "AI" ? (
      <span key={i} className={AI_GRADIENT_CLASS}>
        AI
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
