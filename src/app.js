import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");   // store item for the list from input field
  const [list, setLit] = useState([]);    // create an emplty list to store list items

  const handleAdd = () => {
    if (item.trim() !== "") {
      setLit([...list, item]);           // Add new item to list using spread operator 
      setItem("");
    }
  }

  const handleClear = () => {
    setLit([]);
  }


  return (
    <div>
      <h1>Lets Do It </h1>
      <h2> Add todays tasks </h2>

      <input 
      type="text"
      value={item}
      onChange={(e) => setItem(e.target.value)}
      placeholder= "Enter Task"
      />

      <button onClick={handleAdd}> Add </button>
      <button onClick={handleClear}>Clear </button>

      <ol>
        {list.map((val, index) => (
          <li className="main" key={index}>{val}</li>
        ))}
      </ol>

      
    </div>
  );
}

export default App;
