"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ClipboardCheck, Calendar, FileCheck, AlertTriangle, Database, ChevronDown, Stethoscope, Activity, Heart, Shield, Ambulance } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HealthcareFieldServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    { question: "What features does Fielduo offer for Healthcare Field Services?", answer: "Fielduo provides patient scheduling, medical records integration, compliance management, equipment tracking, care coordination, and emergency response specifically designed for mobile healthcare providers." },
    { question: "How can Healthcare Field Services businesses improve efficiency with field service management software?", answer: "By automating patient scheduling, coordinating multiple providers, and managing mobile resources, businesses can reduce administrative tasks, improve care delivery, and serve more patients efficiently." },
    { question: "How does the software help with regulatory compliance for Healthcare Field Services?", answer: "The platform ensures HIPAA compliance, manages healthcare privacy and safety documentation, and provides audit-ready reports for regulatory requirements." },
    { question: "Does Fielduo offer emergency response or scheduling for Healthcare Field Services?", answer: "Yes, our solution prioritizes urgent healthcare needs, enabling rapid scheduling for emergency patient visits and mobile healthcare response." },
    { question: "How does Fielduo support inventory, assets, or equipment tracking for Healthcare Field Services?", answer: "Fielduo manages mobile medical equipment, supplies, and inventory in real-time, ensuring resources are always available for patient care." },
    { question: "How does the software enhance customer communication for Healthcare Field Services?", answer: "Through patient portals, automated appointment reminders, and real-time service updates, Fielduo improves transparency and strengthens communication between providers and patients." },
    { question: "What benefits do Healthcare Field Services clients see after implementing Fielduo?", answer: "Clients experience better patient access, improved care quality, regulatory compliance, optimized resource allocation, and overall enhanced service delivery." },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
        <>
        <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Healthcare Field Service Management Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }} 
            className="max-w-3xl mx-auto text-xl text-blue-100 font-light"
          >
            Streamline mobile healthcare operations including home health services, mobile clinics, and specialized patient care with our enterprise platform.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "40%", label: "Reduction in Admin Time" },
              { value: "98%", label: "Compliance Accuracy" },
              { value: "35%", label: "Faster Response Times" },
              { value: "500+", label: "Healthcare Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Service Management</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Enterprise-grade tools designed specifically for mobile healthcare delivery</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Calendar, title: "Patient Scheduling", desc: "Optimize home visits and mobile healthcare appointments with intelligent routing" },
            { icon: Stethoscope, title: "Medical Records Integration", desc: "Secure, HIPAA-compliant access to patient information and medical histories" },
            { icon: ClipboardCheck, title: "Compliance Management", desc: "Automated tracking of HIPAA compliance and healthcare regulations" },
            { icon: Database, title: "Equipment Tracking", desc: "Comprehensive management of mobile medical equipment and supplies" },
            { icon: Users, title: "Care Coordination", desc: "Seamless multi-provider service coordination and communication" },
            { icon: Ambulance, title: "Emergency Response", desc: "Priority scheduling and rapid response for urgent healthcare needs" },
            { icon: Heart, title: "Patient Care Plans", desc: "Customizable care plans and treatment tracking for improved outcomes" },
            { icon: Shield, title: "Privacy Protection", desc: "End-to-end data encryption and privacy safeguards for patient information" },
            { icon: Activity, title: "Performance Analytics", desc: "Comprehensive reporting on service delivery and patient outcomes" },
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
      <section className="py-20 bg-blue-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Advantages for Mobile Healthcare</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Delivering accessible, compliant, and high-quality healthcare in the field</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Enhanced Patient Access", desc: "Expand healthcare services to underserved areas with optimized routing and scheduling." },
              { title: "Superior Care Quality", desc: "Comprehensive patient information and coordinated care leads to better health outcomes." },
              { title: "Regulatory Compliance", desc: "Maintain healthcare privacy and safety regulations with automated compliance tracking." },
              { title: "Optimized Resource Allocation", desc: "Efficient scheduling and resource management reduces costs and improves service delivery." },
              { title: "Improved Response Times", desc: "Rapid deployment for emergency situations with priority scheduling capabilities." },
              { title: "Data-Driven Decisions", desc: "Comprehensive analytics provide insights for continuous service improvement." },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-4 text-blue-700">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Healthcare Professionals</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { quote: "Fielduo has transformed our home healthcare operations, reducing administrative burden by 40% and improving patient satisfaction scores.", author: "Sarah Johnson, Director of Nursing", role: "Home Health Services Inc." },
              { quote: "The compliance features have been invaluable for our mobile clinic network. We've passed every audit with flying colors since implementation.", author: "Michael Chen, COO", role: "Community Health Outreach" },
            ].map((testimonial, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-xl border border-blue-100"
              >
                <div className="text-blue-700 mb-6 text-5xl">"</div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Common questions about our healthcare service management solutions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${expandedFaq === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="text-3xl font-bold mb-6"
          >
            Transform Your Healthcare Field Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="mb-8 text-xl text-blue-100 font-light max-w-2xl mx-auto"
          >
            Enhance patient care, streamline operations, and ensure compliance with our specialized healthcare management platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }} 
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Request a Demo
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              Contact Sales
            </button>
          </motion.div>
          <p className="mt-6 text-blue-200">
            or <a href="#" className="font-semibold underline">explore our healthcare solutions</a>
          </p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}