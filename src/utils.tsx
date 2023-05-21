import { BigNumber } from "ethers";
import { ChainListDTO } from "./chainListDTO";
import { formatEther } from "ethers/lib/utils";

export const METAMASK_URL = "https://metamask.io/";
export function hasMetaMaskExtensionInstalled(): boolean {
  return window.ethereum?.isMetaMask ?? false;
}
export function shortenAddress(address: string) {
  return address.slice(0, 5) + "..." + address.slice(-4);
}

export function formatBalance(
  balance: BigNumber | undefined,
  chainInfo: ChainListDTO | undefined,
  options?: { chainFallback?: string }
) {
  if (!balance) {
    return "";
  }
  const balanceValue = parseFloat(formatEther(balance._hex)).toFixed(4);
  let chain = chainInfo?.chain ?? options?.chainFallback ?? "";
  if (chain) {
    chain = " " + chain;
  }
  return balanceValue + chain;
}
