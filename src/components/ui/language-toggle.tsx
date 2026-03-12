"use client";

import { useLanguage } from "@/context/language-context";
import clsx from "clsx";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={clsx(
          "rounded-full px-3 py-1 text-sm font-medium transition-all duration-300",
          language === "en"
            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md"
            : "text-white/70 hover:text-white",
        )}
      >
        EN
      </button>

      <span className="px-1 text-white/40">|</span>

      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={clsx(
          "rounded-full px-3 py-1 text-sm font-medium transition-all duration-300",
          language === "de"
            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md"
            : "text-white/70 hover:text-white",
        )}
      >
        DE
      </button>
    </div>
  );
}
