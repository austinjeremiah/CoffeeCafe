import { ProtocolType } from '@hyperlane-xyz/utils';

import {
  eclipsemainnet,
  eclipsemainnetAddresses,
  ethereum,
  solanamainnet,
  solanamainnetAddresses,
  arbitrumsepolia,
  arbitrumsepoliaAddresses, 
  basesepolia,
  basesepoliaAddresses, 
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';


type Address = string;

export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  solanamainnet: {
    ...solanamainnet,
    mailbox: solanamainnetAddresses.mailbox,
    rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }]
      : solanamainnet.rpcUrls,
  },
  eclipsemainnet: {
    ...eclipsemainnet,
    mailbox: eclipsemainnetAddresses.mailbox,
  },
  
  arbitrumsepolia: {
    ...arbitrumsepolia,

    mailbox: arbitrumsepoliaAddresses?.mailbox || "0x75dC8e5F50C8221a82CA6aF64aF811caA983B65f", 
  },
  
  basesepolia: {
    ...basesepolia,

    mailbox: basesepoliaAddresses?.mailbox || "0xeA87Ae93Fa0019a82A727Ea7f6c3Bd1f288A7d8a", 
  },
  
  luksotestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 4201,
    domainId: 4201,
    name: 'luksotestnet',
    displayName: 'LUKSO Testnet',
    nativeToken: { name: 'LYXt', symbol: 'LYXt', decimals: 18 },
    rpcUrls: [
      { http: 'https://rpc.testnet.lukso.network' }, 
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
     mailbox: "0x4Eb247711497952eDe763e39E681d9c164Ffb316",
    logoURI: '/logos/luksotestnet.png',
  },  
  
  coffeechain: {
    protocol: ProtocolType.Ethereum,
    chainId: 2910,
    domainId: 2910, 
    name: 'coffeechain',
    displayName: 'Coffee Chain',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'http://13.54.168.253:8547' }],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },

    mailbox: "0x3E4a9f8b9F4E2d18f9F4E75e05655BC4F6b0aAB8", 
    logoURI: '/logos/coffeechain.png', 
  },
  
  ethereum: {
    ...ethereum,
    rpcUrls: process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL }]
      : ethereum.rpcUrls,
  },
};
