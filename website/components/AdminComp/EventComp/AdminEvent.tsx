import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Event } from "@prisma/client";
import { getAllEvents } from "@/app/actions/Event";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeleteButton from "./DeleteButton";
import EventCreateForm from "./EventCreateFrom";

const AdminEvent = async () => {
  const Data = await getAllEvents();

  return (
    <div className=" flex flex-col gap-5">
      <div className="flex justify-between items-center bg-card p-5 rounded-md ">
        <h2>Events</h2>
        <Dialog>
          <DialogTrigger>
            <Button asChild variant="default">
              <p>Add Event</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <EventCreateForm />
              </DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-y-scroll h-[89vh] ">
        <EventCard EventData={Data} />
      </div>
    </div>
  );
};

export default AdminEvent;

function EventCard({ EventData }: { EventData: Event[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Title</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead></TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {EventData.map((e: Event, index: number) => (
          <TableRow key={index}>
            <TableCell>
              <img
                src={e.image ?? "/placeholder.svg"}
                alt={e.title}
                className="w-28 h-16"
              />
            </TableCell>
            <TableCell>{e.title}</TableCell>
            <TableCell>{e.location}</TableCell>
            <TableCell>
              {e.date.getHours()}:{e.date.getMinutes()}{" "}
              {e.date.getHours() >= 12 ? "PM" : "AM"}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <BsThreeDotsVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                      <DeleteButton eventid={e.id} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
