import { Box } from '@mui/material';
import React from 'react'

interface Header {
    children?: React.ReactNode;
    background: string;
    fixed: boolean;
    padding: string;
    style?: Object;
}

const Header = ({ children, background, fixed, padding, style }: Header) => {
    return (
        <Box
            position={fixed ? 'fixed' : '-moz-initial'}
            bgcolor={background}
            padding={padding}
            sx={style}
        >
            {children}
        </Box>
    )
}

export default Header