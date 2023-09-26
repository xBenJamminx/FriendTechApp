// Import Web3 library
import Web3 from 'web3';

// Initialize web3 instance with Infura
const web3 = new Web3(`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`);

// Function to fetch Ethereum balance
export const fetchEtherBalance = async (address) => {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    console.error("Error fetching balance:", error);
    return null;
  }
};

// Add more functions for blockchain interactions here
