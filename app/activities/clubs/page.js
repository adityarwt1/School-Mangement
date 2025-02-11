"use client";
import { motion } from "framer-motion";

const clubs = [
  { name: "Science Club", description: "Exploring the wonders of science with experiments and discussions." },
  { name: "Drama Club", description: "Unleash creativity through acting, storytelling, and performances." },
  { name: "Music Club", description: "A space for musicians to jam, learn, and create beautiful melodies." },
  { name: "Sports Club", description: "Encouraging fitness and teamwork through various sports activities." },
  { name: "Art Club", description: "Express creativity through painting, sketching, and crafts." }
];

const ClubsPage = () => {
  return (
    <div className="min-h-screen  p-10  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold text-center mb-10  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        School Clubs
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
        {clubs.map((club, index) => (
          <motion.div
            key={index}
            className=" p-6 rounded-lg shadow-lg border border-gray-700  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-3  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{club.name}</h2>
            <p className="  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{club.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClubsPage;
