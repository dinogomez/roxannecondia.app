"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Logo() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        damping: 17,
      }}
    >
      <Image
        src="https://avatars.githubusercontent.com/u/196952498?v=4"
        alt={"Paul Gomez Avatar"}
        width="0"
        height="0"
        sizes="100vw"
        className="hover:animate-spin rounded-full h-12 sm:h-16 w-12 sm:w-16 mx-auto"
      />
    </motion.div>
  );
}

export default Logo;
