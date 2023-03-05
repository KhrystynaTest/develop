import React from 'react';
//import styles from "./card.module.css";
import Table from '../Table/Table';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { basicUserInfo } from '../../constants';
import TableRow from '../TableRow/TableRow';
import { useTheme } from '@mui/material/styles';
import { styles } from './styles';
import { css } from '@emotion/css';
const information = {
    id: 'name',
    name: 'Chelsey',
    lastName: 'Dietrich',
    city: 'Kyiv',
    country: 'Ukraine',
};

const Card = () => {
    return (
        <Box boxShadow={3} p={3} className={css(styles.card)}>
            <div>
                <div className={css(styles.avatarBlock)}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="Avatar"
                        style={{ width: '100%' }}
                    />
                </div>
                <div className={css(styles.infoBlock)}>
                    <Typography variant="h6" component="p">
                        John Smith
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

            <div>
                <Typography
                    component="p"
                    color={'primary'}
                    gutterBottom
                    sx={{ mt: 2, fontWeight: 600 }}
                >
                    Basic Information
                </Typography>
                <Table cols={basicUserInfo} rows={[information]} />
                <Typography
                    component="p"
                    color={'primary'}
                    gutterBottom
                    sx={{ mt: 2, fontWeight: 600 }}
                >
                    Company (Personal) Information
                </Typography>
                <Table cols={basicUserInfo} rows={[information]} />
                <Typography
                    component="p"
                    color={'primary'}
                    gutterBottom
                    sx={{ mt: 2, fontWeight: 600 }}
                >
                    Occupation Information
                </Typography>
                <Table cols={basicUserInfo} rows={[information]} />
                {/*<TableRow obj={information}/>*/}
            </div>
        </Box>
    );
};

export default Card;
