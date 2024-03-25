"use client";

import React, { useEffect } from "react"; // Import useEffect
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"; // Import useTheme
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { setTheme } = useTheme(); // Use the useTheme hook to get setTheme

  useEffect(() => {
    // This effect runs once after the component mounts
    setTheme("light"); // Set the default theme to 'light'
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light" // This prop sets the initial theme before useEffect runs
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
