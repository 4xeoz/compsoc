"use client";

import { signIn, signOut } from "next-auth/react";
import NavLink from "../../shared/headerComp/NavLink";



const SignInButton = () => {
    return (
        <NavLink href="" label="Sign in" onClick={() => signIn("google")} variants={null} />
    );
};

const SignOutButton = () => {
    return (
        <NavLink href="" label="Sign out" onClick={() => signOut()} variants={null} />
    );
};

export { SignInButton, SignOutButton };
