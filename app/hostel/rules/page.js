"use client"

import React from "react";
import { motion } from "framer-motion";

const HostelRules = () => {
  return (
    <motion.div 
      className="w-full h-screen flex flex-col justify-center items-center   bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hostel Rules
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-4 text-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Below are the important rules that all hostel residents must follow.
      </motion.p>
      
      <div className="w-full max-w-2xl">
        <motion.div 
          className=" p-4 rounded-lg shadow-md  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-2">General Rules</h2>
          <ul className="list-disc pl-6">
            <li>Residents must return to the hostel by 9:00 PM.</li>
            <li>Silence must be maintained after 10:00 PM.</li>
            <li>Guests are not allowed without prior permission.</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className=" p-4 rounded-lg shadow-md mt-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Prohibited Activities</h2>
          <ul className="list-disc pl-6">
            <li>Smoking and alcohol consumption are strictly prohibited.</li>
            <li>Residents must not damage hostel property.</li>
            <li>Loud music or parties are not allowed.</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className=" p-4 rounded-lg shadow-md mt-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Disciplinary Actions</h2>
          <ul className="list-disc pl-6">
            <li>Violation of rules may lead to a warning or fine.</li>
            <li>Repeated offenses may result in expulsion from the hostel.</li>
            <li>Serious misconduct will be reported to authorities.</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HostelRules;
