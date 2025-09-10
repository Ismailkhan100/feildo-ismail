"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const JanitorialPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // SVG Icons for features
  const FeatureIcons = {
    quality: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    supply: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
      </svg>
    ),
    location: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    time: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    communication: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    ),
    compliance: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    )
  };

  // SVG Icons for advantages
  const AdvantageIcons = {
    maintain: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    ),
    reduce: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    improve: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    ),
    scale: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    )
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
     

      {/* Animated Background Elements */}
      

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Transform Your <span className="text-blue-600">Cleaning Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manage your commercial cleaning operations with specialized tools for quality control and client satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Demo
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all border-2 border-blue-600 transform hover:scale-105 shadow flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Demo
              </button>
            </div>
          </div>
          <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-6 bg-blue-100 rounded-2xl rotate-3 opacity-50"></div>
              <img 
                src="/api/placeholder/600/500" 
                alt="Cleaning professionals using digital management tools" 
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">98% Client Satisfaction</p>
                    <p className="text-sm text-gray-600">With our software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
              <p className="text-gray-600">Faster Reporting</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">42%</div>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Businesses Using</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Janitorial-Specific Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to manage your cleaning business efficiently</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-50">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cleaning Business Advantages</h2>
            <p className="text-xl max-w-3xl mx-auto">Why thousands of cleaning companies choose Fielduo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantagesData.map((advantage, index) => (
              <div key={index} className="bg-blue-700 bg-opacity-30 p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 p-3 rounded-2xl mr-4">
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p>{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied cleaning businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Fielduo has transformed how we manage our cleaning operations. The quality control features have helped us maintain consistent standards across all locations."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CleanPro Services</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"The inventory management system has saved us countless hours and reduced our supply costs by 30%. The automated reordering feature is a game-changer."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Michael Torres</p>
                  <p className="text-sm text-gray-500">Sparkle Clean Co.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Client communication has never been easier. The real-time updates and transparent service delivery have significantly improved our customer satisfaction scores."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Emily Chen</p>
                  <p className="text-sm text-gray-500">OfficeCare Cleaners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-700 text-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Cleaning Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join thousands of janitorial companies that use Fielduo to streamline operations, improve quality, and grow their business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center justify-center mx-auto sm:mx-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Watch Demo
            </button>
            <button className="bg-transparent hover:bg-green-600 text-white font-bold py-4 px-10 border-2 border-white rounded-lg transition-all duration-300 transform hover:scale-105 text-lg flex items-center justify-center mx-auto sm:mx-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Fielduo</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-semibold text-gray-800 hover:text-blue-600 focus:outline-none bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${activeFAQ === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 text-gray-600 bg-white">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

// Data
const featuresData = [
  {
    icon: "quality",
    title: "Quality Assurance",
    description: "Digital inspection forms and quality control protocols"
  },
  {
    icon: "supply",
    title: "Supply Management",
    description: "Cleaning supply inventory and automated reordering"
  },
  {
    icon: "location",
    title: "Multi-Location",
    description: "Coordinate cleaning services across multiple facilities"
  },
  {
    icon: "time",
    title: "Time Tracking",
    description: "Employee time tracking and productivity monitoring"
  },
  {
    icon: "communication",
    title: "Client Communication",
    description: "Real-time service updates and issue reporting"
  },
  {
    icon: "compliance",
    title: "Compliance Docs",
    description: "Health and safety compliance tracking"
  }
];

const advantagesData = [
  {
    icon: "maintain",
    title: "Maintain Standards",
    description: "Consistent cleaning protocols and quality assurance"
  },
  {
    icon: "reduce",
    title: "Reduce Admin Work",
    description: "Automated reporting and invoice generation"
  },
  {
    icon: "improve",
    title: "Improve Communication",
    description: "Real-time client updates and transparent service delivery"
  },
  {
    icon: "scale",
    title: "Scale Operations",
    description: "Efficiently manage multiple locations and teams"
  }
];

const faqData = [
  {
    question: "What features does Fielduo offer for Janitorial & Cleaning?",
    answer: "Fielduo offers a comprehensive suite of features tailored for janitorial and cleaning businesses, including quality assurance tools, supply management, multi-location coordination, time tracking, client communication platforms, and compliance documentation."
  },
  {
    question: "How can Janitorial & Cleaning businesses improve efficiency with field service management software?",
    answer: "Our software automates scheduling, optimizes routes, tracks inventory in real-time, and streamlines communication between office staff and cleaning crews. This reduces administrative overhead, minimizes travel time between locations, and ensures your team has what they need to complete jobs efficiently."
  },
  {
    question: "How does the software help with regulatory compliance for Janitorial & Cleaning?",
    answer: "Fielduo maintains up-to-date compliance requirements, generates necessary documentation automatically, tracks safety training completion, and provides digital audit trails for all cleaning activities to ensure you meet health and safety regulations."
  },
  {
    question: "Does Fielduo offer emergency response or scheduling for Janitorial & Cleaning?",
    answer: "Yes, our platform includes emergency dispatch capabilities that allow you to quickly assign urgent cleaning requests, notify available staff, and track response times to ensure prompt service delivery for your clients."
  },
  {
    question: "How does Fielduo support inventory, assets, or equipment tracking for Janitorial & Cleaning?",
    answer: "Our system tracks cleaning supplies, equipment usage, and maintenance schedules. It can automatically generate reorder alerts when supplies run low and schedule equipment maintenance to prevent downtime."
  },
  {
    question: "How does the software enhance customer communication for Janitorial & Cleaning?",
    answer: "Fielduo provides real-time service updates to clients, allows for instant issue reporting, facilitates feedback collection, and maintains a transparent record of all services performed, building trust and improving client satisfaction."
  },
  {
    question: "What benefits do Janitorial & Cleaning clients see after implementing Fielduo?",
    answer: "Clients typically experience 30% improvements in operational efficiency, 25% reduction in supply costs, higher client retention rates, improved service quality consistency, and greater ability to scale their operations without proportional increases in administrative overhead."
  }
];

export default JanitorialPage;