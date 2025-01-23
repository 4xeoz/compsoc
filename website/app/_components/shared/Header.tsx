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
import Link from "next/link";

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

const Header = () => {
  const [openSheet, setOpenSheet] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Motion container for the entire header row */}
      <motion.div
        className="p-5 m-5 flex justify-between items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo as a motion item */}
        <motion.div variants={itemVariants}>
          <h3>logo</h3>
        </motion.div>

        {/* Mobile Nav (hamburger + drawer) as a motion item */}
        <motion.div className="sm:hidden" variants={itemVariants}>
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger>
              <HiMenuAlt3 size={36} />
            </SheetTrigger>
            <SheetContent className="p-3">
              <SheetHeader>
                <h3>Menu</h3>
              </SheetHeader>
              <SheetTitle>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      onClick={() => setOpenSheet(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/events"
                      onClick={() => setOpenSheet(false)}
                    >
                      Events
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/members"
                      onClick={() => setOpenSheet(false)}
                    >
                      Members
                    </Link>
                  </motion.div>
                </motion.div>
              </SheetTitle>
            </SheetContent>
          </Sheet>
        </motion.div>

        {/* Desktop Nav as a motion item */}
        <motion.div
          className="hidden sm:flex space-x-4"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/events">Events</Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="/members">Members</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
