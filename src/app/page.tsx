"use client";
import { useDarkTheme } from "@/hooks/useDarkTheme";

import styles from "./page.module.css";
import NeptuneLogo from "@/components/NeptuneLogo";
import Calculator from "@/components/Calculator/calculator";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWalletModal/ConnectWalletModal";

function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkTheme(false);
  const [isWalletDetailsOpen, setIsWalletDetailsOpen] = useState(false);

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
          setIsWalletDetailsOpen={setIsWalletDetailsOpen}
        />
      </div>
      {isWalletDetailsOpen ? (
        <ConnectWalletModal
          isOpen={isWalletDetailsOpen}
          onClose={() => setIsWalletDetailsOpen(false)}
        />
      ) : null}
    </main>
  );
}

export default Home;
