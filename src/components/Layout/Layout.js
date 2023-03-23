import React from 'react';
import { Outlet } from 'react-router-dom';
import { Typography, AppBar, Toolbar, Box } from '@mui/material';
import Menu from '../Menu/Menu';

import useClasses from '../../useClasses';
import styles from './styles';

const Layout = () => {
    const { main, toolbar, content, root } = useClasses(styles);

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography>Hello</Typography>
                </Toolbar>
            </AppBar>

            <Box className={toolbar}></Box>

            <main className={main}>
                <Box className={root}>
                    <Menu />
                    <Box className={content}>
                        <Outlet />
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default Layout;
