"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightSection() {
  return (
    <HeroHighlight>
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-tight text-center mx-auto">
          Crafting Intelligence with
          <Highlight className="text-black dark:text-white">
            {" "}Data & AI
          </Highlight>
        </motion.h1>
        <motion.p 
          className="text-neutral-500 dark:text-neutral-300 text-lg md:text-xl max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Turning complex data challenges into elegant AI solutions. From predictive analytics 
          to computer vision, I build systems that make AI accessible and impactful.
        </motion.p>
        <motion.div
          className="flex gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Explore My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>
      </motion.div>
    </HeroHighlight>
  );
}
