import React from "react";
import "../../App.css";

const List = ({ list, handleDelete, handleUpdate }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.text}</p>
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
