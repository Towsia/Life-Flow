// src/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Blood Drop Logo" className="w-8 h-8" />
          <span className="text-lg font-bold">Blood Donation System</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Donors</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Requests</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">About</a></li>
        </ul>

        {/* CTA Button */}
        <button className="bg-white text-red-700 font-semibold px-4 py-2 rounded-md hover:bg-red-100 transition">
          Donate Now
        </button>
      </div>
    </nav>
  );
}

