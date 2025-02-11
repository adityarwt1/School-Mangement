"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Admissions = () => {
  return (
    <div className="min-h-screen  p-8   rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold text-center mb-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admissions
      </motion.h1>
      
      <motion.p
        className="text-center  mb-8  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Apply now to join our institution and embark on a journey of knowledge and growth.
      </motion.p>

      <motion.div 
        className="max-w-3xl mx-auto  p-6 rounded-xl shadow-lg  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">Admission Process</h2>
        <ul className="list-disc list-inside  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            Fill out the online application form.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            Submit required documents.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            Attend the entrance exam (if applicable).
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            Interview with the admission panel.
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            Receive admission confirmation.
          </motion.li>
        </ul>
      </motion.div>

      <div className="flex justify-center mt-8">
        <motion.button
          className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/activities/admission-form">Apply Now</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Admissions;
