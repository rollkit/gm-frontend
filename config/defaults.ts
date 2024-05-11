export const CHAIN_NAME = 'gm-rollup';

import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

import { chain } from "./chain"
import { assetlist } from "./assetlist"

export const defaultChainName = 'gm-rollup';

export const getChainAssets = (chainName: string = defaultChainName) => {
  var vals = assets.find((chain) => chain.chain_name === chainName) as AssetList;
  if (!vals) {
	  vals = assetlist;
  }
  return vals;
};

export const getCoin = (chainName: string = defaultChainName) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets.assets[0] as Asset;
};
