import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { defaultTheme, ChainProvider } from '@cosmos-kit/react';
import { ChakraProvider } from '@chakra-ui/react';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { wallets as cosmostationWallets } from '@cosmos-kit/cosmostation';
import { wallets as leapWallets } from '@cosmos-kit/leap';

import { SignerOptions } from '@cosmos-kit/core';
import { chains, assets } from 'chain-registry';
import { chain } from "../config/chain"
import { assetlist } from "../config/assetlist"

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  const keplrAllowedWallets = [keplrWallets[0]];

  return (
    <ChakraProvider theme={defaultTheme}>
      <ChainProvider
        chains={[chain]}
        assetLists={[assetlist]}
        wallets={[...keplrAllowedWallets, ...cosmostationWallets, ...leapWallets]}
        walletConnectOptions={{
          signClient: {
            projectId: 'a8510432ebb71e6948cfd6cde54b70f7',
            relayUrl: 'wss://relay.walletconnect.org',
            metadata: {
              name: "GM World Rollup",
              description: "GM World App",
              url: "https://rollkit.dev/tutorials/gm-world-frontend",
              icons: [],
            },
          },
        }}
        endpointOptions={{
          isLazy: true
        }}
        wrappedWithChakra={true}
        signerOptions={signerOptions}
      >
        <Component {...pageProps} />
      </ChainProvider>
    </ChakraProvider>
  );
}

export default CreateCosmosApp;
