'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  duration?: number;
}

const AnimatedCounter = ({ value, className = '', duration = 2 }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const spring = useSpring(0, {
    bounce: 0,
    duration: duration * 1000
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {display}
    </motion.div>
  );
};

export default AnimatedCounter;