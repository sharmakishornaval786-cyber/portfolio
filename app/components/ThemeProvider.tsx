"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark =
      stored === "dark" || (stored === null && systemDark);

    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  if (!isMounted) return <>{children}</>;

  return (
    <>
      {children}
      <style>{`
        :root {
          --toggle-theme: ${isDark ? "dark" : "light"};
        }
      `}</style>
    </>
  );
}
