import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { basicUserInfo } from './constants';
import TableRow from '../TableRow/TableRow';

import styles from './styles';

import useClasses from '../../useClasses';
import { fetchUser } from '../../api';

const Card = () => {
    const [user, setUser] = useState('');
    const { card, avatarBlock, infoBlock, avatarImage, informationBlock } = useClasses(styles);

    useEffect(() => {
        fetchUser(1)
            .then((res) => setUser(res))
            .catch((error) => console.log('Error:', error));
    }, []);
    console.log(user);
    return (
        <Box boxShadow={3} p={3} className={card}>
            <div>
                <div className={avatarBlock}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="Avatar"
                        className={avatarImage}
                    />
                </div>
                <div className={infoBlock}>
                    <Typography variant="h6" component="p">
                        <b>John Smith</b>
                    </Typography>
                    <Typography component="p">Architect & Engineer</Typography>
                    <Typography component="p">Project: App Profile</Typography>

                    <Typography component="p">email@gmail.com</Typography>
                    {/*<Typography component="p" color={"grey"}>*/}
                    {/*  304 Oak | Ferandale | Randburg*/}
                    {/*</Typography>*/}
                    <Typography component="p">Active since 01.05.2021</Typography>
                </div>
            </div>

            <Divider orientation="vertical" flexItem sx={{ mx: 3 }} />

            <div className={informationBlock}>
                <Typography component="p" color={'primary'} gutterBottom sx={{fontWeight: 600 }}>
                    Basic Information
                </Typography>
                <Table cols={basicUserInfo} rows={[user]} />
                <Typography component="p" color={'primary'} gutterBottom sx={{fontWeight: 600 }}>
                    Company (Personal) Information
                </Typography>
                <Table cols={basicUserInfo} rows={[user]} />
                <Typography component="p" color={'primary'} gutterBottom sx={{fontWeight: 600 }}>
                    Occupation Information
                </Typography>
                <Table cols={basicUserInfo} rows={[user]} />
                {/*<TableRow obj={information}/>*/}
            </div>
        </Box>
    );
};

export default Card;
