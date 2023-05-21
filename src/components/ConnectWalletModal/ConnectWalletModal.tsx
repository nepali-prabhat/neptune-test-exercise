import { MouseEventHandler, PropsWithChildren, useEffect, useRef } from "react";
import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./connectWalletModal.module.css";
import { XIcon } from "../Icons/XIcon";
import { NoWalletIcon } from "../Icons/NoWalletIcon";
import { walletModalId } from "@/constants";
import {
  METAMASK_URL,
  formatBalance,
  hasMetaMaskExtensionInstalled,
  shortenAddress,
} from "@/utils";
import { web3Metamask, web3MetamaskHooks } from "@/connector";
import { useBalance } from "@/hooks/useBalances";
import { formatEther } from "ethers/lib/utils";
import { useChainInfo } from "@/hooks/useChainInfo";
import { LegacyRef } from "react";
import CopyIcon from "../Icons/CopyIcon";
import CheckIcon from "../Icons/CheckIcon";

function WalletDisconnectedUI() {
  return (
    <div className={styles.disconnected}>
      <NoWalletIcon />
      <p>Wallet is not connected.</p>
    </div>
  );
}

function CopyButton(props: { account: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    if (copied) {
      const id = setTimeout(() => {
        setCopied(false);
      }, 5000);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = id;
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [copied]);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(props.account);
    setCopied(true);
  };
  return (
    <button
      className={styles.copyBtn}
      onClick={handleCopyClick}
      aria-label="Copy button"
      data-copied={copied}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function WalletInfoUI() {
  const chainId = web3MetamaskHooks.useChainId();
  const account = web3MetamaskHooks.useAccount();
  const provider = web3MetamaskHooks.useProvider();
  const balance = useBalance(provider, account);
  const chainInfo = useChainInfo(chainId);

  const [accountDisplay, setAccountDisplay] = useState<string>();
  useEffect(() => {
    setAccountDisplay(account ? shortenAddress(account) : undefined);
  }, [account]);

  return (
    <div className={styles.connected}>
      <div
        className={styles.table}
        role="table"
        aria-label="Account and Balance Table"
      >
        <div className={styles.rowgroup} role="rowgroup">
          <div role="row">
            <span role="columnheader">KEY</span>
            <span role="columnheader">VALUE</span>
          </div>
        </div>
        <div className={styles.rowgroup} role="rowgroup">
          <div role="row">
            <span title="abd" role="cell">
              Account:
            </span>
            <span className={styles.copySpan} title={account} role="cell">
              {account && <CopyButton account={account} />}
              <span>{accountDisplay}</span>
            </span>
          </div>
        </div>
        <div className={styles.rowgroup} role="rowgroup">
          <div role="row">
            <span role="cell">Balance:</span>
            <span role="cell">
              {formatBalance(balance, chainInfo.data, {
                chainFallback: chainInfo.isLoading ? "..." : "",
              })||"-"}
            </span>
          </div>
        </div>
        <div className={styles.rowgroup} role="rowgroup">
          <div role="row">
            <span role="cell">Chain:</span>
            <span role="cell">
              {chainInfo.isError
                ? chainId
                : chainInfo.isLoading
                ? `${chainId} ...`
                : chainInfo.data
                ? `${chainInfo.data.name} [${chainId}]`
                : chainId}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectWalletComponent({ onClose }: { onClose: () => void }) {
  const isActive = web3MetamaskHooks.useIsActive();
  const [isInteractingWithConnector, setIsInteractingWithConnector] =
    useState(false);

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const actionBtnRef = useRef<HTMLButtonElement>(null);

  // store value of is active in first render
  // ... used to focus buttons on modal enter
  const isActiveValue = useRef<boolean>();
  if (isActiveValue.current === undefined) {
    isActiveValue.current = isActive;
  }

  useEffect(() => {
    if (isActiveValue.current) {
      closeBtnRef.current?.focus();
    } else {
      actionBtnRef.current?.focus();
    }
  }, []);

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
        alert(
          `TODO: gracefully handle error. \nError message: ${e.message}(${e.code})`
        );
      }
      console.debug(e);
    }
    setIsInteractingWithConnector(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="walletDialogueTitle"
      className={styles.card}
    >
      <div>
        <h3 id="walletDialogueTitle">Wallet Details</h3>
        <button
          className={styles.closeButton + " center"}
          onClick={onClose}
          aria-label="Close Modal"
          ref={closeBtnRef}
        >
          <XIcon />
        </button>
      </div>
      {!isActive && <WalletDisconnectedUI />}
      {isActive && <WalletInfoUI />}
      <button
        className={styles.connect + " btn-primary"}
        onClick={handleWalletActionClick}
        disabled={isInteractingWithConnector}
        ref={actionBtnRef}
      >
        {isInteractingWithConnector
          ? "Connecting..."
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

  if (!isOpen) return null;

  return (
    <ConnectWalletPortal>
      <div onClick={onClose} className={styles.overlay}></div>
      <ConnectWalletComponent onClose={onClose} />
    </ConnectWalletPortal>
  );
}
