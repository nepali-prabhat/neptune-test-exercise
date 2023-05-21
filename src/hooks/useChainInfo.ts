import { ChainListDTO } from "@/chainListDTO";
import axios from "axios";
import { useState, useEffect } from "react";

export function useChainInfo(chainId?: number) {
  const [chainInfo, setChainInfo] = useState<ChainListDTO | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let stale = false;
    console.log("chain id changed", chainId);
    if (chainId) {
      setIsLoading(true);
      // TODO: change how we get chains info
      axios
        .get("https://chainid.network/chains.json")
        .then((response) => {
          if (!stale) {
            const data = response.data as ChainListDTO[];
            setChainInfo(data.find((c) => c.chainId === chainId));
            setIsLoading(false);
          }
        })
        .catch((e) => {
          // TODO: gracefully handle Error
          console.debug("chain info error: ", e);
          setIsError(true);
          setIsLoading(false);
        });
    }
    return () => {
      stale = true;
      setChainInfo(undefined);
      setIsLoading(false);
      setIsError(false);
    };
  }, [chainId]);
  return { data: chainInfo, isLoading, isError };
}
