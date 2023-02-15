import React from "react";

const TableRow = ({ obj }) => {
  const valuesToShow = ["name", "username", "email", "city"];

  const isInArray = (array, el) => array.includes(el);

  //
  // return (
  //   <tr>
  //     {Object.entries(obj).map(([key, value], index) => {
  //       console.log(key)
  //       return isInArray(valuesToShow, key) && <td key={key}>{value}</td>;
  //     })}
  //   </tr>
  // );
  const el = [obj];
  return (
    <tr>
      {el.map((item) => {
        console.log(item);
        return <td key={item.id}>{item.name}</td>;
      })}
    </tr>
  );
};

export default TableRow;
