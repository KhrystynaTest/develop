import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { blueGrey, green, grey, purple } from '@mui/material/colors';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Users from './Pages/Users';
import router from './router';
const inputGlobalStyles = (
    <GlobalStyles
        styles={{
            p: {
                color: blueGrey[600],
            },
            a: {
                textDecoration: 'none',
            },
        }}
    />
);
const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
        text: {
            // primary: green[500],
            // secondary: grey[700],
            // disabled: grey[500]
        },
        background: {
            // default: orange[300],
            //paper: grey[200]
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {inputGlobalStyles}

            {/*<BrowserRouter>*/}
            <RouterProvider router={router} />
            {/*<Layout>*/}
            {/*  /!*<App />*!/*/}
            {/*</Layout>*/}
            {/*</BrowserRouter>*/}
        </ThemeProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
