import { Box } from '@mui/material'
import React from 'react'

interface ButtonI {
    padding?: string,
    display: 'flex' | 'block' | 'none',
    onClick?: () => void,
    background: string,
    textColor: string,
    borderRadius?: string | "0px",
    text: string,
    link?: {
        where: string,
        target?: "default" | "_blank";
    },
    hoverBackground?: string,
    animation?: "grow" | "up" | "down",
    cursor?: "default" | "pointer"
}

const Button = ({ padding, display, onClick, background, text, link, hoverBackground, textColor, animation, cursor, borderRadius }: ButtonI) => {
    return (
        <>
            {
                link !== null && (
                    <a href={link?.where} target={link?.target}>
                        <Box
                            display={display}
                            padding={padding}
                            onClick={onClick ? onClick : () => { }}
                            bgcolor={background}
                            color={textColor}
                            borderRadius={borderRadius}
                            sx={{
                                cursor: cursor,
                                "&:hover": animation === "grow" ?
                                    {
                                        scale: "1.1", background: hoverBackground || null
                                    } :
                                    animation === "up" ?
                                        {
                                            transform: "translateY(-0.25rem)",
                                            background: hoverBackground || null
                                        } :
                                        animation === "down" ? {
                                            transform: "translateY(0.25rem)",
                                            background: hoverBackground || null
                                        } : null
                            }}
                        >
                            {text}
                        </Box>
                    </a>
                ) || (
                    <Box
                        display={display}
                        padding={padding}
                        onClick={onClick ? onClick : () => { }}
                        bgcolor={background}
                        color={textColor}
                        sx={{
                            "&:hover": animation === "grow" ?
                                {
                                    scale: "1.1", background: hoverBackground || null
                                } :
                                animation === "up" ?
                                    {
                                        transform: "translateY(-0.25rem)",
                                        background: hoverBackground || null
                                    } :
                                    animation === "down" ? {
                                        transform: "translateY(0.25rem)",
                                        background: hoverBackground || null
                                    } : null
                        }}
                    >
                        {text}
                    </Box>
                )
            }
        </>
    )
}

export default Button