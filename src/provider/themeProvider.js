"use client";

import { useEffect, useState } from "react";
import { ThemeContext } from "@/context/themeContext.js";
import React from "react";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const windowTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    document.body.classList.remove("light", "dark");
    if (localTheme) {
      setTheme(localTheme);
      setIsMounted(true);
      document.body.classList.add(localTheme);
    } else {
      localStorage.setItem("theme", windowTheme);
      setTheme(windowTheme);
      setIsMounted(true);
      document.body.classList.add(windowTheme);
    }
  }, []);
  function toggleTheme() {
    const localTheme = localStorage.getItem("theme");
    document.body.classList.remove("light", "dark");
    if (localTheme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.body.classList.add("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.body.classList.add("dark");
    }
  }
  if (!isMounted) return null;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

//I NEED TO REFACTOR THIS SHIT !! MUST BE A CLEANER WAY
