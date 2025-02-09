"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteMember } from '@/app/actions/Members'

const DeleteButton = ({memberid} : {memberid : string}) => {
  return (
    <Button asChild onClick={() => deleteMember(memberid)}>
        <p className='text-red-500'>Delete</p>
    </Button>
  )
}

export default DeleteButton