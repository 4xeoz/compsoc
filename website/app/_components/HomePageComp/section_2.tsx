"use client";
import React from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { useIsMobile } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useInView } from "motion/react"
import { useRef } from "react";

const images = Array.from({ length: 4 }, (_, i) => {
  return `https://picsum.photos/seed/${i + 1}/800/800`;
});

const paragraphs = [
  "We’re the official Computer Science departmental society for the University of Surrey and the University of Surrey Student’s Union.",
  "We run academic and social events on a monthly basis for coders and non-coders alike, as well as bigger events throughout the year. You can learn to code or participate in beginner, intermediate or advanced game jams (game building competitions), hackathons and more."
];

const statsData = [
  { value: 500, label: "Members" },
  { value: 20, label: "Events" },
  { value: 10, label: "Partners" }
];


function SectionText({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <div>
      <h2>{heading}</h2>
      {paragraphs.map((text, i) => (
        <p key={i} className="my-5">
          {text}
        </p>
      ))}
    </div>
  );
}


function Stats({
  data,
  headingSize,
  containerHeight,
  containerWidth
}: {
  data: { value: number; label: string }[];
  headingSize: string;      
  containerHeight: string;  
  containerWidth: string;   
}) {
  return (
    <div
      className={`flex justify-around items-center rounded-sm bg-gradient-to-br 
                  from-[var(--Gradient-1)] to-[var(--Gradient-2)]
                  ${containerHeight} ${containerWidth} mx-auto`}
    >
      {data.map((stat, idx) => (
        <React.Fragment key={stat.label}>
          {/* Add a vertical line before all items except the first */}
          {idx !== 0 && (
            <span className="bg-foreground h-16 w-1 rounded-full mx-4" />
          )}
          <div className="text-center">
            <span className={`font-bold ${headingSize}`}>+</span>
            <NumberTicker
              className={`font-bold ${headingSize} text-foreground`}
              value={stat.value}
            />
            <h3>{stat.label}</h3>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}


function MobileImages({ images }: { images: string[] }) {
  return (
    <div className="flex gap-3 max-w-lg mx-auto">
      <motion.div className="w-1/4" variants={childVariants}>
        <img src={images[0]} alt="1" className="w-full h-5/6 mt-[calc(1/3*100%)] object-cover" />
      </motion.div>
      <motion.div className="w-2/4 flex flex-col gap-3" variants={childVariants}>
        <img src={images[1]} alt="2" className="w-full h-full object-cover" />
        <img src={images[2]} alt="3" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div className="w-1/4" variants={childVariants}>
        <img src={images[3]} alt="4" className="w-full h-5/6 mt-[calc(1/3*100%)] object-cover" />
      </motion.div>
    </div>
  );
}


function DesktopImages({ images }: { images: string[] }) {
  return (
    <motion.div className="flex gap-3 max-w-lg">
      <motion.div className="w-1/6 flex justify-center flex-col" variants={childVariants}>
        <img src={images[0]} alt="1" className="w-full h-72 object-cover" />
      </motion.div>
      <motion.div className="w-3/6 flex flex-col gap-3" variants={childVariants}>
        <img src={images[1]} alt="2" className="w-full h-72 object-cover" />
        <img src={images[2]} alt="3" className="w-full h-72 object-cover" />
      </motion.div>
      <motion.div className="w-2/6 flex flex-col justify-center" variants={childVariants}>
        <img src={images[3]} alt="4" className="w-full h-96 object-cover" />
      </motion.div>
    </motion.div>
  );
}


const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };



export default function Section_2() {
    const isMobile = useIsMobile();
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: true });
    
  
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-5 relative overflow-hidden"
      >
        {isMobile ? (
          /* -------- MOBILE LAYOUT -------- */
          <div className="h-fit max-w-lg mx-auto" >
            <motion.div variants={childVariants}>
            <SectionText heading="Who are we ?" paragraphs={paragraphs}  />
            </motion.div>
            <MobileImages images={images} />
  
            <motion.div className="my-8 relative" variants={childVariants}>
              <Stats
                data={statsData}
                headingSize="text-[1.2rem]"
                containerHeight="h-32"
                containerWidth="max-w-lg"
              />
            </motion.div>
          </div>
        ) : (
          /* -------- DESKTOP LAYOUT -------- */
          <div>
            <div className="grid grid-cols-2 gap-10 z-10 relative">
              <DesktopImages images={images} />
              <motion.div className="flex flex-col justify-center" variants={childVariants}>
                <SectionText heading="Who are we ?" paragraphs={paragraphs} />
              </motion.div>
            </div>
  
            <motion.div className="z-20 relative mt-[-88px]" variants={childVariants}>
              <Stats
                data={statsData}
                headingSize="text-[2rem]"
                containerHeight="h-44"
                containerWidth="max-w-2xl"
              />
            </motion.div>
          </div>
        )}
      </motion.div>
    );
  }