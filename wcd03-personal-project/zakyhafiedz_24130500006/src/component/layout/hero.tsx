import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Hero() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 text-center"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        variants={textVariant}
        initial="hidden"
        animate={controls}
      >
        Hello, I’m <span className="text-cyan-400">Zaky Hafiedz</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl max-w-xl text-gray-300"
        variants={textVariant}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.4 }}
      >
        A Freelancer who will do anything as long as there is money.
      </motion.p>

      <motion.div
        className="mt-8"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8, duration: 0.6 },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
