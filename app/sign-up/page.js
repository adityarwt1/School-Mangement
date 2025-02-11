"use client";

import React from "react";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-950 text-white">
      <motion.div 
        className="w-full max-w-md p-8 space-y-6 dark:bg-gray-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-cente text-black dark:text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sign Up
        </motion.h2>

        <form className="space-y-4">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="mb-1 dark:text-white text-black">Select Role</label>
            <select 
              className="p-2 rounded text-black dark:text-white dark:bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose your role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="principal">Principal</option>
            </select>
          </motion.div>

          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="mb-1 dark:text-white text-black">Full Name</label>
            <input 
              type="text" 
              className="p-2 rounded  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white dark:bg-gray-800"
              placeholder="Enter your name"
              required
            />
          </motion.div>

          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="mb-1 dark:text-white text-black">Email</label>
            <input 
              type="email" 
              className="p-2 rounded  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white dark:bg-gray-800"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="mb-1 dark:text-white text-black">Password</label>
            <input 
              type="password" 
              className="p-2 rounded  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white dark:bg-gray-800"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          <motion.button 
            type="submit" 
            className="w-full p-2 mt-4 font-semibold text-center text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp; 