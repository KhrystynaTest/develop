import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const menuItems = [
    {
        text: 'Profile',
        icon: <BadgeOutlinedIcon />,
        path: 'user-info',
    },
    {
        text: 'Users',
        icon: <GroupOutlinedIcon />,
        path: 'users',
    },
    {
        text: 'Tasks',
        icon: <ListAltOutlinedIcon />,
        path: 'tasks',
    },
];
