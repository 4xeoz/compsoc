import React from 'react'
import '../globals.css'
import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout