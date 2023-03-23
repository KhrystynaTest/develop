import React from 'react';
import { Button as MuiButton } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import styles from './styles';
import useClasses from '../../useClasses';

const Button = ({ children, variant, ...props }) => {
    const { addButton } = useClasses(styles);
    return (
        <MuiButton className={addButton} variant={variant} {...props}>
            {children}
        </MuiButton>
    );
};

export default Button;
