"use client";   

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Cpu, Clock, Users, MapPin, Zap, MessageSquare, Navigation, TrendingUp, DollarSign, Shield, BarChart3 } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const SchedulingDispatchingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Drag-and-Drop Interface",
      description: "The visual calendar makes manual adjustments simple—drag jobs to new slots or swap technicians in seconds."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Optimization",
      description: "Algorithms consider skills, certifications, location, and traffic to assign jobs automatically for peak efficiency."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Scheduling",
      description: "Instantly reprioritize or reroute technicians in response to emergency calls or cancellations."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Skills-Based Assignment",
      description: "Match technicians to tasks based on expertise levels and specialized certifications."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Geographic Optimization",
      description: "Cluster appointments to reduce travel miles and improve on-time arrival rates."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Capacity Planning",
      description: "Balance daily workloads to prevent overbooking and technician burnout."
    }
  ];

  const dispatchingFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Communication",
      description: "Push job updates and instructions to technicians' mobile apps, ensuring clarity and accountability."
    },
    {
      icon: <Navigation className="w-8 h-8 text-blue-600" />,
      title: "GPS Tracking",
      description: "Monitor live technician locations and provide customers with accurate arrival ETAs."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Emergency Scheduling",
      description: "Flag high-priority jobs for immediate insertion into schedules."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Resource Management",
      description: "Track parts and equipment availability in real time to avoid on-site delays."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Increased Productivity",
      description: "Boost technician utilization by up to 30% through smarter job assignments."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Improved Customer Satisfaction",
      description: "Reduce wait times and provide reliable arrival windows."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: "Reduced Operating Costs",
      description: "Cut fuel and mileage expenses with optimized routing."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Enhanced Flexibility",
      description: "Adapt instantly to changing field conditions and urgent requests."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between scheduling and dispatching?",
      answer: "Scheduling involves planning and organizing technician assignments in advance, while dispatching is the real-time coordination and communication of job assignments to field technicians."
    },
    {
      question: "How does AI-powered optimization work?",
      answer: "Our AI algorithms analyze multiple factors including technician skills, certifications, geographic location, traffic patterns, and job requirements to automatically create the most efficient schedules possible."
    },
    {
      question: "Can the system handle emergency scheduling?",
      answer: "Yes, our platform can instantly flag high-priority emergency jobs and automatically insert them into existing schedules while minimizing disruption to planned appointments."
    },
    {
      question: "How does GPS tracking benefit dispatching?",
      answer: "GPS tracking provides real-time location data for all technicians, enabling accurate ETA calculations, route optimization, and immediate response to customer inquiries about arrival times."
    },
    {
      question: "What happens when technicians are offline or have connectivity issues?",
      answer: "The system includes offline capabilities and automatic synchronization once connectivity is restored, ensuring no job information is lost and technicians can continue working."
    },
    {
      question: "How does skills-based assignment work?",
      answer: "The system maintains a database of each technician's certifications, experience levels, and specialized skills, then automatically matches the most qualified technician to each job requirement."
    },
    {
      question: "Can supervisors make real-time adjustments in the field?",
      answer: "Absolutely. Supervisors have full access to modify schedules, reassign technicians, and update job priorities in real-time through both desktop and mobile interfaces."
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Scheduling & Dispatching
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform workforce management with advanced scheduling algorithms and dynamic dispatch tools, ensuring the right technician arrives at the right time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Explore Features
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transform hover:scale-105 transition-all duration-200">
                View Benefits
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Efficient scheduling and dispatching are the backbone of great field service. Fielduo's solution marries intuitive interfaces with AI-driven optimization to cut travel time, maximize technician utilization, and seamlessly adapt to day-of changes.
          </p>
        </div>

        {/* Advanced Scheduling Features */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Advanced Scheduling Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dispatching Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Dispatching Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dispatchingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-200">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Scheduling & Dispatching — FAQs</h2>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-2 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  </div>
                  {openFAQ === index ? (
                    <ChevronDown className="w-6 h-6 text-blue-600 transform transition-transform duration-200" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-blue-600 transform transition-transform duration-200" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="pb-6 pl-7 pr-2 animate-in slide-in-from-top duration-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Field Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already transforming their workforce management
          </p>
          <button className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SchedulingDispatchingPage;