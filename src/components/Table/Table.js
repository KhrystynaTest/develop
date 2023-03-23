import React, { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import { Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useClasses from '../../useClasses';
import styles from './styles';

const Table = ({ rows = [], cols = [], handleEdit, handleDelete, withBackground = false }) => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const { table, withBackgroundTr, actionsSection } = useClasses(styles);

    useEffect(() => {
        setColumns(cols);
    }, [cols]);

    useEffect(() => {
        setData(rows);
    }, [rows]);

    return (
        <MuiTable
            stickyHeader
            aria-label="sticky table"
            className={`${withBackground ? `${withBackgroundTr} ${table}` : table}`}
        >
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
                                          {column.format && typeof value === 'number' ? column.format(value) : value}
                                          {withActions && value === undefined && (
                                              <Box className={actionsSection}>
                                                  <span onClick={() => handleEdit(row.id)}>
                                                      <EditIcon color="primary" />
                                                  </span>
                                                  <Divider orientation="vertical" variant="middle" flexItem />
                                                  <span onClick={() => handleDelete(row.id)}>
                                                      <DeleteIcon color="primary" />
                                                  </span>
                                              </Box>
                                          )}
                                      </TableCell>
                                  );
                              })}
                          </TableRow>
                      ))
                    : []}
            </TableBody>
        </MuiTable>
    );
};

export default Table;
