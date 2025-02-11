"use client"
import React from 'react'
import { motion } from "framer-motion"; // Import Framer Motion
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white bg-black " >
            <Image
                src="/images/bgimage.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full opacity-30 border-white"
            />
            <div className="relative z-10">
                <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Empower Your School Management
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg text-gray-300"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05 }} 
                >
                    Manage academics, administration, activities, and reports efficiently with our modern school management system.
                </motion.p>
                <div className="mt-6 flex space-x-4 justify-center">
                    <motion.button
                        className="py-2 px-6 rounded-lg dark:bg-white dark:text-black bg-black text-white transition-colors duration-300 border-white"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#505050" }}
                    >
                        <Link href="/login">Login</Link>
                    </motion.button>
                    <motion.button
                        className="py-2 px-6 rounded-lg dark:bg-white dark:text-black bg-black text-white transition-colors duration-300 border-white"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#505050" }}
                    >
                        <Link href="/sign-up">Sign Up</Link>
                    </motion.button>
                    <motion.button
                        className="py-2 px-6 rounded-lg hover:bg-gray-300 dark:bg-white dark:text-black bg-black text-white transition-colors duration-300 border-white"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#e0e0e0" }}
                    >
                        <Link href="/admin">Get Started</Link> 
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default Hero;
