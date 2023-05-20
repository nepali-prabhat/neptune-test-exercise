"use client";
import { Web3ReactProvider } from "@web3-react/core";
import { buildInjectedConnector } from "@/utils";
import { useDarkTheme } from "@/hooks/useDarkTheme";

import styles from "./page.module.css";
import NeptuneLogo from "@/components/NeptuneLogo";
import Calculator from "@/components/Calculator/calculator";
import { useState } from "react";
import ConnectWalletModal from "@/components/ConnectWalletModal/ConnectWalletModal";
import { web3Metamask, web3MetamaskHooks } from "@/connector";

function Home() {
  const [isDarkMode, setIsDarkMode] = useDarkTheme(false);
  const [isWalletDetailsOpen, setIsWalletDetailsOpen] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Web3ReactProvider connectors={[[web3Metamask, web3MetamaskHooks]]}>
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
    </Web3ReactProvider>
  );
}

export default Home;
