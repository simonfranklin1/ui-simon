import { Box } from '@mui/material'
import React from 'react'

interface Button { 
    padding?: string, 
    display: 'flex' | 'block' | 'none', 
    onClick?: () => void, 
    style?: Object,
    text: string
}

const Button = ({ padding, display, onClick, style, text }: Button) => {
    return (
        <Box
            display={display}
            padding={padding}
            onClick={onClick ? onClick : () => {}}
            sx={style}
        >
            {text}
        </Box>
    )
}

export default Button