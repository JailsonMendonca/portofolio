import React from "react";
import { motion } from 'framer-motion'
interface PropsFilter {
  name: string,
  onClick: any,
  isSelected: any,
}


const Filter = ({ name, onClick, isSelected }: PropsFilter) => {
  const buttonStyles = isSelected
    ? "text-black border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-black/10";
  return (
    <motion.button
      className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-md cursor-pointer`}
      onClick={() => onClick(name)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {name}
    </motion.button>
  );
};

export default Filter;