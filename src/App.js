import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const listLength = list.length;

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setList([...list, inputValue]);
    setInputValue('');
  };

  const deleteItem = (el) => {
    setList(list.filter(item => item !== el))
  };

  return (
    <div className={'App'}>
      <header>
        <p>Title</p>
      </header>
      <main>
        <div className={'list'}>
          <h1>List</h1>

          <span>Added {listLength} items</span>

          <div className={'createSection'}>
            <input onChange={changeInput} value={inputValue} placeholder='Add Item' />
            <button onClick={addItem}>Add</button>
          </div>

          <ul>
            {list.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item}</p>
                  <p onClick={() => deleteItem(item)} className={'deleteButton'}>Delete</p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
export default App;
