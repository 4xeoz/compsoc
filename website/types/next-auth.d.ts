// types/next-auth.d.ts

import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      role: "ADMIN" | "USER" 
      name: string
      image: string
      email: string
      id: string
    } 
  }

  interface UserRole {
    role : "ADMIN" | "USER"
  }

  interface User {
    role?: "ADMIN" | "USER"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "ADMIN" | "USER"
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    role: "ADMIN" | "USER"
  }
}

// import NextAuth, { type DefaultSession } from "next-auth"

// declare module "next-auth" {
//     /**
//      * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//      */
//     interface Session {
//         user: {
//             /** The user's postal address. */
//             role: "ADMIN" | "USER"
//             /**
//              * By default, TypeScript merges new interface properties and overwrites existing ones.
//              * In this case, the default session user properties will be overwritten,
//              * with the new ones defined above. To keep the default session user properties,
//              * you need to add them back into the newly declared interface.
//              */
//         } & DefaultSession["user"]
//     }

//     // interface User {
//     //     role: "ADMIN" | "USER"
//     // }
// }



