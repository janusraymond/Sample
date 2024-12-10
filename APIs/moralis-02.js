const { EvmChain } = require('moralis/common-evm-utils');
const Moralis = require('moralis').default

async function main() {
  try {
    await Moralis.start({
      apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjM2OGFlZjYzLTAxMzQtNGRmZC1hZWYxLWY5MWRhOWQzNGUzOCIsIm9yZ0lkIjoiNDE5OTExIiwidXNlcklkIjoiNDMxODMyIiwidHlwZUlkIjoiYzY4MDhiNGMtMzZiNS00YzE4LTk4OTUtZmM0N2ZkYzk3Y2JiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzM2NTM0ODYsImV4cCI6NDg4OTQxMzQ4Nn0._qLa12XZoODjLvx1JHDbo1VtJWsZtg_NWob-Sti8D7Y'
    });

    const response = await Moralis.EvmApi.wallets.getWalletHistory({
      chain: EvmChain.BASE_SEPOLIA,
      "order": "DESC",
      "address": "0x5B1f7690904D0edD4fD71eaf83ac2AE9C215D381"
    });

    console.log(response.response.result);
    // const summaries = response.response.result.map(x => x.summary );
    // console.log('summaries', summaries)
  } catch (e) {
    console.error(e);
  }
}
main()