"use client";

import React from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import SessionButtons from "../../authcomp/sessionButtons/SessionButton";


export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/members", label: "Members" },
  ];
  

interface NavLinksProps {
  onLinkClick?: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="flex flex-col sm:flex-row sm:space-x-4"
  >
    {navLinks.map((link) => (
      <NavLink
        key={link.href}
        href={link.href}
        label={link.label}
        onClick={onLinkClick}
        variants={itemVariants}
      />
    ))}
    <motion.div variants={itemVariants}>
      <SessionButtons />
    </motion.div>
  </motion.div>
);

export default NavLinks;
