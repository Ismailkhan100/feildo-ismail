"use client";

import { useState } from 'react';
import Head from 'next/head';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

export default function WasteManagementPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "What features does Fielduo offer for Waste Management?",
      answer: "Fielduo provides comprehensive features including route planning & optimization, fleet & asset tracking, disposal compliance tracking, customer accounts & billing, recycling metrics & reporting, and hazardous response workflows."
    },
    {
      question: "How can Waste Management businesses improve efficiency with field service management software?",
      answer: "Our software helps cut fuel costs, improve service reliability, and optimize operations through intelligent route planning, real-time tracking, and streamlined workflows."
    },
    {
      question: "How does the software help with regulatory compliance for Waste Management?",
      answer: "Fielduo includes disposal compliance tracking and reporting features that ensure you meet environmental regulations with full audit trails and documentation capabilities."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Waste Management?",
      answer: "Yes, we provide hazardous response workflows and emergency scheduling capabilities to handle urgent situations efficiently and safely."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Waste Management?",
      answer: "Our platform includes comprehensive fleet & asset tracking features that monitor equipment status, maintenance schedules, and inventory levels in real-time."
    },
    {
      question: "How does the software enhance customer communication for Waste Management?",
      answer: "Fielduo improves customer communication through transparent service updates, automated notifications, and integrated customer accounts with billing information."
    },
    {
      question: "What benefits do Waste Management clients see after implementing Fielduo?",
      answer: "Clients typically experience reduced fuel costs, improved regulatory compliance, enhanced service reliability, and optimized operations leading to increased profitability."
    }
  ];

  return (
    <>
    <Navbar />
      <Head>
        <title>Fielduo | Waste Management Solutions</title>
        <meta name="description" content="Comprehensive waste collection, recycling, and environmental services software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Centered Content */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Waste Management Solutions</h1>
            <p className="text-xl mb-8 max-w-2xl">Advanced software for waste collection, recycling, and environmental services</p>
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Request a Demo
            </button>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Route planning & optimization",
                "Fleet & asset tracking",
                "Disposal compliance tracking",
                "Customer accounts & billing",
                "Recycling metrics & reporting",
                "Hazardous response workflows"
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature}</h3>
                  <p className="text-gray-600">Streamline your operations with our advanced {feature.toLowerCase()} capabilities.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { benefit: "Cut fuel costs", icon: "⛽", desc: "Reduce operational expenses with optimized routes" },
                { benefit: "Meet environmental regs", icon: "📝", desc: "Stay compliant with all regulations" },
                { benefit: "Improve service reliability", icon: "🔄", desc: "Enhance customer satisfaction" },
                { benefit: "Optimize operations", icon: "📊", desc: "Increase efficiency across your organization" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.benefit}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll See */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What You'll See</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Scheduling & dispatch walkthrough", desc: "Efficient resource allocation and task management" },
                { title: "Technician mobile flows", desc: "Seamless field operations with mobile access" },
                { title: "Reports & compliance", desc: "Comprehensive analytics and regulatory documentation" },
                { title: "Q & A with our experts", desc: "Direct access to our industry specialists" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Fielduo */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Fielduo</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6">
                We help you start quickly by importing your data, checklists, and assets. Security is built-in with role-based permissions and full audit logs.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-semibold">Secure & Compliant</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold">Quick Implementation</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full p-4 bg-white text-left font-semibold rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${activeFAQ === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeFAQ === index && (
                    <div className="p-4 bg-white mt-1 rounded-lg shadow-md">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Waste Management Operations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a personalized demo to see how Fielduo can help your business work smarter, safer, and more efficiently.</p>
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}