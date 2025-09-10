"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FielduoAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ref.classList.add('animate-fade-in-up');
            }, index * 150);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const features = [
    {
      icon: '📱',
      title: 'User-Centric Design',
      description: 'Every feature is crafted for field technicians—minimizing taps, supporting offline use, and delivering clear task guidance.'
    },
    {
      icon: '📊',
      title: 'Actionable Analytics',
      description: 'Real-time dashboards highlight job progress, resource utilization, and customer satisfaction, empowering managers to make data-driven decisions instantly.'
    },
    {
      icon: '🔗',
      title: 'Easy Integration',
      description: 'Our lightweight API and pre-built connectors to popular ERP and CRM platforms mean rapid deployment with minimal IT overhead.'
    },
    {
      icon: '🔐',
      title: 'Scalable & Secure',
      description: 'Built on a modern cloud-native stack, fielduo scales with your team. Role-based access controls and ISO-aligned security practices protect your data from end to end.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'We work hand in hand with every client. From personalized onboarding sessions to ongoing check-ins, our small but dedicated customer success team ensures you get the most value from fielduo.'
    }
  ];

  const teamMembers = [
    {
      name: 'Hari',
      role: 'CEO & Co-founder',
      bio: 'Brings 12 years of product leadership and a passion for operational excellence.'
    },
    {
      name: 'Kiruthiga',
      role: 'CTO & Co-founder',
      bio: 'A seasoned software architect with deep expertise in mobile and cloud technologies.'
    }
  ];

  const missionPoints = [
    'Develop a user-first mobile and web platform that streamlines job scheduling, reporting, and communication',
    'Harness AI-powered analytics to deliver real-time insights and predictive maintenance alerts',
    'Ensure seamless integration with existing business systems through open APIs and pre-built connectors',
    'Provide unrivalled customer support and continuous innovation to help our clients adapt and excel',
    'Uphold the highest standards of security, reliability, and privacy in all our solutions'
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>About Fielduo | Field Service Management Solutions</title>
        <meta name="description" content="Learn about Fielduo's mission to revolutionize field service management with innovative technology and dedicated support." />
      </Head>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fielduo</h1>
          <p className="text-xl md:text-2xl">
            Revolutionizing field service management with innovative technology
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={el => sectionRefs.current[0] = el}
            className="max-w-3xl mx-auto opacity-0 transition-all duration-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <div className="bg-blue-50 p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-800 mb-6">
                At Fielduo, we empower businesses with seamless field-service management and real-time operational insights. 
                Founded in 2025 in USA by Hari (CEO) and Kiruthiga (CTO), our startup brings together passionate technologists 
                and industry experts dedicated to transforming field operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-blue-600 mr-2">→</span>
                  <span className="font-medium">Field Service Excellence</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <span className="text-blue-600 mr-2">→</span>
                  <span className="font-medium">Innovation Journey</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            ref={el => sectionRefs.current[1] = el}
            className="max-w-3xl mx-auto opacity-0 transition-all duration-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                Hari and Kiruthiga launched Fielduo after witnessing firsthand the struggles of manual reporting, 
                fragmented schedules, and delayed data in field teams. Driven by a shared vision of effortless 
                digital workflows, they developed a mobile-first prototype that quickly gained traction among 
                local service providers.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to iterate and grow, guided by customer feedback and a commitment to simplicity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[2 + index] = el}
                className="bg-gray-50 p-6 rounded-xl shadow-md opacity-0 transition-all duration-700 hover:shadow-lg hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  <span className="mr-2">→</span>
                  <span>Learn more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-6">Leadership Team</h3>
            <div className="flex justify-center mb-4">
              <span className="text-4xl">↓</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                ref={el => sectionRefs.current[7 + index] = el}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-xl shadow-md opacity-0 transition-all duration-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-2xl font-bold text-white mr-4">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                <p className="mb-4">{member.bio}</p>
                <div className="flex items-center text-blue-200 font-medium">
                  <span className="mr-2">→</span>
                  <span>Learn more</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">↓</span>
            </div>
            <h3 className="text-2xl font-semibold mb-6">Extended Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl mb-3">👨‍💻</div>
                <h4 className="text-lg font-semibold mb-2">Engineering & Design</h4>
                <p className="text-sm">Five full-stack developers and UX designers focused on building intuitive, reliable solutions.</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="text-lg font-semibold mb-2">Customer Success</h4>
                <p className="text-sm">Two specialists committed to guiding your team from day one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div 
                ref={el => sectionRefs.current[9] = el}
                className="opacity-0 transition-all duration-700"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🌍</span>
                  <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700">
                  To revolutionise field-service operations worldwide by delivering an intuitive, data-driven platform 
                  that empowers organisations to achieve peak efficiency, exceptional customer satisfaction, and sustainable growth.
                </p>
              </div>
              
              {/* Mission */}
              <div 
                ref={el => sectionRefs.current[10] = el}
                className="opacity-0 transition-all duration-700"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🚀</span>
                  <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Fielduo exists to simplify and enhance every aspect of field-service management. We will:
                </p>
                <ul className="space-y-2">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Field Operations?</h2>
          <p className="text-xl mb-10">Join the growing number of businesses that trust Fielduo for their field service management needs.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default FielduoAbout;