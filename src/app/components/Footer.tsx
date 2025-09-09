"use client";
import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 relative overflow-hidden">
      {/* Top wave effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Your Company</h2>
          <p className="text-sm leading-relaxed">
            Delivering innovative solutions with trust and excellence.  
            We turn your vision into reality with creativity and professionalism.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-indigo-400 transition">Services</a></li>
            <li><a href="/projects" className="hover:text-indigo-400 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition">Web Development</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Mobile Applications</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition">Consulting</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-indigo-400" /> 
              123 Business Street, City, Country
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-indigo-400" /> 
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-indigo-400" /> 
              info@yourcompany.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
