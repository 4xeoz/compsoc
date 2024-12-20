import React from 'react'
import '../globals.css'
import Header from '../_components/shared/Header'
import Footer from '../_components/shared/Footer'


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout