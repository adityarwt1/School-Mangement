"use client"; // Ensures this component runs on the client side
import React from "react";
import { motion } from "framer-motion";

const HostelDetails = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300" >
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-4">Hostel Details</h1>
        <p className="text-lg mb-4">
          Welcome to the school hostel! Below are the details about the facilities,
          accommodation, and other essential information.
        </p>

        <motion.div
          className=" p-4 rounded-lg shadow-md  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Accommodation</h2>
          <p>
            We offer well-furnished rooms with necessary amenities like beds, study tables, and storage space.
          </p>
        </motion.div>

        <motion.div
          className="p-4 rounded-lg shadow-md mt-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Facilities</h2>
          <ul className="list-disc pl-6">
            <li>24/7 security and supervision</li>
            <li>Hygienic and nutritious food</li>
            <li>Common study rooms and recreational areas</li>
            <li>Medical assistance available</li>
          </ul>
        </motion.div>

        <motion.div
          className=" p-4 rounded-lg shadow-md mt-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            For any inquiries, please contact the hostel warden at{" "}
            <strong>hostel@school.com</strong> or call <strong>+123-456-7890</strong>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HostelDetails;
