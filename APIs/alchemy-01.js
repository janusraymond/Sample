// Github: https://github.com/alchemyplatform/alchemy-sdk-js
// Setup: npm install alchemy-sdk

//retrieve token metadata from alchemy

const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "hp9Q6DsndZpdFJk86awTqK_dhQsXt_JE", // Replace with your Alchemy API Key.
  network: Network.BASE_MAINNET, // Replace with your network.
};
const alchemy = new Alchemy(settings);

// Print token metadata of USDC
const usdcContract = "0x4c5d8A75F3762c1561D96f177694f67378705E98";
alchemy.core.getTokenMetadata(usdcContract).then(console.log);
