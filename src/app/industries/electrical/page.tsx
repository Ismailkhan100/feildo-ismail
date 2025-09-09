"use client";

import React, { useState } from "react";
import { ChevronDown, Zap, Shield, FileCheck, Wrench, Calculator, ClipboardCheck, TrendingUp, Users, Clock, AlertTriangle } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const ElectricalPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Multi-Phase Project Management",
      description: "Comprehensive project tracking with resource allocation, milestone management, and real-time progress monitoring for complex electrical installations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Compliance System",
      description: "Digital safety forms, automated compliance tracking, and real-time regulatory updates to ensure adherence to electrical safety standards."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Equipment Specifications Database",
      description: "Comprehensive electrical equipment catalogs with detailed specifications, installation manuals, and maintenance schedules."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Code Compliance Tracking",
      description: "Stay current with National Electric Code (NEC) updates, local regulations, and automated inspection requirement notifications."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Advanced Material Estimating",
      description: "Precise electrical materials calculation with real-time pricing, waste factors, and detailed cost breakdowns for accurate bidding."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Permit & Inspection Management",
      description: "Streamlined permit applications, inspection scheduling, and compliance documentation for seamless project approval processes."
    }
  ];

  const benefits = [
    {
      title: "Enhance Project Efficiency",
      description: "Streamline complex electrical projects with advanced scheduling, resource coordination, and real-time progress tracking across multiple job sites.",
      metric: "35% faster completion"
    },
    {
      title: "Ensure Safety Compliance",
      description: "Maintain comprehensive safety documentation, automate compliance checks, and reduce liability with digital safety management systems.",
      metric: "99% compliance rate"
    },
    {
      title: "Deliver Accurate Estimates",
      description: "Generate professional electrical estimates with detailed material lists, labor calculations, and competitive pricing strategies.",
      metric: "25% higher win rate"
    },
    {
      title: "Guarantee Quality Assurance",
      description: "Document comprehensive testing procedures, inspection results, and quality control measures for every electrical installation.",
      metric: "90%+ satisfaction"
    }
  ];

  const faqData = [
    {
      question: "What features does Fielduo offer for Electrical contractors?",
      answer: "Fielduo provides comprehensive electrical-specific features including multi-phase project management, NEC code compliance tracking, advanced material estimating, safety compliance systems, equipment specification databases, and permit management tools designed specifically for electrical contractors."
    },
    {
      question: "How can Electrical businesses improve efficiency with field service management software?",
      answer: "Our platform streamlines project scheduling across multiple phases, automates compliance tracking, provides real-time material cost updates, optimizes technician routing, and centralizes all project documentation. This reduces administrative overhead and improves project completion times by up to 35%."
    },
    {
      question: "How does the software help with regulatory compliance for Electrical work?",
      answer: "Fielduo maintains up-to-date National Electric Code (NEC) requirements, automates safety form completion, tracks certification renewals, manages inspection schedules, and provides comprehensive audit trails. The system alerts you to regulatory changes and ensures all work meets current standards."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Electrical services?",
      answer: "Yes, our platform includes 24/7 emergency dispatch capabilities with priority scheduling for power outages and electrical emergencies. Real-time GPS tracking, automated customer notifications, and mobile access ensure rapid response to critical electrical issues."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Electrical contractors?",
      answer: "The system includes comprehensive asset management with electrical equipment databases, parts inventory tracking with automated reorder points, tool and vehicle management, maintenance scheduling, and integration with electrical supply catalogs to optimize resource allocation."
    },
    {
      question: "How does the software enhance customer communication for Electrical projects?",
      answer: "Fielduo offers automated project updates, real-time progress notifications, digital work order completion with photos, customer portals for project status tracking, and professional reporting to keep clients informed throughout complex electrical installations."
    },
    {
      question: "What benefits do Electrical clients see after implementing Fielduo?",
      answer: "Clients typically see 35% faster project completion, 25% higher bid win rates, significant reduction in compliance issues, improved cash flow through faster invoicing, and enhanced customer satisfaction scores within 90 days of implementation."
    }
  ];

  return (
    <>
    <Navbar />
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-blue-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Zap className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Electrical
              <span className="block text-amber-200">Contractor Management</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 leading-relaxed">
              Power your electrical contracting business with Fielduo's specialized management platform. 
              Manage complex projects, ensure safety compliance, and deliver exceptional electrical services that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors shadow-lg">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
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
              Electrical Industry Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tools designed for electrical contractors to manage complex projects, ensure code compliance, and deliver safe, professional installations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-orange-600 mr-4">
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
              Join hundreds of electrical contractors experiencing significant improvements in project efficiency, safety compliance, and business profitability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <span className="bg-blue-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.metric}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Electrical Contractors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Code Compliance Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-blue-200">Faster Project Completion</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.5M</div>
              <div className="text-blue-200">Average Annual Revenue Managed</div>
            </div>
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
              Get answers to common questions about Fielduo's electrical contractor management solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqData.map((faq, index) => (
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
            Ready to Power Up Your Electrical Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Join the growing community of electrical contractors who trust Fielduo to manage their projects, ensure compliance, and accelerate growth.
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
};

export default ElectricalPage;