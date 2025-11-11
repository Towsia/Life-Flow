// src/App.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 via-white to-red-100">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 drop-shadow-sm mb-4">
          Save Lives. Donate Blood.
        </h1>
        <p className="text-gray-700 max-w-2xl mb-8">
          Join our community of heroes who give the gift of life. Every drop
          counts — together, we make a difference.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
            Become a Donor
          </button>
          <button className="bg-white hover:bg-red-50 text-red-700 border border-red-600 font-semibold px-8 py-3 rounded-lg shadow-lg transition">
            Request Blood
          </button>
        </div>
      </section>

      {/* Information Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-red-600 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-red-700 mb-3">Become a Donor</h3>
          <p className="text-gray-600 text-sm">
            Register as a blood donor and get notified when someone needs your blood type. Help save lives in your community.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-red-600 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-red-700 mb-3">Find Donors</h3>
          <p className="text-gray-600 text-sm">
            Search for available donors by blood group, location, or urgency — instantly connect with those who can help.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-red-600 hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-red-700 mb-3">Track Donations</h3>
          <p className="text-gray-600 text-sm">
            Keep a history of all donations, view your impact, and manage future requests effortlessly.
          </p>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-red-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-3">Be the Reason for Someone’s Tomorrow</h2>
        <p className="text-red-100 mb-6">
          Your donation could save up to three lives. Join our mission today.
        </p>
        <button className="bg-white text-red-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-red-50 transition">
          Join the Cause
        </button>
      </section>

      <Footer />
    </div>
  );
}



