import { createTheme, GlobalStyles } from '@mui/material';
import { blueGrey, green, grey, purple, teal } from '@mui/material/colors';
import React from 'react';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[300],
            dark: purple[700],
            contrastText: '#ffffff',
        },
        secondary: {
            main: green[600],
            contrastText: '#000',
        },
        text: {
            primary: blueGrey[600],
            // secondary: grey[700],
            // disabled: grey[500]
        },
        background: {
            // default: orange[300],
            //paper: grey[200]
        },
    },
    typography: {
        htmlFontSize: 16, //default
        fontSize: 14, //default
    },
});

export const inputGlobalStyles = (
    <GlobalStyles
        styles={{
            p: {
                color: blueGrey[600],
                margin: 0,
            },
            a: {
                textDecoration: 'none',
            },
        }}
    />
);
