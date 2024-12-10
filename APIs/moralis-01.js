const { EvmChain } = require('moralis/common-evm-utils');
const Moralis = require('moralis').default
const { MORALIS_API_KEY } = process.env;

async function main() {
  try {
    await Moralis.start({
      apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjM2OGFlZjYzLTAxMzQtNGRmZC1hZWYxLWY5MWRhOWQzNGUzOCIsIm9yZ0lkIjoiNDE5OTExIiwidXNlcklkIjoiNDMxODMyIiwidHlwZUlkIjoiYzY4MDhiNGMtMzZiNS00YzE4LTk4OTUtZmM0N2ZkYzk3Y2JiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MzM2NTM0ODYsImV4cCI6NDg4OTQxMzQ4Nn0._qLa12XZoODjLvx1JHDbo1VtJWsZtg_NWob-Sti8D7Y',
    });

    const response = await Moralis.EvmApi.token.getTokenOwners({
      chain: EvmChain.BASE,
      "order": "DESC",
      "tokenAddress": "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"
    });

    console.log(response.response.result.length);
  } catch (e) {
    console.error('err', e);
  }
}

main()