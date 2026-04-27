import { motion } from 'motion/react';
import { type CSSProperties, useEffect, useRef, useState } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  threshold?: number;
  stepDuration?: number;
}

export function BlurText({
  text,
  className = '',
  delay = 0,
  threshold = 0.1,
  stepDuration = 0.35,
}: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [inView, setInView] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: '0.1em',
  };

  return (
    <p ref={ref} className={className} style={containerStyle}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : { filter: 'blur(10px)', opacity: 0, y: 50 }
          }
          transition={{
            duration: stepDuration * 2,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: delay + (i * 100) / 1000,
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
