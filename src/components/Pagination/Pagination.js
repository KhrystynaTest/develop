import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

export const Pagination = ({ count, handleChange }) => {
    return <MuiPagination count={Math.ceil(count)} showFirstButton showLastButton onChange={handleChange} />;
};
