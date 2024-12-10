const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

async function main() {
  const apiKey = 'hp9Q6DsndZpdFJk86awTqK_dhQsXt_JE';

  const web3 = createAlchemyWeb3(
    `https://base-mainnet.g.alchemy.com/v2/${apiKey}`,
  );

  // The wallet address / token we want to query for:
  const ownerAddr = "0x6111D39C1D7DE37CbBB59D946482F4291B72C40a";
  const balances = await web3.alchemy.getTokenBalances(ownerAddr, ["0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"])

  console.log("BALANCES->");
  console.log(balances);
}
main()