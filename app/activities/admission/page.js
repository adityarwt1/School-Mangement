"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const AdmissionManagement = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
      <motion.div 
        className="w-full max-w-4xl p-6  rounded-lg shadow-lg  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
          <h2 className="text-2xl font-bold">Admission Management</h2>
          <motion.button 
            onClick={() => router.push("/activities/admission-form")}
            className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400   dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="text-white" size={24} />
          </motion.button>
        </div>

        {/* Dummy Data for Admission History */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">Admission History</h3>
          <div className="space-y-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
            {dummyAdmissions.map((admission, index) => (
              <motion.div 
                key={index} 
                className="p-4  rounded-lg shadow-md  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p><span className="font-bold">Name:</span> {admission.name}</p>
                <p><span className="font-bold">Role:</span> {admission.role}</p>
                <p><span className="font-bold">Date:</span> {admission.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Dummy data for admission history
const dummyAdmissions = [
  { name: "John Doe", role: "Student", date: "2025-02-01" },
  { name: "Jane Smith", role: "Teacher", date: "2025-01-28" },
  { name: "Mark Johnson", role: "Principal", date: "2025-01-20" },
];

export default AdmissionManagement;
