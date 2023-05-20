import { PropsWithChildren, useEffect } from "react";
import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./connectWalletModal.module.css";
import { XIcon } from "../Icons/XIcon";
import { NoWalletIcon } from "../Icons/NoWalletIcon";
import { walletModalId } from "@/constants";
import { METAMASK_URL, hasMetaMaskExtensionInstalled } from "@/utils";
import { web3Metamask, web3MetamaskHooks } from "@/connector";
import { useBalances } from "@/hooks/useBalances";
import { formatEther } from "ethers/lib/utils";
import { useChainInfo } from "@/hooks/useChainInfo";

function DisconnectedBody(props: { isInteractingWithConnector: boolean }) {
  return (
    <div className={styles.disconnected}>
      <NoWalletIcon />
      {props.isInteractingWithConnector ? (
        <p>Connecting to wallet...</p>
      ) : (
        <p>Wallet is not connected.</p>
      )}
    </div>
  );
}

function ConnectWalletComponent({ onClose }: { onClose: () => void }) {
  const isActive = web3MetamaskHooks.useIsActive();
  const chainId = web3MetamaskHooks.useChainId();
  const accounts = web3MetamaskHooks.useAccounts();
  const provider = web3MetamaskHooks.useProvider();
  const balances = useBalances(provider, accounts);
  const chainInfo = useChainInfo(chainId);

  const [isInteractingWithConnector, setIsInteractingWithConnector] =
    useState(false);

  const handleWalletActionClick = async () => {
    if (!hasMetaMaskExtensionInstalled()) {
      window.open(METAMASK_URL, "_blank") ||
        window.location.replace(METAMASK_URL);
      return;
    }
    try {
      setIsInteractingWithConnector(true);
      if (isActive) {
        await web3Metamask.deactivate?.();
        await web3Metamask.resetState();
      } else {
        await web3Metamask.activate();
      }
    } catch (e: any) {
      // TODO: gracfully handle error
      if (typeof e === "object" && e?.code) {
        alert(e.message);
      }
      console.debug(e);
    }
    setIsInteractingWithConnector(false);
  };

  return (
    <div className={styles.card}>
      <div>
        <h3>Wallet Details</h3>
        <button
          className={styles.closeButton + " center"}
          onClick={onClose}
          aria-label="Close Modal"
        >
          <XIcon />
        </button>
      </div>
      {!isActive && (
        <DisconnectedBody
          isInteractingWithConnector={isInteractingWithConnector}
        />
      )}
      {isActive && (
        <div className={styles.connected}>
          <div
            className={styles.table}
            role="table"
            aria-label="Account and Balance Table"
          >
            <div className={styles.rowgroup} role="rowgroup">
              <div role="row">
                <span role="columnheader">Account</span>
                <span role="columnheader">Balance</span>
              </div>
            </div>
            <div className={styles.rowgroup} role="rowgroup">
              {(accounts || []).map((account, index) => (
                <div key={`ACCOUNT_BALANCE_TABLLE_ROW_${index}`} role="row">
                  <span role="cell">
                    {account.slice(0, 5) + "..." + account.slice(-4)}
                  </span>
                  <span role="cell">
                    {balances?.[index]
                      ? parseFloat(formatEther(balances?.[index]._hex)).toFixed(
                          4
                        ) + ` ${chainInfo?.chain ?? "..."}`
                      : "-"}
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.footer}>
              Connected chain is [{chainId}]: {chainInfo ? chainInfo.name + ": " : ""}
            </div>
          </div>
        </div>
      )}
      <button
        className={styles.connect + " btn-primary"}
        onClick={handleWalletActionClick}
        disabled={isInteractingWithConnector}
      >
        {isInteractingWithConnector
          ? "Loading..."
          : !hasMetaMaskExtensionInstalled()
          ? "Install Metamask"
          : isActive
          ? "Disconnect"
          : "Connect Wallet"}
      </button>
    </div>
  );
}

// Can make this generic. Right now has walletModalId dependency
function ConnectWalletPortal({ children }: PropsWithChildren) {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);
  useLayoutEffect(() => {
    let node = document.getElementById(walletModalId);
    let nodeCreated = !!node;
    if (!node) {
      const e = document.createElement("div");
      e.setAttribute("id", walletModalId);
      document.body.appendChild(e);

      nodeCreated = true;
      node = e;
    }
    setPortalNode(node);
    return () => {
      if (nodeCreated && node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    };
  }, []);
  if (!portalNode) return null;

  return createPortal(children, portalNode);
}

export default function ConnectWalletModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <ConnectWalletPortal>
      <div onClick={onClose} className={styles.overlay}></div>
      <ConnectWalletComponent onClose={onClose} />
    </ConnectWalletPortal>
  );
}
