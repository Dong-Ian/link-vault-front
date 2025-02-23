import React from "react";
import { motion } from "framer-motion";
import styles from "./atom.module.css";

const generateBubbles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    size: Math.random() * 150 + 50,
    x: Math.random() * 800 - 300,
    y: Math.random() * 800 - 250,
    delay: Math.random() * 1.5,
  }));

const bubbles = generateBubbles(10);

const Bubble = React.memo(({ size, x, y, delay }: (typeof bubbles)[0]) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0.6, scale: 1 }}
      animate={{
        x: [x, x * -1, x],
        y: [y, y * -1, y],
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.3, 1],
        borderRadius: [
          "40% 60% 60% 40% / 40% 50% 50% 60%",
          "50%",
          "40% 60% 60% 40% / 50% 50% 40% 60%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className={styles.bubble}
      style={{ width: size, height: size }}
    />
  );
});

const Bubbles = () => {
  return (
    <div className={styles.bubbleContainer}>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                        0 1 1 0 0  
                        0 0 0 0 0  
                        0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}
    </div>
  );
};

export default Bubbles;
