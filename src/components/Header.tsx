import React from 'react'

interface Header {
    children: React.ReactNode;
    background: string;
    fixed: boolean;
    padding: string;
}

const Header = ({ children, background, fixed, padding }: Header) => {
    return (
        <div style={{ position: fixed ? 'fixed' : '-moz-initial', top: '0', left: '0', width: '100%', padding: padding, background: background }}>
            {children}
        </div>
    )
}

export default Header