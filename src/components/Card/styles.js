export default (theme) => ({
    card: {
        display: 'flex',
        'th, td': {
            padding: 0,
        },
        th: {
            paddingBottom: '10px',
        },
    },
    informationBlock: {
        'p:not(:first-child)': {
            marginTop: theme.spacing(5),
        },
    },
    avatarBlock: {
        display: 'flex',
        width: '100px',
        margin: '0 auto 20px auto',
    },
    avatarImage: {
        width: '100%',
    },
    infoBlock: {
        textAlign: 'center',
    },
});
