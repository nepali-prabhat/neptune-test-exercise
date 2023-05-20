export function hasMetaMaskExtensionInstalled(): boolean {
  return window.ethereum?.isMetaMask ?? false;
}

export const METAMASK_URL = "https://metamask.io/";
