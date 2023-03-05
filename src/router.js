import { Route, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';

import React from 'react';
import Users from './Pages/Users';
import Layout from './components/Layout/Layout';
import UserInfo from './Pages/UserInfo';
import Tasks from './Pages/Tasks';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {/*<Route index element={<Homepage />} />*/}
            <Route path="users" element={<Users />} />
            <Route path="user-info" element={<UserInfo />} />
            <Route path="tasks" element={<Tasks />} />
        </Route>,
    ),
);

export default router;
