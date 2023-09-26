// Import necessary modules
import React, { useEffect } from 'react';

// Define App component
function App() {
  // Using useEffect to run code after the component mounts
  useEffect(() => {
    fetch('http://localhost:3001/api/test')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  // Rendering the component
  return (
    <div className="App">
      <h1>FriendTechApp</h1>
      <h3>App.js</h3>
    </div>
  );
}

// Exporting the App component to be used in index.js
export default App;
