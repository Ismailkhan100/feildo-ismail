'use client';

import { useState, useRef } from 'react';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function EnergyUtilitiesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null); // Add this line
  const sectionRefs = {
    features: useRef<HTMLDivElement>(null),
    benefits: useRef<HTMLDivElement>(null),
    demo: useRef<HTMLDivElement>(null),
    why: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null)
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const features = [
    { title: 'Grid Asset Management', icon: '🔌' },
    { title: 'Outage Response Management', icon: '⚡' },
    { title: 'Preventive Maintenance', icon: '🛠️' },
    { title: 'Emergency Restoration', icon: '🚨' },
    { title: 'Compliance Tracking', icon: '📋' },
    { title: 'Customer Notifications', icon: '📢' }
  ];

  const benefits = [
    { title: 'Service Reliability', desc: 'Minimize downtime with proactive maintenance' },
    { title: 'Regulatory Alignment', desc: 'Stay compliant with industry regulations' },
    { title: 'Transparent Comms', desc: 'Keep customers informed throughout the process' },
    { title: 'Operational Efficiency', desc: 'Optimize workflows and resource allocation' }
  ];

  const demoItems = [
    'Scheduling & dispatch walkthrough',
    'Technician mobile flows',
    'Reports & compliance',
    'Q & A with our experts'
  ];

  const faqs = [
    {
      question: 'What features does Fielduo offer for Energy & Utilities?',
      answer: 'Fielduo provides comprehensive features including grid asset management, outage response, preventive maintenance, emergency restoration, compliance tracking, and customer notifications tailored for energy and utility providers.'
    },
    {
      question: 'How can Energy & Utilities businesses improve efficiency with field service management software?',
      answer: 'Our software streamlines operations through optimized scheduling, real-time communication, automated workflows, and data-driven insights that help reduce response times and maximize resource utilization.'
    },
    {
      question: 'How does the software help with regulatory compliance for Energy & Utilities?',
      answer: 'Fielduo includes built-in compliance tracking with automated reporting, audit trails, and documentation features that ensure you meet industry standards and regulatory requirements.'
    },
    {
      question: 'Does Fielduo offer emergency response or scheduling for Energy & Utilities?',
      answer: 'Yes, our platform includes specialized emergency restoration capabilities and intelligent scheduling that prioritizes critical incidents to minimize downtime and service disruptions.'
    },
    {
      question: 'How does Fielduo support inventory, assets, or equipment tracking for Energy & Utilities?',
      answer: 'We provide complete grid asset management with tracking capabilities for all your equipment, maintenance history, inventory levels, and lifecycle management in one centralized system.'
    },
    {
      question: 'How does the software enhance customer communication for Energy & Utilities?',
      answer: 'Fielduo enables proactive customer notifications via multiple channels, providing real-time updates on service status, outage information, and estimated restoration times.'
    },
    {
      question: 'What benefits do Energy & Utilities clients see after implementing Fielduo?',
      answer: 'Clients typically experience improved service reliability, enhanced operational efficiency, better regulatory compliance, increased customer satisfaction, and reduced operational costs.'
    }
  ];

  return (
    <>
    <Navbar />
      <Head>
        <title>Fielduo | Energy & Utilities Field Service Solution</title>
        <meta name="description" content="Advanced field service management for utilities and power providers" />
      </Head>
// ... existing imports and state ...

{/* Hero Section */}
<section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
  <div className="absolute inset-0 bg-black/20 z-0"></div>
  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Field Service Management for<br />
          <span className="text-blue-300">Energy & Utilities</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
          Optimize grid operations, outage response, and maintenance workflows with our specialized utility field service platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button 
            onClick={() => scrollToSection(sectionRefs.features)}
            className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            Explore Features
          </button>
          <button 
            onClick={() => scrollToSection(sectionRefs.demo)}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all shadow-lg"
          >
            Request Demo
          </button>
        </div>
      </div>

      {/* Visual Element */}
      <div className="flex-1 flex justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform rotate-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-600 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-sm">Outage Management</p>
            </div>
            <div className="bg-indigo-600 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔧</div>
              <p className="text-sm">Preventive Maintenance</p>
            </div>
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-sm">Asset Tracking</p>
            </div>
            <div className="bg-indigo-700 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm">Field Communications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

// ... rest of the component remains the same ...

      {/* Key Features Section */}
      <section ref={sectionRefs.features} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Key Features</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">Comprehensive tools designed specifically for energy and utility providers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">Streamline operations with our specialized utility field service solutions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section ref={sectionRefs.benefits} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Business Benefits</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">Drive operational excellence and customer satisfaction</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
              >
                <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section ref={sectionRefs.demo} className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What You'll See</h2>
          <p className="text-center opacity-90 max-w-2xl mx-auto mb-16">Experience our platform through a comprehensive demonstration</p>
          
          <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
            <ul className="space-y-4">
              {demoItems.map((item, index) => (
                <li key={index} className="flex items-center py-3 border-b border-white border-opacity-10">
                  <svg className="w-5 h-5 mr-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 text-center">
              <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fielduo */}
      <section ref={sectionRefs.why} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Why Choose Fielduo</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Rapid Implementation
              </h3>
              <p className="text-gray-600">We help you start quickly by importing your data, checklists, and assets with minimal disruption to your operations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-600">Security is built-in with role-based permissions and full audit logs to protect your critical infrastructure data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={sectionRefs.faq} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">Find answers to common questions about our Energy & Utilities solution</p>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-5 text-left font-semibold text-gray-800 hover:text-blue-600 focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Field Operations?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">Join leading energy and utility providers who trust Fielduo for their field service management</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all">
              Get Started Today
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 1s ease-out 0.3s forwards;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
      <Footer />
    </>
  );
}