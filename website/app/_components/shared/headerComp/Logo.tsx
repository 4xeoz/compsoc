"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Logo: React.FC = () => (
  <motion.div variants={itemVariants}>
    <img src="/Full_logo.png" alt="Logo" className="h-10" />
  </motion.div>
);

export default Logo;
