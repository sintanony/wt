import React, { useState } from 'react';

// Child component to display a single item
const Item = ({ name, onDelete }) => {
  return (
    <li>
      {name}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

// Parent component to display a list of items
const ItemList = ({ items, onDelete }) => {
  return (
    <div>
      <h2>List of Items:</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} onDelete={() => onDelete(index)} />
        ))}
      </ul>
    </div>
  );
};

// Main application component
const App = () => {
  // State to manage the list of items
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  // Function to add a new item to the list
  const addItem = () => {
    const newItem = `New Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  // Function to delete an item from the list
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Advanced React Application</h1>
      <button onClick={addItem}>Add New Item</button>
      <ItemList items={items} onDelete={deleteItem} />
    </div>
  );
};

export default App;
