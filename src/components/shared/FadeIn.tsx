import { motion } from 'motion/react';
import { type HTMLAttributes, type ReactNode } from 'react';

export function FadeIn({
  children,
  className = '',
  delay = 0,
  ...rest
}: { children: ReactNode; className?: string; delay?: number } & HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
