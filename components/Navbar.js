"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef({});
  const { theme, toggleTheme } = useTheme(); // Use ThemeContext

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!Object.values(dropdownRefs.current).some(ref => ref?.contains(event.target))) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      title: "Academics",
      links: [
        { name: "Subjects", href: "/academics/subjects" },
        { name: "Time Table", href: "/academics/timetable" },
        { name: "Exams & Results", href: "/academics/exams" },
      ],
    },
    {
      title: "Administration",
      links: [
        { name: "Admin Dashboard", href: "/admin" },
        { name: "Admissions", href: "/admin/admissions" },
        { name: "Staff Management", href: "/admin/staff" },
        { name: "Fee Management", href: "/admin/fees" },
      ],
    },
    {
      title: "Activities",
      links: [
        { name: "Admission", href: "/activities/admission" },
        { name: "Events", href: "/activities/events" },
        { name: "Sports", href: "/activities/sports" },
        { name: "Clubs & Societies", href: "/activities/clubs" },
      ],
    },
    {
      title: "Reports",
      links: [
        { name: "Attendance", href: "/reports/attendance" },
        { name: "Performance", href: "/reports/performance" },
        { name: "Financial Reports", href: "/reports/finance" },
      ],
    },
    {
      title: "Hostel",
      links: [
        { name: "Hostel Details", href: "/hostel/details" },
        { name: "Hostel Rules", href: "/hostel/rules" },
        { name: "Hostel Fees", href: "/hostel/fees" },
      ],
    },
  ];

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white shadow-lg p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">School Management</h1>
        </Link>

        {/* Desktop Menu */}
        <motion.ul
          className={`hidden md:flex gap-6`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.1 }}
              ref={(el) => (dropdownRefs.current[item.title] = el)}
              onMouseEnter={() => setDropdownOpen(item.title)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded">
                {item.title} <ChevronDown size={16} />
              </button>
              <motion.ul
                className={`absolute left-0 mt-2 w-48 bg-gray-100 dark:bg-gray-900 text-black dark:text-white shadow-md rounded-md overflow-hidden transition-all duration-300 transform ${
                  dropdownOpen === item.title ? "block" : "hidden"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: dropdownOpen === item.title ? 1 : 0, y: dropdownOpen === item.title ? 0 : -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                      onClick={() => setDropdownOpen(null)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right section (Theme Toggle + Mobile Menu) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-lg flex flex-col p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                className="flex justify-between w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
                onClick={() => setDropdownOpen(dropdownOpen === item.title ? null : item.title)}
              >
                {item.title} <ChevronDown size={16} />
              </button>
              {dropdownOpen === item.title && (
                <motion.ul
                  className="bg-gray-100 dark:bg-gray-900 rounded shadow-md p-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
