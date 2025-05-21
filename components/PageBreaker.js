import { motion } from 'framer-motion';

export default function PageBreaker() {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full border-2 border-white/40"></div>
        </motion.div>
      </div>
    </div>
  );
} 