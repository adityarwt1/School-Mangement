"use client";
import { motion } from "framer-motion";

const Timetable = () => {
  const timetableData = [
    { day: "Monday", subjects: ["Math", "Science", "English", "History"] },
    { day: "Tuesday", subjects: ["Physics", "Chemistry", "Biology", "PE"] },
    { day: "Wednesday", subjects: ["Math", "Computer", "English", "Geography"] },
    { day: "Thursday", subjects: ["History", "Science", "Art", "Music"] },
    { day: "Friday", subjects: ["Math", "Physics", "Chemistry", "Sports"] },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-5">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Weekly Timetable
      </motion.h1>
      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {timetableData.map((day, index) => (
          <motion.div
            key={index}
            className="mb-4 bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-4 bg-gray-800 text-xl font-semibold">{day.day}</div>
            <ul className="p-4 space-y-2">
              {day.subjects.map((subject, i) => (
                <motion.li
                  key={i}
                  className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {subject}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timetable;
