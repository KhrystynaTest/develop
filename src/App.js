import React, { useState } from "react";
import { v1 as uuid } from 'uuid';
import "./App.css";
import Title from "./components/Title";
import Header from "./components/Header";
import List from "./components/List/List";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const listLength = list.length;

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    // if (inputValue.trim() === '') return

    //setList([...list, inputValue]);
    setList([...list, {id: uuid(), value: inputValue}]);
    setInputValue("");
  };

  const deleteItem = (el) => {
    setList(list.filter((item) => item.id !== el));
  };

  return (
    <div className={"App"}>
      <Header />
      <main>
        <div className={"list"}>
          <Title title={"List"} />
          <Title title={"Some text"} />

          <span>Added {listLength} items</span>

          <div className={"createSection"}>
            <input
              onChange={changeInput}
              value={inputValue}
              placeholder="Add Item"
            />
            <button onClick={addItem} disabled={inputValue.trim() === ""} className={`${inputValue.trim() === "" ? 'sendButton disabled' : 'sendButton' }`}>
              Add
            </button>
          </div>
          <List list={list} handleDelete={deleteItem} />
        </div>
      </main>
    </div>
  );
}
export default App;
