"use client";

import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 10 }) => (
  <motion.div variants={itemVariants}>
    <img src="/images/Full_logo.png" alt="Logo" className={`h-${size}`} />
  </motion.div>
);

export default Logo;
