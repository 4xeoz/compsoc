
import React from 'react'
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import { getAllMembers } from '@/app/actions/Members';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { member } from '@prisma/client';
import { BsThreeDotsVertical } from "react-icons/bs";




const AdminEvent = async () => {
    const memberData = await getAllMembers();

    return (
        <div className=" flex flex-col gap-5">
           <div className="flex justify-between items-center bg-card p-5 rounded-md ">
                <h2>Members</h2>
                <Button variant="default"><p>Add Member</p></Button>
           </div>
           <div className='overflow-y-scroll h-[89vh] '>
                <MemeberTable memberData={memberData}  />
           </div>

        </div>
    );
}

export default AdminEvent;

function MemeberTable({ memberData }: { memberData: member[] }) {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead>Name</TableHead>
            <TableHead>Postion</TableHead>
            <TableHead>year</TableHead>
            <TableHead></TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
        {memberData.map((member: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                <img
                  src={member.image ?? "/placeholder.svg"}
                  alt={member.name}
                  className="w-10 h-10"
                />
              </TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.position}</TableCell>
              <TableCell>{member.year} / {member.year + 1}</TableCell>
                <TableCell>
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <BsThreeDotsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Delete 
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
  );
};
