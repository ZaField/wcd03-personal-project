import { motion, AnimatePresence } from "framer-motion";

interface SkillItemProps {
  skill: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, description, isActive, onClick }) => {
  return (
    <div className="relative">
      <motion.span
        className="bg-blue-200 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow cursor-pointer"
        onClick={onClick}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        {skill}
      </motion.span>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black p-3 text-xs rounded shadow-lg w-48 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillItem;
