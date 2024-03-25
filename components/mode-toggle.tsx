"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true);
    console.log("mounted");
  }, []);

  if (!mounted) {
    return null; // or a loader/placeholder
  }

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <div className="w-10 font-mono cursor-pointer font-bold h-10 rounded-full bg-neutral-200 hover:bg-indigo-500 transition-colors ease-linear duration-100 shadow-black/25 ring-1 ring-indigo-500/50 shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.6)] inline-flex items-center justify-center">
            <MoonIcon className="text-neutral-800 hover:text-neutral-200 h-5 w-5" />
          </div>
        ) : (
          <div className="w-10 font-mono cursor-pointer font-bold h-10 rounded-full bg-neutral-800 hover:bg-indigo-500 transition-colors ease-linear duration-100 shadow-black/25 ring-1 ring-indigo-500/50 shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.6)] inline-flex items-center justify-center">
            <SunIcon className="text-neutral-200 h-5 w-5" />
          </div>
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
