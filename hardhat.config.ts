import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks:{
    apechain:{
      url: "https://curtis.rpc.caldera.xyz/http",
      accounts: [process.env.PRIVATE_KEY!],

    }
  }
};

export default config;
