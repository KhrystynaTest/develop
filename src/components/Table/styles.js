import {} from '@mui/material/colors';

export default () => ({
    table: {
        '& th': {
            background: 'none',
            borderBottom: 0,
        },
        '& tbody td': {
            borderBottom: 0,
        },
    },

    withBackgroundTr: {
        borderCollapse: 'separate',
        borderSpacing: '0 10px!important',
        borderTopLeftRadius: '35px 35px',

        '& tbody tr': {
            background: '#ffffff',
            // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
        },
        '& tbody td': {
            '&:first-child': {
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
            },
            '&:last-child': {
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
            },
        },
    },
    actionsSection: {
        display: 'flex',
        '& hr': {
            margin: '0 10px',
        },
        '& svg': {
            cursor: 'pointer',
        },
    },
});
