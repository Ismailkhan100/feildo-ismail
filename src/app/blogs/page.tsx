"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FielduoBlog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Field Service Operations",
      date: "9/3/2025",
      readTime: "4 min read",
      image: "/ai-revolution.jpg", // You would replace with actual images
      excerpt: "The field service industry is experiencing a technological renaissance. From HVAC technicians to telecommunications engineers, field service professionals are witnessing firsthand how artificial intelligence is transforming their daily operations, improving efficiency, and enhancing customer satisfaction. This revolution isn't just about fancy gadgets—it's about fundamentally reimagining how field service work gets done.",
      category: "Technology"
    },
    {
      id: 2,
      title: "The Impact of IoT on Predictive Maintenance in Field Services",
      date: "9/2/2025",
      readTime: "5 min read",
      image: "/iot-impact.jpg",
      excerpt: "In today's rapidly evolving industrial landscape, the convergence of Internet of Things (IoT) technology and predictive maintenance is transforming how field service operations manage equipment, reduce downtime, and optimize performance. This technological revolution is not just changing maintenance schedules—it's fundamentally reshaping the entire field service industry.",
      category: "Innovation"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Choosing the Right Service Scheduling Software",
      date: "9/1/2025",
      readTime: "6 min read",
      image: "/scheduling-software.jpg",
      excerpt: "Running a field service business without proper scheduling software is like trying to conduct an orchestra without a conductor – chaotic, inefficient, and bound to hit all the wrong notes. Whether you're managing a small team of technicians or overseeing a large-scale operation, the right Field Service Management (FSM) platform can transform your business from reactive scrambling to proactive excellence.",
      category: "Guide"
    },
    {
      id: 4,
      title: "5 Ways to Improve Customer Communication in Your Service Business",
      date: "9/1/2025",
      readTime: "4 min read",
      image: "/customer-communication.jpg",
      excerpt: "In today's competitive service landscape, exceptional customer communication isn't just nice to have—it's essential for business survival and growth. Whether you're running an HVAC company, plumbing service, electrical contracting business, or any field service operation, how you communicate with customers directly impacts your reputation, retention rates, and bottom line.",
      category: "Customer Service",
      author: "Hari"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Fielduo Blog | Insights on Field Service Management</title>
        <meta name="description" content="Stay updated with the latest insights and trends in field service management from Fielduo experts." />
      </Head>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Fielduo Blog</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Insights and updates on field service management software
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Fielduo</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Welcome to Fielduo, your go-to blog for insights and updates on field service management software. 
                We aim to empower businesses with knowledge and tools for efficient operations.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-8">
                At Fielduo, we are dedicated to providing valuable content that helps businesses optimize their 
                field service management processes and enhance productivity through effective software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Are</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700">
                  At Fielduo, we are a team of industry experts, software developers, and field service 
                  professionals who understand the challenges you face daily. Our combined experience 
                  allows us to provide insights that are both practical and innovative.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">Expert Team</h3>
                  <p>Bringing years of industry experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                    {post.author && (
                      <>
                        <span className="mx-2">•</span>
                        <span>By {post.author}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-semibold">1</button>
              <button className="px-3 py-1 rounded-md bg-white text-gray-700 font-semibold hover:bg-gray-100">2</button>
              <button className="px-3 py-1 rounded-md bg-white text-gray-700 font-semibold hover:bg-gray-100">3</button>
            </nav>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe for Updates</h2>
            <p className="text-xl mb-8">Stay updated with the latest insights and trends in field service management</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default FielduoBlog;