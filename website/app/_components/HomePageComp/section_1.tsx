'use client';
import React from 'react'
import { delay, motion } from "framer-motion";


import { IoArrowDownCircleSharp } from "react-icons/io5";


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

const section_1 = () => {
  return (
    <motion.div className='p-5 h-[80vh] flex items-center justify-center' variants={containerVariants} initial="hidden" animate="visible">
        <div className=' flex flex-col items-center justify-center relative' >
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.img src="/logo_opacity_50.png" alt="CompSoc Logo" className="w-full h-full object-contain" variants={itemVariants} />
            </div>
            <div className="text-center relative z-10 flex flex-col items-center gap-5 mt-20">
            <motion.h1 className='bg-gradient-to-br from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent headerText' variants={itemVariants}>CompSoc</motion.h1>
            <motion.h3 className='' variants={itemVariants}>University of Surrey's Technology society</motion.h3>
            <motion.div className='p-5' variants={itemVariants} >
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut"  }}>
                <IoArrowDownCircleSharp size={28} />
                </motion.div>
            </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default section_1