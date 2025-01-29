import React from 'react'
import { auth } from '@/auth'
import DashboardPage from '@/app/pages/DashboardPage'

const page = async () => {
    const session = await auth()
  return (
    <>
    <DashboardPage/>
    </>
  )
}

export default page