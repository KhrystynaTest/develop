export default (theme) => ({
    root: {
        width: '240px',
        position: 'relative',
    },
    active: {
        color: theme.palette.primary.main,
    },
    nonActive: {
        color: theme.palette.text.primary,
    },
    link: {
        display: 'flex',
        alignItems: 'center',
    },
    iconMenu: {
        '&.MuiListItemIcon-root': {
            color: 'inherit',
        },
    },
});
