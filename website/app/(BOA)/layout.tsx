import React from "react";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import  AppSidebar from "@/components/shared/BOA/AppSidebar";
import { auth } from "@/auth";
import { Role } from "@prisma/client";
import RoleGate from "@/components/authcomp/RoleGate";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    return null;
  }

  return (
    <>
    <RoleGate AllowedRole={Role.ADMIN}>
      <SidebarProvider open={true}>
        <AppSidebar session={session} />
        <main className="p-5 w-full">
          <div className="p-5 pt-0">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </RoleGate>
    </>
  );
};

export default Layout;
