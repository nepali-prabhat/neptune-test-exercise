import { ChainListDTO } from "@/chainListDTO";
import axios from "axios";
import { useState, useEffect } from "react";

export function useChainInfo(chainId?: number) {
  const [chainInfo, setChainInfo] = useState<ChainListDTO | undefined>();

  useEffect(() => {
    let stale = false;
    if (chainId) {
      axios.get("https://chainid.network/chains.json").then((response) => {
        if (!stale) {
          const data = response.data as ChainListDTO[];
          setChainInfo(data.find((c) => c.chainId === chainId));
        }
      });
    }
    return () => {
      stale = true;
      setChainInfo(undefined);
    };
  }, [chainId]);
  return chainInfo;
}
