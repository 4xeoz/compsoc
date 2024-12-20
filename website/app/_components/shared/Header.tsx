import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";


const Header = () => {
  return (
    <div className=" p-5 max-w-4xl mx-auto">
      <div className=" flex justify-between">
        <div>
          <h3>logo</h3>
        </div>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
                    <HiMenuAlt3 size={36}/>
            </SheetTrigger>
            <SheetContent className="p-3 ">
                <SheetHeader>
                    <h3>Menu</h3>
                </SheetHeader>
                <SheetTitle>
                <div>
                    <Link href="/">
                      <h3>Home</h3>
                    </Link>
                    <Link href="/events">
                      <h3>Events</h3>
                    </Link>
                    <Link href="/members">
                      <h3>Members</h3>
                    </Link>
                </div>
                </SheetTitle>
            </SheetContent>
          </Sheet>
        </div>
    <div className="hidden sm:flex space-x-4">
      <Link href="/">
        <h3>Home</h3>
      </Link>
      <Link href="/events">
        <h3>Events</h3>
      </Link>
      <Link href="/members">
        <h3>Members</h3>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Header;
