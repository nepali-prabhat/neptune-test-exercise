import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

import { Connection } from "./types";

function onConnectionError(error: Error) {
  console.debug(`web3-react error: ${error}`);
}

export function hasMetaMaskExtensionInstalled(): boolean {
  return window.ethereum?.isMetaMask ?? false;
}

export const METAMASK_URL = "https://metamask.io/";

export function buildInjectedConnector() {
  const [web3MetamaskWallet, web3MetamaskWalletHooks] =
    initializeConnector<MetaMask>(
      (actions) => new MetaMask({ actions, onError: onConnectionError })
    );
  const injectedConnection: Connection = [
    web3MetamaskWallet,
    web3MetamaskWalletHooks,
  ];

  return injectedConnection;
}
