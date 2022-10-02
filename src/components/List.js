import React from "react";
import "../App.css";

const List = ({ list, handleDelete }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.value}</p>
            <p onClick={() => handleDelete(item.id)} className={"deleteButton"}>
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
