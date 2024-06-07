import React from 'react'

interface Footer {
    children: React.ReactNode;
    background: string;
    fixed: boolean;
    padding: string;
}

const Footer = ({ children, background, fixed, padding }: Footer) => {
    return (
        <div style={{ position: fixed ? 'fixed' : '-moz-initial', bottom: '0', left: '0', width: '100%', padding: padding, background: background }}>
            {children}
        </div>
    )
}

export default Footer