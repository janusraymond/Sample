//retrieve block information from moralis

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjM2OGFlZjYzLTAxMzQtNGRmZC1hZWYxLWY5MWRhOWQzNGUzOCIsIm9yZ0lkIjoiNDE5OTExIiwidXNlcklkIjoiNDMxODMyIiwidHlwZUlkIjoiYzY4MDhiNGMtMzZiNS00YzE4LTk4OTUtZmM0N2ZkYzk3Y2JiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzM2NTM0ODYsImV4cCI6NDg4OTQxMzQ4Nn0._qLa12XZoODjLvx1JHDbo1VtJWsZtg_NWob-Sti8D7Y",
    // ...and any other configuration
  });

  const blockNumberOrHash = "18978391";

  const chain = EvmChain.BASE_SEPOLIA;

  const response = await Moralis.EvmApi.block.getBlock({
    blockNumberOrHash,
    chain,
  });

  console.log(response.toJSON());
};

runApp();