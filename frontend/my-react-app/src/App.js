import React, { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import { fetchEtherBalance } from './blockchain';  

function App() {
  const [balance, setBalance] = useState(null);

  // Fetch Ether balance when component mounts
  useEffect(() => {
    const address = '0xA41A4b84D74E085bd463386d55c3b6dDe6aa2759';
    fetchEtherBalance(address)
      .then(setBalance)
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      {/* Display Ethereum balance */}
      <h1>Ethereum Balance: {balance} ETH</h1>  
      
      <ItemList />
    </div>
  );
}

export default App;
