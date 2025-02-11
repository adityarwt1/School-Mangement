"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "@/context/ThemeContext";

const PerformanceReports = () => {
  const { theme } = useTheme(); // Get current theme from context

  const textColor = theme === "dark" ? "#ffffff" : "#000000"; // Adjust colors based on theme
  const tooltipBgColor = theme === "dark" ? "#333" : "#f9f9f9";
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    // Fetch performance data dynamically (Placeholder for now)
    setPerformanceData([
      { class: "1", averageScore: 85 },
      { class: "2", averageScore: 78 },
      { class: "3", averageScore: 82 },
      { class: "4", averageScore: 75 },
      { class: "5", averageScore: 88 },
      { class: "6", averageScore: 79 },
      { class: "7", averageScore: 90 },
      { class: "8", averageScore: 84 },
      { class: "9", averageScore: 80 },
      { class: "10", averageScore: 76 },
      { class: "11", averageScore: 89 },
      { class: "12", averageScore: 92 },
    ]);
  }, []);

  return (
    <div className="min-h-screen  p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
      {/* Page Header */}
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Performance Reports
      </motion.h1>

      {/* Performance Chart */}
      <motion.div 
        className="shadow-md p-6 rounded-lg  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">Class-Wise Performance</h2>
        <ResponsiveContainer width="100%" height={400} className="transition-colors duration-300">
      <BarChart data={performanceData}>
        <XAxis dataKey="class" stroke={textColor} />
        <YAxis stroke={textColor} />
        <Tooltip wrapperStyle={{ backgroundColor: tooltipBgColor, color: textColor }} />
        <Bar dataKey="averageScore" fill="#4F46E5" />
      </BarChart>
    </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default PerformanceReports;
