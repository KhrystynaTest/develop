import React from "react";
import "../App.css";

const List = ({ list, handleDelete }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <p>{item}</p>
            <p onClick={() => handleDelete(item)} className={"deleteButton"}>
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
