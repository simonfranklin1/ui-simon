import { Box } from '@mui/material'
import React from 'react'

interface ButtonI {
    padding?: string,
    display: 'block' | 'flex' | 'inline-block' | 'none',
    onClick?: () => void,
    background: string,
    textColor: "#000" | string,
    borderRadius?: "0px" | string,
    children: string | React.ReactNode,
    textTransform?: "lowercase" | "uppercase" | "capitalize"
    link?: {
        where?: string,
        target?: "_blank" | "_self" | "_parent" | "_top";
    },
    hoverBackground?: string,
    animation?: "grow" | "up" | "down",
    cursor?: "moz-initial" | "pointer" | "all" | "cell" | "copy",
    duration?: string | "0s",
    transition?: "moz-initial" | "ease" | "ease-in-out" | "ease-in",
    border?: string | "none",
    fontFamily?: string | ""
}

const Button = ({
    padding,
    display,
    onClick,
    background,
    children,
    link,
    hoverBackground,
    textColor,
    animation,
    cursor,
    borderRadius,
    duration,
    transition,
    border,
    textTransform,
    fontFamily
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
                            transition: transition ? `${duration} ${transition}` : "-moz-initial",
                            cursor: cursor,
                            textTransform: textTransform ? textTransform : "-moz-initial",
                            fontFamily: fontFamily ? fontFamily : "-moz-initial",
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
                        {children}
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
                        component={"button"}
                        sx={{
                            transition: transition ? `${duration} ${transition}` : "-moz-initial",
                            cursor: cursor,
                            textTransform: textTransform ? textTransform : "-moz-initial",
                            fontFamily: fontFamily ? fontFamily : "-moz-initial",
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
                        {children}
                    </Box>
                )
            }
        </>
    )
}

export default Button