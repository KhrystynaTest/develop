import React from 'react';
import { Grid } from '@mui/material';

const TableRow = ({ obj }) => {
    const valuesToShow = ['name', 'username', 'email', 'city'];

    const isInArray = (array, el) => array.includes(el);

    // return (
    //   <tr>
    //     {Object.entries(obj).map(([key, value], index) => {
    //       console.log(key)
    //       return isInArray(valuesToShow, key) && <td key={key}>{value}</td>;
    //     })}
    //   </tr>
    // );

    return (
        <Grid container spacing={3}>
            {Object.entries(obj).map(([key, value], index) => {
                console.log(key);
                return (
                    isInArray(valuesToShow, key) && (
                        <Grid item xs key={key}>
                            {key}
                            {value}
                        </Grid>
                    )
                );
            })}
        </Grid>
    );
    //const el = [obj];
    // <Grid container spacing={3}>
    //   <Grid item xs>
    //     xs
    //   </Grid>
    //   <Grid item xs>
    //     xs
    //   </Grid>
    //   <Grid item xs>
    //     xs
    //   </Grid>
    //   <Grid item xs>
    //     xs
    //   </Grid>
    // </Grid>
    // return (
    //   <tr>
    //     {el.map((item) => {
    //       console.log(item);
    //       return <td key={item.id}>{item.name}</td>;
    //     })}
    //   </tr>
    // );
};

export default TableRow;
