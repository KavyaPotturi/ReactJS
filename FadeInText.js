import React from 'react';
import { motion } from 'framer-motion';

export default function FadeInText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="text-2xl font-semibold p-4"
    >
      This text fades in smoothly!
    </motion.div>
  );
}

