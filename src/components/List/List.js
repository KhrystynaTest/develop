import React from 'react';
import '../../App.css';
import { List as MuiList, ListItem, ListItemButton, ListItemText } from '@mui/material';

const List = ({ list, handleDelete, handleUpdate }) => {
    return (
        <MuiList>
            {list.map((item) => {
                return (
                    <ListItem key={item.id}>
                        <ListItemText>{item.text}</ListItemText>
                        <ListItemButton onClick={() => handleDelete(item.id)}>Delete</ListItemButton>
                    </ListItem>
                );
            })}
        </MuiList>
    );
};
export default List;
