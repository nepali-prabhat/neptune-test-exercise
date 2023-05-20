import { useState, useEffect } from "react";

function _getColorSchemeMediaQuery() {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }
}

export function usePrefsDarkMode(initialValue: boolean) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const query = _getColorSchemeMediaQuery();
    return query ? query.matches : initialValue;
  });

  useEffect(() => {
    const mediaQuery = _getColorSchemeMediaQuery();
    if (!mediaQuery) {
      return;
    }

    function onChange(event: MediaQueryListEvent | MediaQueryList): void {
      setIsDarkMode(event.matches);
    }
    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return isDarkMode;
}
