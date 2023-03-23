import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { menuItems } from '../Layout/constants';
import { NavLink } from 'react-router-dom';
import useClasses from '../../useClasses';
import styles from './styles';

const Menu = () => {
    const { root, active, nonActive, link, iconMenu } = useClasses(styles);
    return (
        <Box className={root}>
            <div>
                <Typography variant="h5">Menu</Typography>
            </div>

            <div>
                <List>
                    {menuItems.map((item) => {
                        return (
                            <ListItem
                                key={item.text}
                                button
                                //onClick={() => history.push(item.path)}
                                //className={location.pathname === item.path ? styles.active : null}
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? `${link} ${active}` : `${link} ${nonActive}`
                                    }
                                >
                                    <ListItemIcon classes={{ root: iconMenu }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </NavLink>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </Box>
    );
};

export default Menu;
