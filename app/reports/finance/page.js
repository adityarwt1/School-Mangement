"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiDollarSign } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

const FinanceReports = () => {
  const { theme } = useTheme(); // Get current theme from context
  const textColor = theme === "dark" ? "#ffffff" : "#000000"; // Adjust colors based on theme
  const tooltipBgColor = theme === "dark" ? "#333" : "#f9f9f9";
  const [financeData, setFinanceData] = useState([]);

  useEffect(() => {
    // Fetch finance data dynamically (Placeholder for now)
    setFinanceData([
      { month: "Jan", revenue: 100000 },
      { month: "Feb", revenue: 120000 },
      { month: "Mar", revenue: 95000 },
      { month: "Apr", revenue: 110000 },
      { month: "May", revenue: 125000 },
      { month: "Jun", revenue: 135000 },
      { month: "Jul", revenue: 140000 },
      { month: "Aug", revenue: 130000 },
      { month: "Sep", revenue: 120000 },
      { month: "Oct", revenue: 125000 },
      { month: "Nov", revenue: 110000 },
      { month: "Dec", revenue: 145000 },
    ]);
  }, []);

  return (
    <div className="min-h-screen  p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300" >
      {/* Page Header */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Finance Reports
      </motion.h1>

      {/* Finance Chart */}
      <motion.div
        className="shadow-md p-6 rounded-lg  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FiDollarSign className="mr-2" /> Monthly Revenue
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={financeData}>
            <XAxis dataKey="month" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip wrapperStyle={{ backgroundColor: tooltipBgColor, color: textColor }} />
            <Bar dataKey="revenue" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default FinanceReports;
