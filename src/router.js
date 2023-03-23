import { Route, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';

import React from 'react';
import Layout from './components/Layout/Layout';
import UserInfo from './Pages/UserInfo';
import Tasks from './Pages/Tasks';
import Users from './Pages/Users';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/*<Route index element={<Homepage />} />*/}
            <Route path="users" element={<Users />} />
            {/*<Route path="user-info" element={<UserInfo />} />*/}
            <Route index element={<UserInfo />} />
            <Route path="tasks" element={<Tasks />} />
            {/*<Route path="tasks" element={<Projects />} />*/}
            <Route path="*" element={<div>Error</div>} />
        </Route>,
    ),
);

export default router;
