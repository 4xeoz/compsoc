"use client";

import { usePathname } from 'next/navigation';
import { FaHome, FaCalendarAlt, FaTachometerAlt, FaPlusCircle } from 'react-icons/fa';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Logo from "../headerComp/Logo";
import { Session } from "next-auth";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: FaTachometerAlt,
  },
  {
    title: "Add Event",
    url: "/admin/event",
    icon: FaPlusCircle,
  },
  {
    title: "Add Member",
    url: "/admin/member",
    icon: FaCalendarAlt,
  },
  {
    title: "Home",
    url: "/",
    icon: FaHome,
  },

];

export function AppSidebar({ session }: { session: Session }) {
  const pathname = usePathname();

  return (
    <Sidebar className="pt-5 pl-5 pb-5 w-72" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="p-5 mt-5 mb-5">
            <Logo size={13}/>
          </SidebarGroupLabel>
          <hr className="m-5" />
          <SidebarGroupContent>
            <SidebarMenu className="p-5">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title} className="py-2">
                    <SidebarMenuButton asChild className={`rounded-full ${isActive ? 'bg-foreground text-background' : ''}`}>
                      <a href={item.url} className="flex items-center">
                        <item.icon className="mr-3" />
                        <p className='text-inherit'>{item.title}</p>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-5 flex flex-col items-center">
          <div className="text-center rounded-full bg-foreground p-1 mb-2">
            <Image src={session.user.image} alt={session.user.name} className="rounded-full" width={40} height={40} />
          </div>
          <div className="mt-3 text-center">
            <p>{session.user.name}</p>
            <p className="text-sm text-gray-400">{session.user.email}</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
