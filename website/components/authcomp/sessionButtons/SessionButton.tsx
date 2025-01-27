'use client';
import { useSession } from "next-auth/react"
import { SignInButton, SignOutButton } from "./GoogleAuthButton";

export default function SessionButtons() {
    const { data: session, status } = useSession();

    if (session?.user) {
        return <SignOutButton />;
    } else {
        return <SignInButton />;
    }
}
