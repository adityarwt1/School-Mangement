"use client";

import { motion } from "framer-motion";
import { FaFutbol, FaBasketballBall, FaTableTennis, FaRunning } from "react-icons/fa";

const sportsData = [
  { name: "Football", icon: <FaFutbol size={50} />, description: "Exciting football matches and training sessions." },
  { name: "Basketball", icon: <FaBasketballBall size={50} />, description: "Competitive basketball leagues and practice drills." },
  { name: "Table Tennis", icon: <FaTableTennis size={50} />, description: "Fast-paced table tennis games for all skill levels." },
  { name: "Athletics", icon: <FaRunning size={50} />, description: "Track and field events to boost endurance and speed." },
];

const SportsPage = () => {
  return (
    <div className="min-h-screen  p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        School Sports Activities
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 ">
        {sportsData.map((sport, index) => (
          <motion.div
            key={index}
            className=" p-6 rounded-lg shadow-lg flex flex-col items-center text-center  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className=" mb-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{sport.icon}</div>
            <h2 className="text-xl font-semibold mb-2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300 ">{sport.name}</h2>
            <p className="  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{sport.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;
