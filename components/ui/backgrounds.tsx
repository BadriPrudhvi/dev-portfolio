"use client";
import React from "react";

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20">{children}</div>
    </div>
  );
}

export function GradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse" />
      <div className="relative z-10">{children}</div>
    </div>
  );
} 