'use client';

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { useState, useRef } from 'react';

export default function RestorationServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { title: '24/7 Emergency Dispatch', icon: '🚨', desc: 'Round-the-clock emergency response for immediate disaster mitigation' },
    { title: 'Damage Assessment Tools', icon: '📊', desc: 'Advanced tools for accurate damage evaluation and estimation' },
    { title: 'Equipment Tracking', icon: '📱', desc: 'Real-time monitoring of restoration equipment and resources' },
    { title: 'Insurance Documentation', icon: '📑', desc: 'Streamlined documentation for insurance claims and compliance' },
    { title: 'Multi-phase Project Management', icon: '🔄', desc: 'Comprehensive management of complex restoration projects' },
    { title: 'Progress Communications', icon: '💬', desc: 'Automated updates and communication throughout the restoration process' }
  ];

  const benefits = [
    { title: 'Rapid Response', desc: 'Immediate dispatch to mitigate damage and reduce recovery time' },
    { title: 'Thorough Documentation', desc: 'Comprehensive records for insurance claims and compliance' },
    { title: 'Faster Claims', desc: 'Streamlined processes to accelerate insurance claim approvals' },
    { title: 'Coordinated Delivery', desc: 'Seamless coordination between teams for efficient service delivery' }
  ];

  const demoItems = [
    'Scheduling & dispatch walkthrough',
    'Technician mobile flows',
    'Reports & compliance',
    'Q & A with our experts'
  ];

  const faqs = [
    {
      question: 'What features does Fielduo offer for Restoration Services?',
      answer: 'Fielduo provides specialized features for restoration services including 24/7 emergency dispatch, damage assessment tools, equipment tracking, insurance documentation, multi-phase project management, and progress communications designed specifically for water, fire, and mold restoration businesses.'
    },
    {
      question: 'How can Restoration businesses improve efficiency with field service management software?',
      answer: 'Our software streamlines restoration operations through optimized emergency dispatch, automated documentation, real-time equipment tracking, and coordinated multi-phase project management that helps reduce response times and improve resource utilization during critical restoration projects.'
    },
    {
      question: 'How does the software help with regulatory compliance for Restoration Services?',
      answer: 'Fielduo includes built-in compliance tracking with automated reporting, insurance documentation templates, and audit features that ensure you meet industry standards and regulatory requirements specific to the restoration industry.'
    },
    {
      question: 'Does Fielduo offer emergency response or scheduling for Restoration Services?',
      answer: 'Yes, our platform includes specialized 24/7 emergency response capabilities and intelligent scheduling that prioritizes urgent restoration projects to minimize property damage and accelerate recovery times.'
    },
    {
      question: 'How does Fielduo support inventory, assets, or equipment tracking for Restoration Services?',
      answer: 'We provide complete equipment management with tracking capabilities for all your restoration assets, including maintenance history, deployment status, and lifecycle management in one centralized system designed for restoration workflows.'
    },
    {
      question: 'How does the software enhance customer communication for Restoration Services?',
      answer: 'Fielduo enables proactive customer notifications via multiple channels, providing real-time updates on restoration progress, documentation status, and completion timelines during stressful recovery situations.'
    },
    {
      question: 'What benefits do Restoration clients see after implementing Fielduo?',
      answer: 'Restoration clients typically experience improved emergency response times, streamlined insurance documentation, faster claim approvals, better equipment utilization, and enhanced customer satisfaction during recovery processes.'
    }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Restoration Services</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-delay">Disaster restoration for water, fire, and mold</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => scrollToSection(featuresRef as React.RefObject<HTMLDivElement>)}
              className="px-5 py-2.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition-all transform hover:-translate-y-0.5 text-sm"
            >
              Explore Features
            </button>
            <button 
              onClick={() => scrollToSection(demoRef as React.RefObject<HTMLDivElement>)}
              className="px-5 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all text-sm"
            >
              See Demo
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Key Features</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Comprehensive tools designed specifically for restoration service providers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section ref={benefitsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Business Benefits</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Drive operational excellence in disaster recovery and restoration</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
              >
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section ref={demoRef} className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What You'll See</h2>
          <p className="text-center opacity-90 max-w-2xl mx-auto mb-12">Experience our platform through a comprehensive demonstration</p>
          
          <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
            <ul className="space-y-3">
              {demoItems.map((item, index) => (
                <li key={index} className="flex items-center py-2 border-b border-white border-opacity-10">
                  <svg className="w-4 h-4 mr-3 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-2.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition-all text-sm">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fielduo */}
      <section ref={whyRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Why Choose Fielduo</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Rapid Implementation
              </h3>
              <p className="text-gray-600 text-sm">We help you start quickly by importing your data, checklists, and assets with minimal disruption to your operations.</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-600 text-sm">Security is built-in with role-based permissions and full audit logs to protect your business data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Find answers to common questions about our Restoration Services solution</p>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3 border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 hover:text-blue-600 focus:outline-none text-sm md:text-base"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Restoration Services?</h2>
          <p className="mb-8 max-w-3xl mx-auto opacity-90">Join leading restoration service providers who trust Fielduo for their field service management</p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all text-sm">
              Get Started Today
            </button>
            <button className="px-6 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all text-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
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
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, gray 1px, transparent 1px),
                           linear-gradient(to bottom, gray 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
      <Footer />
    </>
  );
}