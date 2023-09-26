import React, { useState, useEffect } from 'react';

function App() {
  // State to store the items fetched from the backend
  const [items, setItems] = useState([]);

  // Function to fetch items from the backend
  const fetchItems = async () => {
    const res = await fetch('http://localhost:3001/api/items');
    const data = await res.json();
    setItems(data);
  };

  // Use useEffect to run fetchItems once when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
