import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="h-screen flex items-center justify-center px-6 md:px-16 lg:px-32 text-white"
    >
      <motion.div
        className="max-w-3xl text-center space-y-6"
        variants={aboutVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm <span className="text-cyan-400 font-semibold">Zaky Hafiedz</span>, a developer with roots in electronics and a passion for building immersive digital experiences. I began my journey in vocational high school, majoring in electronics, and gained real-world experience building 4G BTS towers in Papua. Today, I work as an IT consultant.
        </p>
        <p className="text-md md:text-lg text-gray-400 italic">
          “Today I'll work hard, for tomorrow I'll rest.” – me
        </p>
      </motion.div>
    </section>
  );
}
