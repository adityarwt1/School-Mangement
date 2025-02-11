"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const events = [
  { title: "Annual Sports Day", date: "March 10, 2025", description: "A day filled with thrilling sports activities and competitions." },
  { title: "Science Exhibition", date: "April 15, 2025", description: "Showcasing innovative projects and experiments by students." },
  { title: "Cultural Fest", date: "May 20, 2025", description: "An event celebrating diverse cultures through music, dance, and drama." },
];

const EventsPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen  p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300" >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        School Events
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className=" p-6 rounded-xl shadow-lg  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold   bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{event.title}</h2>
            <p className=" mt-2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{event.date}</p>
            <p className="mt-4   bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
