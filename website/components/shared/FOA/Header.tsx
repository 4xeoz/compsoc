"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../headerComp/Logo";
import NavLinks from "../headerComp/NavLinks";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Header: React.FC = () => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="p-5 m-5 flex justify-between items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <Logo />

        {/* Mobile Menu Trigger */}
        <motion.div className="sm:hidden" variants={containerVariants}>
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger>
              <HiMenuAlt3 size={36} className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-3 bg-gray-800 text-white">
              <SheetHeader>
                <h3 className="text-lg font-semibold">Menu</h3>
              </SheetHeader>
              <SheetTitle>
                <NavLinks onLinkClick={() => setOpenSheet(false)} />
              </SheetTitle>
            </SheetContent>
          </Sheet>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden sm:flex space-x-4 items-center"
          variants={containerVariants}
        >
          <NavLinks />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
