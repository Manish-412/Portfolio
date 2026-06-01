"use client";

import { useEffect, useState } from "react";

export function AnimatedTyping({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  useEffect(() => {
    const word = words[index] ?? "";

    if (direction === "forward" && subIndex === word.length) {
      const timeout = setTimeout(() => setDirection("back"), 1000);
      return () => clearTimeout(timeout);
    }

    if (direction === "back" && subIndex === 0) {
      setDirection("forward");
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (direction === "forward" ? 1 : -1));
    }, direction === "forward" ? 80 : 40);

    return () => clearTimeout(timeout);
  }, [direction, index, subIndex, words]);

  return (
    <span className="relative inline-flex items-center">
      <span>{words[index]?.slice(0, subIndex)}</span>
      <span className="ml-1 inline-block h-5 w-px bg-sky-400/80 animate-pulse" />
    </span>
  );
}
