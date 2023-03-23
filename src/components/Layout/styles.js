import { blueGrey, green, grey, purple, teal } from '@mui/material/colors';
import { theme } from '../../theme';

export default () => ({
    toolbar: {
        ...theme.mixins.toolbar,
    },
    main: {
        background: grey[50],
    },
    root: {
        display: 'flex',
    },
    content: {
        width: 'calc(100% - 240px)',
    },
});
