import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";

function onConnectionError(error: Error) {
  console.debug(`web3-react error: ${error}`);
}

export const [web3Metamask, web3MetamaskHooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions, onError: onConnectionError })
);
