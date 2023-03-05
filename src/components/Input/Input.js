import React from 'react';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Input = ({ value, placeholder, handleChange }) => {
    return <TextField value={value} onChange={handleChange}
                      label="Standard" variant="standard"
                      placeholder={placeholder}
                      InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                          ),
                      }}
    />;
};

export default Input;
