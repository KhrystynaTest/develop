import React, { useEffect, useState } from 'react';
import { v1 as uuid } from 'uuid';
import Title from '../components/Title';
import { fetchUsers, fetchUsersByParams, fetchDeleteUsers, fetchSearch } from '../api';

import TableInformation from '../components/TableInformation/TableInformation';
import Table from '../components/Table/Table';
import { usersColumns } from '../constants';
import { Box, InputAdornment } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import Input from '../components/Input/Input';
import useClasses from '../useClasses';
import Button from '../components/Button/Button';
import SearchIcon from '@mui/icons-material/Search';

const styles = () => ({
    userControlPanel: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const Users = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [users, setUsers] = useState('');
    const { userControlPanel } = useClasses(styles);

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
        fetchUsersByParams(page, page)
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
                arr.push(`${counter === 1 ? '?' : ''}_${key}=${obj[key]}${counter !== len ? '&' : ''}`);
                str = str + `${counter === 1 ? '?' : ''}_${key}=${obj[key]}${counter !== len ? '&' : ''}`;
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
        <>
            <Box className={userControlPanel} sx={{ mt: 3 }}>
                <Input
                    value={inputSearchValue}
                    handleChange={handleChangeSearch}
                    placeholder={'Search'}
                    adornment={{
                        icon: <SearchIcon />,
                        position: 'startAdornment',
                    }}
                />
                <Button variant="contained" startIcon={<PersonAddAltOutlinedIcon />}>
                    Add Employee
                </Button>
            </Box>

            <Table
                rows={users}
                cols={usersColumns}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                withBackground
            />

            {/*<Pagination count={Math.ceil(users.length / 5)} handleChange={handleChangePage} />*/}

            {/*<TableInformation />*/}
            {console.log(users)}
        </>
    );
};
export default Users;
