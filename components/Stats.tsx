"use client";
import { motion } from "framer-motion";

const stats = [
  { 
    number: "8+", 
    label: "Years in AI & ML",
    description: "Deep expertise in cutting-edge AI technologies" 
  },
  { 
    number: "30+", 
    label: "Projects Delivered",
    description: "From startups to Fortune 500 companies" 
  },
  { 
    number: "12+", 
    label: "Research Publications",
    description: "Contributing to AI advancement" 
  },
  { 
    number: "100%", 
    label: "Client Success Rate",
    description: "Delivering results that matter" 
  },
];

export function Stats() {
  return (
    <div className="py-20 mx-auto max-w-7xl px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white relative z-10">
        Impact Through Innovation
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center justify-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-sm md:text-base font-semibold text-white mt-2">
              {stat.label}
            </div>
            <div className="text-xs text-neutral-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 