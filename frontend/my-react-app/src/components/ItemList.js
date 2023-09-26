// Importing React and other necessary libraries
import React, { useState, useEffect } from 'react';

// ItemList functional component
const ItemList = () => {
  const [items, setItems] = useState([]);

  // Fetching items from our backend API
  useEffect(() => {
    console.log('Fetching items...');  // Log to indicate start of fetching
    fetch('http://localhost:3001/api/items')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // Log an error if the fetch does not return ok
          console.error(`Server responded with ${res.status}`);
        }
      })
      .then((data) => {
        console.log('Data fetched:', data);  // Log the fetched data
        setItems(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);  // Log fetch errors
      });
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
