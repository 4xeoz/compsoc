"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { deleteEvent } from '@/app/actions/Event'

const DeleteButton = ({eventid} : {eventid : string}) => {
  return (
    <Button asChild onClick={() => deleteEvent(eventid)}>
        <p className='text-red-500'>Delete</p>
    </Button>
  )
}

export default DeleteButton