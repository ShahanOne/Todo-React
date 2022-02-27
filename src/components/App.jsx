import React, { useState } from "react";
import ListItems from "./ListItems";

function App() {
  const [listItem, SetList] = useState([]);
  const [inputText, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target.firstChild;

    SetList([...listItem, value]);
    setInput("");
    event.preventDefault();
  }
  function handleInput(e) {
    const inpValue = e.target.value;
    setInput(inpValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={handleChange}>
          <input
            name="listInput"
            type="text"
            onChange={handleInput}
            value={inputText}
          />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {listItem.map((name) => {
            return <ListItems itemName={name} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
