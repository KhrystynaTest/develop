import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Drawer as MuiDrawer,
} from '@mui/material';
import { menuItems } from '../Layout/constants';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/css';

const styles = {
    page: css`
        background: grey;
    `,
    paper: css`
        width: 240px;
    `,
    root: css`
        display: flex;
    `,
    active: css`
        display: flex;
    `,
    appbar: css`
        width: calc(100% - 240px) !important;
    `,
};

const Drawer = () => {
    return (
        <MuiDrawer
            classes={{ paper: styles.paper }}
            sx={{ width: '240px' }}
            variant="permanent"
            anchor="left"
        >
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
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <NavLink
                                    to={item.path}
                                    style={({ isActive }) =>
                                        isActive
                                            ? { color: 'green' }
                                            : {
                                                  textDecoration: 'none',
                                                  color: 'blue',
                                              }
                                    }
                                >
                                    <ListItemText primary={item.text} />
                                </NavLink>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </MuiDrawer>
    );
};

export default Drawer;
