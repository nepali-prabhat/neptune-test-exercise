"use client";
import { useDarkTheme } from "@/hooks/useDarkTheme";
import styles from "./page.module.css";
import NeptuneLogo from "@/components/NeptuneLogo";
// import dynamic from "next/dynamic";
import Calculator from "@/components/Calculator/calculator";

function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkTheme(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={styles.main}>
      <div className="center">
        <NeptuneLogo />
      </div>
      <div className="center">
        <Calculator
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
      </div>
    </main>
  );
}

// export default dynamic(() => Promise.resolve(Home), { ssr: false });
export default Home;
