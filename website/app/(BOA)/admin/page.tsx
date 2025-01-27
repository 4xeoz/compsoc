import React from 'react'
import { auth } from '@/auth'

const page = async () => {
    const session = await auth()
  return (
    <h2>Admin page : {JSON.stringify(session)}</h2>
  )
}

export default page