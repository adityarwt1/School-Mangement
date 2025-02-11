"use client"

import React from "react";
import { motion } from "framer-motion";

const HostelFees = () => {
  return (
    <motion.div 
      className="w-full h-screen flex flex-col justify-center items-center    bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300 "
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
        Hostel Fees
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-4 text-center"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Below are the details of hostel fees and payment structure.
      </motion.p>
      
      <motion.div 
        className=" p-4 rounded-lg shadow-md w-1/2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Fee Structure</h2>
        <ul className="list-disc pl-6">
          <li>Monthly Fee: ₹5000</li>
          <li>Security Deposit: ₹10000 (Refundable)</li>
          <li>Mess Charges: ₹3000 per month</li>
        </ul>
      </motion.div>
      
      <motion.div 
        className=" p-4 rounded-lg shadow-md mt-4 w-1/2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Payment Guidelines</h2>
        <ul className="list-disc pl-6">
          <li>Fees must be paid before the 5th of every month.</li>
          <li>Late payment will incur a fine of ₹200 per day.</li>
          <li>Security deposit is refundable upon vacating the hostel.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default HostelFees;
