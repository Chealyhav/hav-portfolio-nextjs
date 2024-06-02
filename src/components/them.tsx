"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      aria-label="Toggle Dark Mode"
      role="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className=" bg-white shadow-xl rounded-full p-0.5 drop-shadow-md"
    >
      {theme === "light" ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800" />
      )}
    </div>
  );
}
