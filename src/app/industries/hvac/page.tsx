"use client";
import React, { useState } from "react";
import { ChevronDown, Thermometer, Clock, Shield, Users, TrendingUp, Wrench } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HVACPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What features does Fielduo offer for HVAC?",
      answer: "Fielduo provides comprehensive HVAC-specific features including equipment databases, seasonal scheduling, maintenance contracts, energy efficiency tracking, emergency service management, and specialized parts inventory management."
    },
    {
      question: "How can HVAC businesses improve efficiency with field service management software?",
      answer: "Our software optimizes technician routing, automates scheduling, provides real-time job updates, and ensures technicians have complete equipment information and parts availability, significantly reducing travel time and improving first-time fix rates."
    },
    {
      question: "How does the software help with regulatory compliance for HVAC?",
      answer: "Fielduo maintains detailed service records, tracks certifications and permits, manages safety protocols, and generates compliance reports to help HVAC businesses meet industry regulations and standards."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for HVAC?",
      answer: "Yes, our platform includes priority scheduling for urgent HVAC failures, 24/7 emergency dispatch capabilities, and automated customer notifications to ensure rapid response times during critical situations."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for HVAC?",
      answer: "Our system provides comprehensive asset management with equipment histories, parts inventory tracking, automated reorder points, and integration with HVAC-specific parts catalogs to ensure optimal inventory levels."
    },
    {
      question: "How does the software enhance customer communication for HVAC?",
      answer: "Fielduo offers automated appointment reminders, real-time service updates, digital work order completion, customer portals for service history, and proactive maintenance notifications to improve customer satisfaction."
    },
    {
      question: "What benefits do HVAC clients see after implementing Fielduo?",
      answer: "Clients typically see 25-40% improvement in operational efficiency, increased customer retention rates, higher revenue through upselling opportunities, and significantly improved first-time fix rates within the first 90 days."
    }
  ];

  const features = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Equipment Database",
      description: "Comprehensive HVAC system information, service history, and performance analytics for informed decision-making."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Seasonal Scheduling",
      description: "Intelligent workload management with automated scheduling optimization for peak heating and cooling seasons."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Maintenance Contracts",
      description: "Streamlined recurring service agreements with automated preventive maintenance scheduling and reminders."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Energy Efficiency Tracking",
      description: "Advanced monitoring of system performance, energy consumption patterns, and optimization recommendations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Emergency Service Management",
      description: "Priority dispatch system with 24/7 emergency response capabilities and real-time technician tracking."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Parts Inventory Management",
      description: "HVAC-specific parts catalogs with automated inventory tracking, reorder alerts, and supplier integration."
    }
  ];

  const benefits = [
    {
      title: "Increase Service Efficiency",
      description: "Optimize technician routes, reduce travel time, and maximize daily service capacity with intelligent scheduling.",
      metric: "Up to 35% efficiency gain"
    },
    {
      title: "Boost Customer Retention",
      description: "Deliver proactive maintenance services and exceptional customer experiences that build long-term relationships.",
      metric: "25% higher retention rates"
    },
    {
      title: "Maximize Revenue Growth",
      description: "Identify upselling opportunities, grow service agreements, and increase average job value through data insights.",
      metric: "20-30% revenue increase"
    },
    {
      title: "Improve First-Time Fix Rates",
      description: "Equip technicians with complete equipment information, service history, and optimal parts availability.",
      metric: "85%+ first-time fix rate"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional HVAC
              <span className="block text-blue-200">Field Service Management</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your HVAC operations with Fielduo's enterprise-grade management platform. 
              Streamline workflows, enhance customer satisfaction, and drive profitable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HVAC-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built tools designed specifically for HVAC professionals to optimize every aspect of your field service operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of HVAC businesses already experiencing significant improvements in efficiency, customer satisfaction, and profitability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.metric}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Fielduo's HVAC field service management solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your HVAC Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Join the growing community of HVAC professionals who trust Fielduo to streamline their operations and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}