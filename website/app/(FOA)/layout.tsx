import React from 'react'
import '../globals.css'
import Header from '../_components/shared/Header'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            {children}
            footer
        </>
    )
}

export default Layout