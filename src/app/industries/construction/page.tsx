"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function ConstructionServicePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "What features does Fielduo offer for Construction?",
      answer: "Fielduo provides comprehensive features including multi-phase project tracking, crew & equipment planning, digital safety protocols, quality inspections, change order workflows, and live progress reporting."
    },
    {
      question: "How can Construction businesses improve efficiency with field service management software?",
      answer: "Our software helps optimize construction operations through better resource allocation, real-time progress tracking, automated safety compliance, and streamlined change order processes."
    },
    {
      question: "How does the software help with regulatory compliance for Construction?",
      answer: "Fielduo includes built-in compliance tracking for construction regulations, digital safety protocols, automated inspection checklists, and comprehensive audit trails."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Construction?",
      answer: "Yes, we provide emergency response capabilities and priority scheduling to quickly address safety issues and critical project delays."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Construction?",
      answer: "Our platform includes comprehensive equipment and asset management features that track machinery, tools, and materials in real-time across multiple job sites."
    },
    {
      question: "How does the software enhance customer communication for Construction?",
      answer: "Fielduo improves customer communication through automated progress updates, change order notifications, and transparent project timeline communications."
    },
    {
      question: "What benefits do Construction clients see after implementing Fielduo?",
      answer: "Clients typically experience smoother project coordination, improved safety compliance, consistent quality control, and better budget visibility."
    }
  ];

  return (
    <>
      <Navbar />
      <Head>
        <title>Fielduo | Construction Service Management</title>
        <meta name="description" content="Project, safety, and on-site service coordination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes hammer {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-hammer {
          animation: hammer 2s ease-in-out infinite;
        }
        .opacity-0 {
          opacity: 0;
        }
        .construction-background {
          background: linear-gradient(135deg, #0c4da2 0%, #1e40af 100%);
        }
        .blueprint-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Blue Background */}
        <section className="construction-background text-white py-20 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white opacity-20 rounded-full animate-float"></div>
          <div className="absolute bottom-5 left-10 w-16 h-16 bg-white opacity-20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-blue-300 opacity-30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Construction Tool Animation */}
          <div className="absolute top-1/4 right-1/4 text-4xl animate-hammer">🔨</div>
          <div className="absolute bottom-1/4 left-1/4 text-4xl animate-float" style={{animationDelay: '0.5s'}}>🏗️</div>
          
          <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Construction Solutions
            </h1>
            <p className={`text-xl mb-8 max-w-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Project, safety, and on‑site service coordination.
            </p>
            <button className={`bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105 animate-pulse-slow ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Book a Live Demo
            </button>
          </div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
            <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill fill-gray-50"></path>
            </svg>
          </div>
        </section>

        {/* Key Features */}
        <section ref={el => { sectionRefs.current[0] = el; }} className="py-16 opacity-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { feature: "Multi-phase project tracking", icon: "📊", desc: "Comprehensive tracking of construction projects through all phases from planning to completion" },
                { feature: "Crew & equipment planning", icon: "👷", desc: "Efficient scheduling and allocation of crew members and equipment across job sites" },
                { feature: "Digital safety protocols", icon: "🛡️", desc: "Digital implementation and tracking of safety protocols and compliance requirements" },
                { feature: "Quality inspections", icon: "✅", desc: "Standardized quality inspection processes with digital checklists and reporting" },
                { feature: "Change order workflows", icon: "📝", desc: "Streamlined change order management with approval workflows and documentation" },
                { feature: "Live progress reporting", icon: "📱", desc: "Real-time progress updates and reporting from the field to management" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.feature}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section ref={el => { sectionRefs.current[1] = el; }} className="py-16 bg-blue-50 opacity-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { benefit: "Smoother coordination", icon: "🔄", desc: "Enhanced coordination between office, field teams, and stakeholders" },
                { benefit: "Improved safety", icon: "🛡️", desc: "Reduced incidents with proactive safety management and compliance tracking" },
                { benefit: "Consistent quality", icon: "🏆", desc: "Standardized processes ensuring consistent quality across all projects" },
                { benefit: "Budget visibility", icon: "💰", desc: "Real-time budget tracking and cost control throughout project lifecycles" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.benefit}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll See */}
        <section ref={el => { sectionRefs.current[2] = el; }} className="py-16 opacity-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What You'll See</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Scheduling & dispatch walkthrough", desc: "Intelligent resource allocation and project task management", icon: "📅" },
                { title: "Technician mobile flows", desc: "Mobile-optimized workflows for field construction teams", icon: "📱" },
                { title: "Reports & compliance", desc: "Comprehensive reporting and regulatory documentation", icon: "📈" },
                { title: "Q & A with our experts", desc: "Direct access to our construction industry specialists", icon: "👨‍💼" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400 transform hover:scale-105 transition duration-300 flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Fielduo */}
        <section ref={el => { sectionRefs.current[3] = el; }} className="py-16 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Fielduo</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6">
                We help you start quickly by importing your data, checklists, and assets. Security is built-in with role-based permissions and full audit logs.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-semibold">Secure & Compliant</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1">
                  <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold">Quick Implementation</span>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 transform hover:-translate-y-1">
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
        <section ref={el => { sectionRefs.current[4] = el; }} className="py-16 bg-gray-100 opacity-0">
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
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-4 bg-white mt-1 rounded-lg shadow-md">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={el => {sectionRefs.current[5] = el; }} className="py-16 bg-blue-600 text-white opacity-0">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Construction Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a personalized demo to see how Fielduo can help your business work smarter, safer, and more efficiently.</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}