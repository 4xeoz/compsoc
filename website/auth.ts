
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma/prisma"
import authConfig from "./auth.config"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
              token.id = user.id
              token.role = user.role
              
            }
            return token
          },
          session({ session, token }) {
            session.user.id = token.id as string
            session.user.role = token.role as string

            return session
          },
    },
    session: {
        strategy: "jwt",
    },
    ...authConfig,
})