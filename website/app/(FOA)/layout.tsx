import React from 'react'
import '../globals.css'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            header
            {children}
            footer
        </>
    )
}

export default Layout