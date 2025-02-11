"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiUsers, FiDollarSign, FiUserCheck } from "react-icons/fi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSpring, animated } from "react-spring";
import { useTheme } from "@/context/ThemeContext";

const AdminDashboard = () => {
  const [data] = useState({
    totalFees: 1000000,
    depositedFees: 750000,
    totalStudents: 500,
    studentsPresent: 450,
    totalStaff: 50,
    staffPresent: 45,
  });

  useEffect(() => {
    // Fetch data dynamically from API (Placeholder for now)
    // fetch('/api/admin-dashboard').then(res => res.json()).then(setData);
  }, []);

  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const stats = [
    { title: "Total Fees", value: (data.depositedFees / data.totalFees) * 100, icon: <FiDollarSign size={24} />, color: "#4F46E5" },
    { title: "Students Present", value: (data.studentsPresent / data.totalStudents) * 100, icon: <FiUsers size={24} />, color: "#22C55E" },
    { title: "Staff Present", value: (data.staffPresent / data.totalStaff) * 100, icon: <FiUserCheck size={24} />, color: "#EAB308" },
  ];

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <StatCard key={index} item={item} isDarkMode={isDarkMode} />
        ))}
      </div>

      <motion.div 
        className={`mt-10 p-6 rounded-lg transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Class-Wise Performance</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={[
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
          ]}>
            <XAxis dataKey="class" stroke={isDarkMode ? "#fff" : "#000"} />
            <YAxis stroke={isDarkMode ? "#fff" : "#000"} />
            <Tooltip wrapperStyle={{ backgroundColor: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }} />
            <Bar dataKey="averageScore" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

// Move the useSpring logic inside a separate component
const StatCard = ({ item, isDarkMode }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: item.value },
    config: { duration: 1500 },
  });

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CircularProgressbar 
        value={item.value} 
        text={`${Math.round(item.value)}%`} 
        styles={buildStyles({
          textColor: `${isDarkMode ? "#fff" :"#000000" }`,
          pathColor: item.color,
          trailColor: "#333",
        })}
      />
      <div className="text-blue-500 mt-4">{item.icon}</div>
      <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
      <animated.div className="text-2xl font-bold mt-2">
        {number.to((n) => `${Math.round(n)}%`)}
      </animated.div>
    </motion.div>
  );
};

export default AdminDashboard;
