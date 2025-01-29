import { auth } from '@/auth'
import { notFound } from 'next/navigation'
import React from 'react'


interface RoleGateProps {
    children : React.ReactNode,
    AllowedRole : String
}

const RoleGate = async ({children, AllowedRole} : RoleGateProps) => {
    const session = await auth()

    if(!session?.user.role || session.user.role !== AllowedRole) return notFound();

    return (
        <div>
            {children}
        </div>
    )
}

export default RoleGate