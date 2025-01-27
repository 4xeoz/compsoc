"use client";

import { signIn, signOut } from "next-auth/react";
import { FaSignOutAlt } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
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
