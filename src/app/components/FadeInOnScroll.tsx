// app/components/FadeInOnScroll.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type FadeInOnScrollProps = {
  children: ReactNode;
  delay?: number;
};

const FadeInOnScroll = ({ children, delay = 0 }: FadeInOnScrollProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;