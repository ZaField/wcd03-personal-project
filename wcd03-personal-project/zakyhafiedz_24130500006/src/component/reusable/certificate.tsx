import { motion } from "framer-motion";

interface CertProps {
  cert: {
    title: string;
    image: string;
    issuer: string;
  };
}

const CertCard: React.FC<CertProps> = ({ cert }) => {
  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{cert.title}</h3>
      <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
    </motion.div>
  );
};

export default CertCard;
