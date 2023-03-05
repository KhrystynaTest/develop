import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const Table = ({ rows = [], cols = [], handleEdit, handleDelete }) => {
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
            <MuiTable stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}
                                // align={column.align}
                                //style={{ minWidth: column.minWidth }}
                                onClick={() => column.handleClick(column.label)}
                            >
                                <b>{column.label}</b>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        ? data.map((row) => (
                              <TableRow key={row.id}>
                                  {columns.map((column) => {
                                      const value = row[column.id];
                                      const withActions = column.withActions;
                                      return (
                                          <TableCell key={column.id} align={column.align}>
                                              {column.format && typeof value === 'number' ? (
                                                  column.format(value)
                                              ) : (
                                                  <Typography variant="p" component="p">
                                                      {value}
                                                  </Typography>
                                              )}
                                              {withActions && value === undefined && (
                                                  <p>
                                                      <span onClick={() => handleEdit(row.id)}>
                                                          {'Edit'}
                                                      </span>
                                                      <span>{' | '}</span>
                                                      <span onClick={() => handleDelete(row.id)}>
                                                          {'Delete'}
                                                      </span>
                                                  </p>
                                              )}
                                          </TableCell>
                                      );
                                  })}
                              </TableRow>
                          ))
                        : []}
                </TableBody>
            </MuiTable>
        </>
    );
};

export default Table;
