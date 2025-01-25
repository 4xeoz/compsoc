"use client";
import React from "react";
import { useIsMobile } from "@/lib/hooks"; // Adjust the path as necessary
import { motion } from "framer-motion";



interface GlowCircleProps {
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
  position?: React.CSSProperties;
}

const variants = {
  hidden: { opacity: 0},
  visible: { opacity: 1},
};

const GlowCircle: React.FC<GlowCircleProps> = ({
  size = 200,
  color = "rgba(0, 123, 255, 0.8)",
  blur = 20,
  opacity = 0.8,
  position = { top: "50%", left: "50%" },
}) => {
  const isMobile = useIsMobile(); // Determine if the screen size is mobile

  // Adjust size and blur dynamically based on whether it's mobile
  const adjustedSize = isMobile ? size / 1.5 : size;
  const adjustedBlur = isMobile ? blur / 1.5 : blur;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: adjustedSize,
        height: adjustedSize,
        backgroundColor: color,
        borderRadius: "50%",
        filter: `blur(${adjustedBlur}px)`,
        opacity: opacity,
        transform: "translate(-50%, -50%)",
        ...position,
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: "easeInOut" }}
      
    />
  );
};

export default GlowCircle;
