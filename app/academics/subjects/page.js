"use client"
import { motion } from "framer-motion";

const SubjectsPage = () => {
  const subjects = [
    "Mathematics",
    "Science",
    "History",
    "Geography",
    "English",
    "Computer Science",
  ];

  return (
    <div className=" min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg transition-colors duration-300 ">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Subjects
      </motion.h1>
      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto  "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            className=" p-6 rounded-xl shadow-lg hover:shadow-2xl  cursor-pointer bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold text-center">{subject}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SubjectsPage;
