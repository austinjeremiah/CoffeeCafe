import { WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { TokenStandard } from '@hyperlane-xyz/sdk';

export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    // ETH on Arbitrum Sepolia
    {
      addressOrDenom: "0xbAE7e8B4EF06a55988533836dBA2491e702Ea134",
      chainName: "arbitrumsepolia",
      connections: [
        { token: "ethereum|basesepolia|0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf" },
        { token: "ethereum|coffeechain|0x8E335f25d0e3574358D543DF2671e7364E9b9728" },
        { token: "ethereum|luksotestnet|0xdB630944101765cfb1f6836AE7579Eee1cdBbCBC" },
        { token: "ethereum|arbitrumsepolia|0xbAE7e8B4EF06a55988533836dBA2491e702Ea134" } // Self
      ],
      decimals: 18,
      name: "Ether",
      standard: TokenStandard.EvmHypCollateral, // Use EvmHypCollateral for collateral tokens
      symbol: "ETH"
    },

    // ETH on Base Sepolia
    {
      addressOrDenom: "0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf",
      chainName: "basesepolia",
      connections: [
        { token: "ethereum|arbitrumsepolia|0xbAE7e8B4EF06a55988533836dBA2491e702Ea134" },
        { token: "ethereum|coffeechain|0x8E335f25d0e3574358D543DF2671e7364E9b9728" },
        { token: "ethereum|luksotestnet|0xdB630944101765cfb1f6836AE7579Eee1cdBbCBC" },
        { token: "ethereum|basesepolia|0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf" } // Self
      ],
      decimals: 18,
      name: "Ether",
      standard: TokenStandard.EvmHypCollateral, // Use EvmHypCollateral for collateral tokens
      symbol: "ETH"
    },

    // LYXt on LUKSO Testnet - Native token
    {
      addressOrDenom: "0xdB630944101765cfb1f6836AE7579Eee1cdBbCBC", 
      chainName: "luksotestnet",
      connections: [
        { token: "ethereum|arbitrumsepolia|0xbAE7e8B4EF06a55988533836dBA2491e702Ea134" },
        { token: "ethereum|basesepolia|0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf" },
        { token: "ethereum|coffeechain|0x8E335f25d0e3574358D543DF2671e7364E9b9728" },
        { token: "ethereum|luksotestnet|0xdB630944101765cfb1f6836AE7579Eee1cdBbCBC" } // Self
      ],
      decimals: 18,
      name: "LYXt",
      standard: TokenStandard.EvmHypNative, // Changed back to EvmHypNative which is correct for native tokens that are bridgeable
      symbol: "LYXt"
    },

    // ETH on CoffeeChain
    {
      addressOrDenom: "0x8E335f25d0e3574358D543DF2671e7364E9b9728",
      chainName: "coffeechain",
      connections: [
        { token: "ethereum|arbitrumsepolia|0xbAE7e8B4EF06a55988533836dBA2491e702Ea134" },
        { token: "ethereum|basesepolia|0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf" },
        { token: "ethereum|luksotestnet|0xdB630944101765cfb1f6836AE7579Eee1cdBbCBC" },
        { token: "ethereum|coffeechain|0x8E335f25d0e3574358D543DF2671e7364E9b9728" } // Self
      ],
      decimals: 18,
      name: "Ether",
      standard: TokenStandard.EvmHypCollateral, // Use EvmHypCollateral for collateral tokens
      symbol: "ETH"
    }
  ],
  options: {}
};