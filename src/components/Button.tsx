import { Box } from '@mui/material'
import React from 'react'

interface ButtonI {
    padding?: string,
    display: 'block' | 'flex' | 'inline-block' | 'none',
    onClick?: () => void,
    background: string,
    textColor: string | "#000",
    borderRadius?: string | "0px",
    text: string,
    link?: {
        where: string,
        target?: "default" | "_blank";
    },
    hoverBackground?: string,
    animation?: "grow" | "up" | "down",
    cursor?: "moz-initial" | "pointer" | "all" | "cell" | "copy",
    duration?: string | "initial",
    transition?: string | "ease" | "ease-in-out" | "ease-in",
    border: "none" | string
}

const Button = ({
    padding,
    display,
    onClick,
    background,
    text,
    link,
    hoverBackground,
    textColor,
    animation,
    cursor,
    borderRadius,
    duration,
    transition,
    border
}: ButtonI) => {
    return (
        <>
            {
                link !== null && (
                    <a href={link?.where} target={link?.target}>
                        <Box
                            display={display}
                            padding={padding}
                            onClick={onClick && onClick}
                            bgcolor={background}
                            color={textColor}
                            borderRadius={borderRadius}
                            border={border}
                            sx={{
                                transitionDuration: duration,
                                transition: transition,
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
                        onClick={onClick && onClick}
                        bgcolor={background}
                        color={textColor}
                        borderRadius={borderRadius}
                        border={border}
                        sx={{
                            transitionDuration: duration,
                            transition: transition,
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
                )
            }
        </>
    )
}

export default Button