"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, ClipboardCheck, Clock, FileCheck, AlertTriangle, Database, ChevronDown, ShieldCheck, Activity, DollarSign } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function MedicalDeviceServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    { question: "What features does Fielduo offer for Medical Device Services?", answer: "Fielduo provides regulatory compliance tracking, preventive maintenance scheduling, certification management, emergency service response, documentation support, and asset tracking specifically designed for medical device services." },
    { question: "How can Medical Device Services businesses improve efficiency with field service management software?", answer: "By automating preventive maintenance, streamlining technician dispatch, tracking assets, and integrating billing and reporting, businesses reduce downtime and improve operational efficiency." },
    { question: "How does the software help with regulatory compliance for Medical Device Services?", answer: "The platform manages FDA and healthcare compliance documentation, automates certification renewals, ensures audit-ready records, and tracks validation of both equipment and technicians." },
    { question: "Does Fielduo offer emergency response or scheduling for Medical Device Services?", answer: "Yes, our solution prioritizes emergency service requests, enabling rapid response times for critical equipment failures while maintaining efficient scheduling for routine tasks." },
    { question: "How does Fielduo support inventory, assets, or equipment tracking for Medical Device Services?", answer: "Our system provides complete asset lifecycle management, including medical equipment history, usage logs, maintenance records, and real-time inventory visibility." },
    { question: "How does the software enhance customer communication for Medical Device Services?", answer: "The platform provides real-time service updates, transparent reporting, client portals for documentation access, and streamlined communication channels with service teams." },
    { question: "What benefits do Medical Device Services clients see after implementing Fielduo?", answer: "Clients experience improved patient safety, reduced downtime, cost optimization, and stronger compliance with regulatory requirements." },
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
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Medical Device Services Management
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="max-w-2xl mx-auto text-xl text-blue-100 font-light">
            Specialized field service management for medical equipment manufacturers and healthcare facilities.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Device Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">End-to-end solutions tailored for healthcare equipment management</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
              { icon: ClipboardCheck, title: "Regulatory Compliance", desc: "FDA and medical device regulation compliance tracking" },
              { icon: Clock, title: "Preventive Maintenance", desc: "Automated PM scheduling for critical medical equipment" },
              { icon: FileCheck, title: "Certification Management", desc: "Track technician certifications and equipment validations" },
              { icon: AlertTriangle, title: "Emergency Service", desc: "Priority response for critical medical equipment failures" },
              { icon: ShieldCheck, title: "Documentation Requirements", desc: "Complete audit trails and regulatory documentation" },
            { icon: Database, title: "Asset Management", desc: "Comprehensive medical equipment tracking and history" },
        ].map((feature, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md transition-all duration-300">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Service Benefits</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Delivering measurable improvements in patient safety and operational efficiency</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
                { title: "Patient Safety", desc: "Ensure medical equipment reliability and performance." },
                { title: "Regulatory Compliance", desc: "Maintain FDA and healthcare regulatory requirements." },
                { title: "Minimize Downtime", desc: "Rapid response and first-time fix capabilities." },
                { title: "Cost Control", desc: "Optimize maintenance schedules and resource allocation." },
            ].map((benefit, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Medical Device Services — FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about our medical device management solutions</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""}`} />
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-bold mb-6">
            Optimize Your Medical Device Service Operations
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="mb-8 text-xl text-blue-100 font-light max-w-2xl mx-auto">
            Enhance patient safety, ensure compliance, and streamline your healthcare equipment management.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
            <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Demonstration
            </button>
            <p className="mt-4 text-blue-200">
              or <a href="#" className="font-semibold underline">speak with our healthcare solutions team</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}