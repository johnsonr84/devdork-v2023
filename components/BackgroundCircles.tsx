import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
    >
      <div className="rounded-full border border-[#61DAFB] h-[450px] w-[450px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#DDDDDD] h-[950px] w-[950px] absolute mt-52" />
      <div className="rounded-full border border-[#DDDDDD] h-[1100px] w-[1100px] absolute mt-52" />
      <div className="rounded-full border border-[#61DAFB] opacity-20 h-[1400px] w-[1400px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#DDDDDD] h-[1700px] w-[1700px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;