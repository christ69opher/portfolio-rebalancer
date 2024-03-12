require('dotenv').config();
const { ethers } = require('ethers');
const { getMarketStatus } = require('bear-guard-finance');
const { optimizeFarmingStrategies } = require('yield-maximizer');

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

async function rebalancePortfolio() {
  const marketStatus = await getMarketStatus();
  
  if (marketStatus !== 'stable') {
    console.log(`Market is ${marketStatus}, rebalancing portfolio...`);
    await optimizeFarmingStrategies();
    // Additional rebalancing logic here
  }
}

rebalancePortfolio().then(() => console.log('Portfolio rebalanced successfully.'));