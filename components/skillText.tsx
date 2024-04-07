"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface PropsCardProjects {
  children: React.ReactNode;
}

export default function SkillText({ children }: PropsCardProjects) {
  return (
   <div className='w-full h-auto flex flex-col items-center justify-center'>
    <motion.div
     initial={{ opacity: 0, scale: 0 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{
      type: "tween",
      duration: 0.2,
     }}
     className="Welcome-box py-[4px] px-[7px] border rounded-full border-black/10 opacity-[0.9]"
    >
     <motion.h1 initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="Welcome-text text-[20px] p-1">
          {children}
     </motion.h1>
    </motion.div>

   </div>
  )
}
