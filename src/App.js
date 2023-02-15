import React, { useEffect, useState } from "react";
import { v1 as uuid } from "uuid";
//import './App.scss';
import Title from "./components/Title";
import Header from "./components/Header";
import List from "./components/List/List";
import {
  fetchDeleteTodo,
  fetchTodos,
  fetchAddTodo,
  fetchUpdateTodo,
  fetchUsers,
  fetchUser,
} from "./api";
import Card from "./components/Card/Card";
import TableInformation from "./components/TableInformation/TableInformation";
import Table from "./components/Table/Table";
import { usersColumns } from "./constants";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState("");
  const [list, setList] = useState([]);
  const listLength = list.length;

  useEffect(() => {
    fetchTodos()
      .then((res) => setList(res))
      .catch((err) => console.log(err));
    // fetchUser()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    fetchUsers()
      .then((res) => setUsers(res))
      .catch((error) => console.log("Error:", error));
  }, []);

  const changeInput = (e) => setInputValue(e.target.value);
  const handleEdit = (id) => console.log(id);
  const handleDelete = (id) => console.log(id);

  const addItem = () => {
    const id = uuid();

    fetchAddTodo({ id, text: inputValue, completed: false })
      .then(() => {
        setList([...list, { id: id, text: inputValue }]);
        setInputValue("");
      })
      .catch((err) => console.log(err));
  };

  const updateItem = (id) => {
    return fetchUpdateTodo({ id, text: inputValue, completed: false });
  };

  const deleteItem = (el) => {
    fetchDeleteTodo(el)
      .then(() => setList(list.filter((item) => item.id !== el)))
      .catch((err) => console.log(err));
  };

  const test = (obj) => {
    const len = Object.keys(obj).length;
    let counter = 0;
    const arr = [];
    let str = "";

    if (len === 0) {
      console.log(str);
      return str;
    } else {
      for (let key in obj) {
        counter++;
        arr.push(
          `${counter === 1 ? "?" : ""}_${key}=${obj[key]}${
            counter !== len ? "&" : ""
          }`
        );
        str =
          str +
          `${counter === 1 ? "?" : ""}_${key}=${obj[key]}${
            counter !== len ? "&" : ""
          }`;
      }
    }

    // console.log(str);

    return str;
  };

  return (
    <div className={"App"}>
      <Header />
      {test({})}
      <main>
        <div className={"list"}>
          <Title title={"List"} />

          <span>Added {listLength} items</span>

          <div className={"createSection"}>
            <input
              onChange={changeInput}
              value={inputValue}
              placeholder="Add Item"
            />
            <button onClick={addItem} disabled={inputValue.trim() === ""}>
              Add
            </button>
          </div>
          <List
            list={list}
            handleDelete={deleteItem}
            handleUpdate={updateItem}
          />
        </div>
        <Card />
        <Table
          rows={users}
          cols={usersColumns}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        {/*<TableInformation />*/}
      </main>
    </div>
  );
}
export default App;
