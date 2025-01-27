// // types/next-auth.d.ts

// import NextAuth from "next-auth"

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null
//       email?: string | null
//       image?: string | null
//       role?: string | null // Add the role field
//     }
//   }

//   interface User {
//     id: string
//     name?: string | null
//     email?: string | null
//     image?: string | null
//     role?: string | null // Add the role field
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     role?: string | null // Add the role field
//   }
// }

// declare module "next-auth/adapters" {
//   interface AdapterUser {
//     role?: string | null // Add the role field to AdapterUser
//   }
// }

// import NextAuth, { type DefaultSession } from "next-auth"
 
// declare module "next-auth" {
//   /**
//    * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       /** The user's postal address. */
//       id: string
//       /**
//        * By default, TypeScript merges new interface properties and overwrites existing ones.
//        * In this case, the default session user properties will be overwritten,
//        * with the new ones defined above. To keep the default session user properties,
//        * you need to add them back into the newly declared interface.
//        */
//     } & DefaultSession["user"]
//   }
// }

