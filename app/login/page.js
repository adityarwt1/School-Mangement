"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen  bg-white dark:text-black dark:bg-black   text-white  transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className=" p-8 rounded-xl shadow-lg w-96 bg-white dark:border-white dark:border-2 dark:text-black dark:bg-black   text-white  transition-colors duration-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold   text-center mb-4 text-black   dark:text-white  transition-colors duration-300">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4" >
          <motion.input 
            type="email" 
            placeholder="Email" 
            className="p-3 rounded-lg border-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500  dark:bg-white dark:text-black    text-white  transition-colors duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            required
          />
          <motion.input 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded-lg bg-white border-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500  dark:bg-white dark:text-black    text-white  transition-colors duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            required
          />
          <motion.button 
            type="submit" 
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
