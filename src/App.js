import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';
import Title from './components/Title';
import { fetchUsers, fetchUsersByParams, fetchDeleteUsers, fetchSearch } from './api';

import TableInformation from './components/TableInformation/TableInformation';
import Table from './components/Table/Table';
import { usersColumns } from './constants';
import { Box, Button } from "@mui/material";
import { css } from '@emotion/css';
import Input from './components/Input/Input';

const styless = {
    root: css`
        display: flex;
    `,
    addButton: css`
        background: green;
    `,
};

function App() {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [users, setUsers] = useState('');

    useEffect(() => {
        fetchUsers()
            .then((res) => setUsers(res))
            .catch((error) => console.log('Error:', error));
    }, []);

    const handleEdit = (id) => console.log(id);
    const handleDelete = (id) => {
        return fetchDeleteUsers(id)
            .then((res) => setUsers(users.filter((item) => item.id !== id)))
            .catch((error) => console.log('Error:', error));
    };

    const handleChangePage = (e, page) => {
        console.log(e);
        console.log(page);
        fetchUsersByParams(page, 5)
            .then((res) => setUsers(res))
            .catch((error) => console.log('Error:', error));
    };

    const test = (obj) => {
        const len = Object.keys(obj).length;
        let counter = 0;
        const arr = [];
        let str = '';

        if (len === 0) {
            console.log(str);
            return str;
        } else {
            for (let key in obj) {
                counter++;
                arr.push(
                    `${counter === 1 ? '?' : ''}_${key}=${obj[key]}${counter !== len ? '&' : ''}`,
                );
                str =
                    str +
                    `${counter === 1 ? '?' : ''}_${key}=${obj[key]}${counter !== len ? '&' : ''}`;
            }
        }

        // console.log(str);

        return str;
    };

    const handleChangeSearch = (e) => {
        setInputSearchValue(e.target.value);
        fetchSearch(e.target.value.trim())
            .then((res) => setUsers(res))
            .catch((error) => console.log('Error:', error));
    };

    return (
        <div className={'App'}>
            <main>
                <Title title={'Users'} />

                <Box>

                    <Input value={inputSearchValue} handleChange={handleChangeSearch} />

                    <Button className={css(styless.addButton)}>Add employee</Button>
                </Box>
                <Table
                    rows={users}
                    cols={usersColumns}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

                {/*<Pagination count={Math.ceil(users.length / 5)} handleChange={handleChangePage} />*/}

                {/*<TableInformation />*/}
                {console.log(users)}
            </main>
        </div>
    );
}
export default App;
