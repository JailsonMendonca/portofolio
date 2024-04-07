
"use client"
import React from 'react';
import { delay, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface PropsSkllis {
  src: string,
  width: number,
  height: number,
  index: number,
}

export default function IconSkill({ src, width, height, index }: PropsSkllis) {
  const { ref, inView} = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {opacity: 1}
  }

  const animationDleay = 0.3;
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{delay: index * animationDleay}}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skills-icon'
      />
    </motion.div>
  )
}
