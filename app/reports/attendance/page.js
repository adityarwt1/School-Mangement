
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AttendanceReports = () => {
  const [selectedClass, setSelectedClass] = useState(1);

  const attendanceData = {
    1: [
      { name: "Aarav Sharma", status: "Present" },
      { name: "Ishita Verma", status: "Absent" },
    ],
    2: [
      { name: "Rohan Singh", status: "Present" },
      { name: "Meera Nair", status: "Present" },
    ],
    // Add data for classes up to 12
  };

  return (
    <div className="min-h-screen  p-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300" >
      <motion.h1 
        className="text-4xl font-bold mb-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Attendance Reports
      </motion.h1>

      <div className="flex space-x-4 mb-6  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((classNum) => (
          <motion.button
            key={classNum}
            onClick={() => setSelectedClass(classNum)}
            className={`px-4 py-2 border-2 border-white rounded-md transition-all duration-300  ${
              selectedClass === classNum ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            Class {classNum}
          </motion.button>
        ))}
      </div>

      <Card className=" p-6 rounded-lg shadow-lg  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
        <CardContent>
          <motion.h2 
            className="text-2xl font-semibold mb-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Attendance for Class {selectedClass}
          </motion.h2>

          <table className="w-full border-collapse border border-gray-700 ">
            <thead>
              <tr className="  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">
                <th className="border border-gray-600 p-2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">Student Name</th>
                <th className="border border-gray-600 p-2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {(attendanceData[selectedClass] || []).map((student, index) => (
                <motion.tr
                  key={index} 
                  className="border border-gray-700  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="border border-gray-600 p-2  bg-gray-100 dark:bg-gray-800 text-black dark:text-white  transition-colors duration-300">{student.name}</td>
                  <td className={`border border-gray-600 p-2 ${student.status === "Present" ? "text-green-500" : "text-red-500"}`}>
                    {student.status}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceReports;
