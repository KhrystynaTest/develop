import React from 'react';
import { css } from '@emotion/css';
import Header from '../Header';
import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import { SubjectOutlined } from '@mui/icons-material';
//import {useHistory, useLocation} from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import App from '../../App';
import { NavLink, Outlet } from 'react-router-dom';
import { menuItems } from './constants';
import Drawer from '../Drawer/Drawer';
const styles = {
    root: css`
        display: flex;
    `,
};

const Layout = ({ children }) => {
    //const histoty = useHistory()
    //const location = useHLocation()
    const theme = useTheme();
    const toolbar = theme.mixins.toolbar;
    return (
        <div className={styles.root}>
            {/*<Header />*/}

            <AppBar className={styles.appbar}>
                <Toolbar>
                    <Typography>Hello</Typography>
                </Toolbar>
            </AppBar>

            <Drawer />

            <main>
                <Box sx={toolbar}></Box>
                <Outlet />
                {/*{children}*/}
                {/*<App/>*/}
            </main>
        </div>
    );
};

export default Layout;
