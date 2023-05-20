import { useEffect } from "react";
import { usePrefsDarkMode } from "./usePrefsDarkMode";
import { useSafeLocalStorageState } from "./useSafeLocalStorageState";

export function useDarkTheme(initialValue: boolean) {
  const [isDarkModeState, setIsDarkMode] = useSafeLocalStorageState(
    "isDark",
    initialValue
  );
  const isDarkModePref = usePrefsDarkMode(initialValue);

  const isDarkMode: boolean =
    isDarkModeState.isStoredValue || !isDarkModeState.isInitialValue
      ? isDarkModeState.value
      : isDarkModePref;

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
}
