import { motion } from "framer-motion";
import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-gray-900 text-white p-6 rounded-xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="text-center">{children}</div>;
};
