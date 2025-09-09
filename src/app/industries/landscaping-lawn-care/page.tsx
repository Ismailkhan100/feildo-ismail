"use client";

import React, { useState } from 'react';
import { 
  Calendar, 
  Wrench, 
  FlaskConical, 
  Map, 
  CloudRain, 
  Users, 
  Route, 
  Shield, 
  MessageSquare, 
  ChevronDown,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

const LandscapingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const landscapingFeatures = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Seasonal Service",
      description: "Automated scheduling for seasonal landscaping tasks. Plan and execute spring cleanups, summer maintenance, fall leaf removal, and winter preparations with precision timing."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Equipment Tracking",
      description: "Monitor lawn care equipment maintenance and utilization. Track usage hours, schedule maintenance, and manage your equipment fleet to maximize productivity and lifespan."
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      title: "Chemical Tracking",
      description: "Record and monitor pesticide and fertilizer usage. Maintain compliance logs, track inventory, and ensure proper application rates for environmental safety."
    },
    {
      icon: <Map className="w-8 h-8 text-blue-600" />,
      title: "Property Mapping",
      description: "Create digital property layouts and service area documentation. Visualize job sites, mark specific features, and provide detailed service documentation to clients."
    },
    {
      icon: <CloudRain className="w-8 h-8 text-blue-600" />,
      title: "Weather Integration",
      description: "Weather-based scheduling and service adjustments. Automatically reschedule work during inclement weather and optimize your calendar based on forecast conditions."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Crew Management",
      description: "Multi-crew scheduling and route optimization. Assign the right team to each job, optimize travel routes, and track crew productivity in real-time."
    }
  ];

  const businessBenefits = [
    {
      icon: <Route className="w-8 h-8 text-blue-600" />,
      title: "Optimize Routes",
      description: "GPS-enabled routing for efficient service delivery. Reduce fuel costs, minimize travel time between jobs, and serve more customers each day."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Seasonal Planning",
      description: "Automated scheduling for peak seasons and weather. Prepare for seasonal rushes with optimized staffing and resource allocation."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Compliance",
      description: "Chemical usage tracking and environmental compliance. Maintain detailed records for regulatory requirements and demonstrate your commitment to safety."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Customer Communication",
      description: "Automated service notifications and photo documentation. Keep clients informed with before/after photos and service completion alerts."
    }
  ];

  const faqs = [
    {
      question: "What features does Fielduo offer for Landscaping & Lawn Care?",
      answer: "Fielduo offers specialized features including seasonal service scheduling, equipment tracking, chemical usage monitoring, property mapping, weather integration, and multi-crew management tailored specifically for landscaping businesses."
    },
    {
      question: "How can Landscaping & Lawn Care businesses improve efficiency with field service management software?",
      answer: "Our software streamlines operations through route optimization, automated scheduling, equipment maintenance tracking, and digital documentation. This reduces travel time between jobs, minimizes paperwork, and ensures your teams are always working at peak efficiency."
    },
    {
      question: "How does the software help with regulatory compliance for Landscaping & Lawn Care?",
      answer: "Fielduo maintains detailed records of chemical applications, tracks safety training certifications, and generates compliance reports to meet local, state, and federal regulations for pesticide and fertilizer usage."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Landscaping & Lawn Care?",
      answer: "Yes, our platform includes capabilities for urgent service requests and storm response scheduling. You can quickly mobilize crews, adjust routes in real-time, and communicate changes to both teams and customers."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Landscaping & Lawn Care?",
      answer: "Track equipment usage hours, schedule maintenance, monitor fuel consumption, and manage inventory levels for fertilizers, pesticides, and other supplies. Receive alerts when maintenance is due or supplies need replenishing."
    },
    {
      question: "How does the software enhance customer communication for Landscaping & Lawn Care?",
      answer: "Automate service reminders, send before/after photos, provide real-time job status updates, and collect customer feedback directly through the platform. Keep clients informed and build trust with transparency."
    },
    {
      question: "What benefits do Landscaping & Lawn Care clients see after implementing Fielduo?",
      answer: "Clients typically experience 20-30% improvements in route efficiency, 15-25% reduction in fuel costs, improved regulatory compliance, enhanced customer satisfaction, and better equipment utilization leading to longer asset lifespan."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Landscaping & Lawn Care Management
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Streamline your landscaping operations with comprehensive software designed 
                for outdoor service professionals. Optimize scheduling, track equipment, 
                ensure compliance, and deliver exceptional service to your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Landscaping-Specific Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Landscaping-Specific Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized tools designed for the unique needs of landscaping and lawn care professionals
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landscapingFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Landscaping Business Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Drive growth and efficiency with tools designed for outdoor service businesses
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <div className="mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Landscaping Business
            </h2>
            <p className="text-xl text-green-100 mb-12 leading-relaxed">
              Join thousands of landscaping professionals who have streamlined their operations, 
              improved customer satisfaction, and grown their business with Fielduo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center gap-2">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Request a Demo
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Landscaping & Lawn Care Field Service — FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our landscaping and lawn care management solutions
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Summary */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Fielduo for Your Landscaping Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools designed specifically for the unique challenges of landscaping and lawn care businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Seasonal Scheduling</h3>
                <p className="text-gray-600 text-sm">Automate seasonal tasks and planning</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Equipment Management</h3>
                <p className="text-gray-600 text-sm">Track and maintain your equipment fleet</p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Tracking</h3>
                <p className="text-gray-600 text-sm">Maintain chemical usage records</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Crew Optimization</h3>
                <p className="text-gray-600 text-sm">Manage multiple teams efficiently</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandscapingPage;