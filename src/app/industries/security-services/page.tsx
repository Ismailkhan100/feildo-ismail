"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle, AlertTriangle, Users, KeyRound, BarChart3, HeadphonesIcon, Database, ChevronDown } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SecurityServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    {
      question: "What specialized features does your platform offer for security service providers?",
      answer:
        "Our platform includes specialized modules for access control management, surveillance system monitoring, alarm response coordination, compliance documentation, and integrated client reporting specifically designed for security industry requirements.",
    },
    {
      question: "How can security service businesses improve operational efficiency with your software?",
      answer:
        "Our solution automates scheduling, streamlines technician dispatch, provides real-time inventory management, and reduces administrative overhead through integrated billing and reporting systems, typically reducing operational costs by 20-30%.",
    },
    {
      question: "How does the software assist with regulatory compliance for security services?",
      answer:
        "The platform includes compliance tracking for industry-specific regulations, automated certification renewals, audit trail documentation, and generates compliance reports for various regulatory bodies.",
    },
    {
      question: "Do you offer emergency response capabilities for critical security system failures?",
      answer:
        "Yes, our system includes priority dispatch protocols, automated alert escalation, and integrates with monitoring centers to ensure rapid response to critical security system failures.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
            Enterprise-Grade Security System Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto text-xl text-blue-100 font-light"
          >
            Streamline security service operations with specialized software for installation, monitoring, and maintenance of integrated security systems.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Security Management Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform provides end-to-end solutions tailored for security service providers
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, title: "Installation Management", desc: "Complete oversight of security system deployments with detailed configuration tracking" },
            { icon: Clock, title: "Real-time Monitoring Integration", desc: "Seamless connectivity with security monitoring systems and protocols" },
            { icon: CheckCircle, title: "Preventive Maintenance Scheduling", desc: "Automated maintenance scheduling to ensure optimal equipment performance" },
            { icon: Users, title: "Compliance & Certification Tracking", desc: "Comprehensive regulatory compliance management with audit trails" },
            { icon: AlertTriangle, title: "Emergency Response Protocol", desc: "Priority dispatch system for critical security system failures" },
            { icon: KeyRound, title: "Granular Access Control", desc: "Advanced permission management for client security protocols" },
            { icon: BarChart3, title: "Performance Analytics", desc: "Detailed reporting on system uptime, response times, and service metrics" },
            { icon: Database, title: "Centralized Asset Management", desc: "Complete inventory tracking for all security equipment and components" },
            { icon: HeadphonesIcon, title: "Dedicated Support System", desc: "24/7 technical support for mission-critical security systems" },
        ].map((feature, idx) => (
            <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-5">
                <feature.icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Advantages for Security Providers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Transform your security service delivery with measurable business outcomes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
                { title: "Enhanced Response Capabilities", desc: "Reduce critical response times with optimized dispatch and real-time alerts for security emergencies." },
                { title: "Regulatory Compliance Assurance", desc: "Maintain full compliance with industry regulations through automated certification tracking and reporting." },
                { title: "System Reliability Improvement", desc: "Increase equipment uptime through predictive maintenance and proactive system monitoring." },
                { title: "Client Relationship Enhancement", desc: "Strengthen client trust with transparent communication and verifiable service level agreements." },
            ].map((benefit, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100"
                >
                <h3 className="font-semibold text-xl mb-4 text-blue-700">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Security Services — FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our security service management solutions
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200"
                >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                        expandedFaq === index ? "rotate-180" : ""
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
            >
            Optimize Your Security Service Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-xl text-blue-100 font-light max-w-2xl mx-auto"
            >
            Enhance your security service delivery with our enterprise-grade field management platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            >
            <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Demonstration
            </button>
            <p className="mt-4 text-blue-200">
              or <a href="#" className="font-semibold underline">speak with our security solutions team</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}