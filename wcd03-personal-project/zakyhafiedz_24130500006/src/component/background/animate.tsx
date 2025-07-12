import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

const generateStars = (count: number, totalHeight: number): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      top: Math.random() * totalHeight,
      left: Math.random() * window.innerWidth,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    });
  }
  return stars;
};

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const update = () => {
      scrollContainerRef.current = document.querySelector("#scroll-container");
      if (scrollContainerRef.current) {
        const height = scrollContainerRef.current.scrollHeight - window.innerHeight;
        setScrollHeight(height);
        const totalHeight = height + window.innerHeight;
        setStars(generateStars(800, totalHeight));
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, scrollHeight], [0, -scrollHeight]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ y }}
    >
      {/* Background Image */}
      <img
        src="/background.jpg"
        alt="Starfield"
        className="w-full object-cover absolute inset-0"
        style={{ height: scrollHeight + window.innerHeight }}
      />

      {/* Parallax Stars across full scroll height */}
      <div className="absolute inset-0" style={{ height: scrollHeight + window.innerHeight }}>
        {stars.map((star, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: star.delay,
            }}
            style={{
              position: "absolute",
              top: `${star.top}px`,
              left: `${star.left}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "9999px",
              backgroundColor: "white",
              opacity: 1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ParallaxBackground;
