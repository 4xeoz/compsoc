import React from 'react'
import { auth } from '@/auth'

const section_1 = async () => {
  const session = await auth()

  if(!session || !session.user) return null
  else {
    return (
      <div >
          <div className='flex justify-around rounded-sm  bg-gradient-to-br from-[var(--Gradient-1)] to-[var(--Gradient-2)] p-10'>
              <div>
                <h2>WELCOME BACK, {session.user.name}</h2>
                <p>Here are some upcoming events you might be interested in:</p>
              </div>
          </div>
      </div>
    )
  }
}

export default section_1