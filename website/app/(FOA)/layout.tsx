import React from 'react'
import '../globals.css'
import Header from '../../components/shared/FOA/Header'
import Footer from '../../components/shared/FOA/Footer'


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