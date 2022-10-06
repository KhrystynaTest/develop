import React from "react";
import "./List.css";

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
