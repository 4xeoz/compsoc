// src/components/NavLink.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  variants: any;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, variants }) => (
  <motion.div variants={variants}>
    <motion.span
      whileHover={{ scale: 1.05, color: "#D1D5DB" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="inline-block"
    >
        <Link href={href} onClick={onClick} className="text-white hover:text-gray-300">
          <h3>{label}</h3>
        </Link>
        
    </motion.span>
  </motion.div>
);

export default NavLink;
