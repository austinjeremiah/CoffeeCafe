import { WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { TokenStandard } from '@hyperlane-xyz/sdk';

export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: "0xbAE7e8B4EF06a55988533836dBA2491e702Ea134",
      chainName: "arbitrumsepolia",
      connections: [
        { token: "ethereum|basesepolia|0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf" },
        { token: "ethereum|coffeechain|0x8E335f25d0e3574358D543DF2671e7364E9b9728" }
      ],
      decimals: 18,
      name: "Ether",
      standard: TokenStandard.EvmNative,  
      symbol: "ETH"
    },
    {
      addressOrDenom: "0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf",
      chainName: "basesepolia",
      connections: [
        { token: "ethereum|arbitrumsepolia|0xbAE7e8B4EF06a55988533836dBA2491e702Ea134" },
        { token: "ethereum|coffeechain|0x8E335f25d0e3574358D543DF2671e7364E9b9728" }
      ],
      decimals: 18,
      name: "Ether",
      standard: TokenStandard.EvmNative,  
      symbol: "ETH"
    },
    {
      addressOrDenom: "0x8E335f25d0e3574358D543DF2671e7364E9b9728",
      chainName: "coffeechain",
      connections: [
        { token: "ethereum|arbitrumsepolia|0xbAE7e8B4EF06a55988533836dBA2491e702Ea134" },
        { token: "ethereum|basesepolia|0x69CBf83E1009BC7A3B9150DDD271906fd0036dEf" }
      ],
      decimals: 18,
      name: "Ether",
      standard: TokenStandard.EvmNative,  
      symbol: "ETH"
    }
  ],
  options: {}
};