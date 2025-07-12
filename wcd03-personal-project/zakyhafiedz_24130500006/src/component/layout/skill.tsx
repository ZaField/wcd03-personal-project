import { motion } from "framer-motion";
import { useState } from "react";
import SkillItem from "../reusable/skillitem";
import CertCard from "../reusable/certificate";

const skills = [
  { name: "Electrical", description: "Advance knowledge of electrical system and IOT." },
  { name: "TypeScript", description: "Basic knowledge for building frontend website." },
  { name: "Tailwind", description: "Basic knowledge for make CSS UI quickly." },
  { name: "SQL Server", description: "Basic knowledge for data processing and data analysis." },
  { name: "3D blender", description: "Advance knowledge of 3D Design and 3D animation using blender software." },
  { name: "Python", description: "General knowledge for sricpting and automation." },
];

const project = [
  {
    title: "Full Stack Web Dev",
    image: "./project/replacement.png",
    issuer: "Coursera",
  },
  {
    title: "React Advanced",
    image: "./project/replacement.png",
    issuer: "Udemy",
  },
];

const Skill = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="skill" className="h-screen text-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Sample Project
        </motion.h2>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill.name}
              description={skill.description}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.map((cert, index) => (
            <CertCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
