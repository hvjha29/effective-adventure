"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link className="text-2xl font-display font-bold text-primary tracking-tight" href="/">ATA.</Link>
          <div className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-widest">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="hover:text-primary transition-colors" href="#journals">Journals</Link>
            <Link className="hover:text-primary transition-colors" href="#itineraries">Itineraries</Link>
            <Link className="hover:text-primary transition-colors" href="/#itineraries">Trips</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors" onClick={toggleDarkMode}>
            <span className="material-icons-outlined text-stone-600 dark:text-stone-400">dark_mode</span>
          </button>
          <a className="hidden sm:block px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity" href="#">
            Follow My Journey
          </a>
        </div>
      </div>
    </nav>
  );
}
