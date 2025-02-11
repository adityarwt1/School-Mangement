"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const staffData = [
  { name: "John Doe", position: "Principal", email: "john@example.com" },
  { name: "Jane Smith", position: "Vice Principal", email: "jane@example.com" },
  { name: "Alice Johnson", position: "Math Teacher", email: "alice@example.com" },
  { name: "Bob Williams", position: "Science Teacher", email: "bob@example.com" },
];

const AdminStaff = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  return (
    <div className="min-h-screen  p-8  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin Staff
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto p-4  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {staffData.map((staff, index) => (
          <motion.div
            key={index}
            className=" p-6 rounded-xl shadow-lg cursor-pointer   bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedStaff(staff)}
          >
            <h2 className="text-xl font-semibold">{staff.name}</h2>
            <p className="text-gray-400">{staff.position}</p>
            <p className="text-gray-500">{staff.email}</p>
          </motion.div>
        ))}
      </motion.div>

      {selectedStaff && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm  p-4  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedStaff(null)}
        >
          <motion.div
            className=" p-6 rounded-xl shadow-lg max-w-sm text-center  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-2xl font-bold">{selectedStaff.name}</h2>
            <p className="text-gray-400">{selectedStaff.position}</p>
            <p className="text-gray-500">{selectedStaff.email}</p>
            <button
              className="mt-4 px-4 py-2  rounded-lg hover:bg-gray-600 p-4   shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
              onClick={() => setSelectedStaff(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      <div className="text-center mt-8 p-4  rounded- bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300 ">
        <Link href='/admin'className="p-4  rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">Back to Admin</Link>
      </div>
    </div>
  );
};

export default AdminStaff;
