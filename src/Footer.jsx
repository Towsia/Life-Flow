// src/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="font-bold text-lg mb-3">About Us</h4>
          <p className="text-sm text-red-100">
            We connect donors with those in urgent need of blood. Together, we build healthier communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm text-red-100">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Become a Donor</a></li>
            <li><a href="#" className="hover:text-white">Request Blood</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-sm text-red-100">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="bg-red-900 text-center text-sm py-4 text-red-200">
        © {new Date().getFullYear()} Blood Donation Management System — All Rights Reserved
      </div>
    </footer>
  );
}
