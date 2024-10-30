"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ContactSection() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased" id="contact">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-8">
          Let&apos;s Build Something Amazing
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-base text-center relative z-10 leading-relaxed">
          Whether you have a groundbreaking AI project in mind or need help solving 
          complex data challenges, I&apos;m here to help. Let&apos;s discuss how we can leverage 
          AI to transform your ideas into reality.
        </p>
        <div className="flex flex-col gap-4 mt-8 relative z-10">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-purple-500 w-full bg-neutral-950 placeholder:text-neutral-700 p-4"
          />
          <textarea
            placeholder="Tell me about your project"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-purple-500 w-full bg-neutral-950 placeholder:text-neutral-700 p-4 h-32"
          />
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-4 rounded-lg hover:opacity-90 transition-opacity">
            Start the Conversation
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
