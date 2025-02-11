"use client"
import { motion } from "framer-motion";

const ExamsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Exams & Results
      </motion.h1>
      
      <motion.div
        className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 transition-colors duration-300 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Upcoming Exams</h2>
        <ul className="space-y-4">
          <motion.li
            className="p-4  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold">Mathematics</span> - March 10, 2025
          </motion.li>
          <motion.li
            className="p-4  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold">Science</span> - March 15, 2025
          </motion.li>
          <motion.li
            className="p-4  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold">English</span> - March 20, 2025
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ExamsPage;
