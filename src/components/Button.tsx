import { Box } from '@mui/material'
import React from 'react'

interface ButtonI {
    padding?: string,
    display: 'block' | 'flex' | 'inline-block' | 'none',
    onClick?: () => void,
    background: string,
    textColor: "#000" | string,
    borderRadius?: "0px" | string,
    text: string,
    link?: {
        where?: string,
        target?: "_blank" | "_self" | "_parent" | "_top";
    },
    hoverBackground?: string,
    animation?: "grow" | "up" | "down",
    cursor?: "moz-initial" | "pointer" | "all" | "cell" | "copy",
    duration?: string | "0s",
    transition?: "moz-initial" | "ease" | "ease-in-out" | "ease-in",
    border?: string | "none"
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
                    <Box
                        display={display}
                        padding={padding}
                        onClick={onClick && onClick}
                        bgcolor={background}
                        color={textColor}
                        borderRadius={borderRadius}
                        border={border}
                        component={"a"}
                        href={link?.where}
                        target={link?.target}
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
                            transition: `${duration} ${duration}`,
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