import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
        Welcome to Yoga Flow 🧘‍♀️
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Find peace, strength, and flexibility through guided yoga sessions.
      </p>
      <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
        Start →
      </button>
    </motion.div>
  );
}
