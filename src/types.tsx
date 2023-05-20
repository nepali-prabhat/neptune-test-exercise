import { Web3ReactHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";

export type TokenValues = { nep: string; busd: string };
export type Tokens = keyof TokenValues;
export type Connection = [Connector, Web3ReactHooks];