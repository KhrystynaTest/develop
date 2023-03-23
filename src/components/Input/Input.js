import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Input = ({ value, handleChange, adornment, ...props }) => {
    console.log(props);
    return (
        <TextField
            value={value}
            onChange={handleChange}
            //label="Standard"
            variant="standard"
            // size="small"
            InputProps={{
                [adornment.position]: <InputAdornment>{adornment.icon}</InputAdornment>,
            }}
            {...props}
        />
    );
};

export default Input;
