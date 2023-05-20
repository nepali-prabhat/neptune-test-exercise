import { FC, useState } from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { BUSDIcon } from "../Icons/BUSDIcon";
import { NeptuneMutualIcon } from "../Icons/NeptuneMutualIcon";
import ThemeToggle from "../ThemeToggle";
import TokenValueInput from "../TokenValueInput";
import styles from "./calculator.module.css";
import { TokenValues, Tokens } from "@/types";
import ConnectWalletModal from "../ConnectWalletModal/ConnectWalletModal";

const TokenIcons: { [key in Tokens]: FC } = {
  nep: NeptuneMutualIcon,
  busd: BUSDIcon,
};
export default function Calculator(props: {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  setIsWalletDetailsOpen: (v: boolean) => void;
}) {
  const [tokenValues, setTokenValues] = useState<TokenValues>({
    nep: "",
    busd: "",
  });
  const [isReversed, setIsReversed] = useState(false);

  const handleTokenValueCahnged = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    if (value === "") {
      setTokenValues({ nep: "", busd: "" });
    } else {
      const nep = name === "nep" ? value : (parseFloat(value) / 3).toFixed(2);
      const busd = name === "busd" ? value : (parseFloat(value) * 3).toFixed(2);
      setTokenValues({
        nep,
        busd,
      });
    }
  };

  const handleMiddleButtonClick = () => {
    setIsReversed((v) => !v);
  };
  const inputsOrder = (
    isReversed ? ["busd", "nep"] : ["nep", "busd"]
  ) as Tokens[];

  return (
    <>
      <div className={styles.card}>
        <div>
          <h3>Crypto Converter</h3>
          <ThemeToggle
            value={props.isDarkMode}
            onToggle={props.onToggleDarkMode}
          />
        </div>
        <div>
          <TokenValueInput
            name={inputsOrder[0]}
            value={tokenValues[inputsOrder[0]]}
            onChange={handleTokenValueCahnged}
            Icon={TokenIcons[inputsOrder[0]]}
            label={inputsOrder[0].toUpperCase()}
          />
          <button
            className={styles.middleButton}
            onClick={handleMiddleButtonClick}
            aria-label="Swap currencies"
          >
            <ArrowIcon />
          </button>
          <TokenValueInput
            name={inputsOrder[1]}
            value={tokenValues[inputsOrder[1]]}
            onChange={handleTokenValueCahnged}
            Icon={TokenIcons[inputsOrder[1]]}
            label={inputsOrder[1].toUpperCase()}
          />
        </div>
        <button
          className="btn-primary"
          onClick={() => props.setIsWalletDetailsOpen(true)}
        >
          Check Wallet Details
        </button>
      </div>
    </>
  );
}
