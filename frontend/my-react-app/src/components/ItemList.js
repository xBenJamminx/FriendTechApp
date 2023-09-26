// Importing React and other necessary libraries
import React, { useState, useEffect } from 'react';

// ItemList functional component
const ItemList = () => {
  const [items, setItems] = useState([]);

  // Fetching items from our backend API
  useEffect(() => {
    fetch('http://localhost:3001/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
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
};

// Exporting ItemList component
export default ItemList;
