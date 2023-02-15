import React, { useState, useEffect } from "react";

const Table = ({ rows, cols, handleEdit, handleDelete }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(cols);
  }, [cols]);

  useEffect(() => {
    setData(rows);
  }, [rows]);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <td
                key={column.id}
                // align={column.align}
                //style={{ minWidth: column.minWidth }}
                onClick={() => column.handleClick(column.label)}
              >
                <b>{column.label}</b>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((row) => (
                <tr key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    const withActions = column.withActions;
                    return (
                      <td key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                        {withActions && value === undefined && (
                          <p>
                            <span onClick={() => handleEdit(row.id)}>
                              {"Edit"}
                            </span>
                            <span>{" | "}</span>
                            <span onClick={() => handleDelete(row.id)}>
                              {"Delete"}
                            </span>
                          </p>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            : []}
        </tbody>
      </table>
    </>
  );
};

export default Table;
