"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Factory, Database, ShieldCheck, AlertTriangle, Package, 
  BarChart2, ChevronDown, Clock, ClipboardList, DollarSign, 
  Wrench, Cpu, Settings, TrendingUp, HeadphonesIcon 
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ManufacturingServicesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    { 
      question: "What specialized features does Fielduo offer for Manufacturing operations?", 
      answer: "Fielduo provides predictive maintenance scheduling, IoT-enabled equipment monitoring, asset lifecycle management, safety compliance tracking, emergency response coordination, spare parts inventory management, and performance analytics specifically designed for manufacturing environments." 
    },
    { 
      question: "How can Manufacturing businesses improve operational efficiency with field service management software?", 
      answer: "By leveraging IoT-enabled monitoring, predictive analytics, automated scheduling, and optimized resource allocation, manufacturing businesses can reduce equipment downtime by up to 45%, improve workforce productivity, and decrease maintenance costs by 20-30%." 
    },
    { 
      question: "How does the software ensure regulatory compliance for Manufacturing operations?", 
      answer: "Our platform includes digital safety protocol enforcement, automated compliance tracking, audit-ready documentation, real-time OSHA compliance alerts, and comprehensive reporting features that ensure adherence to industrial regulations and standards." 
    },
    { 
      question: "Does Fielduo support emergency response and priority scheduling for critical manufacturing equipment?", 
      answer: "Yes, Fielduo provides rapid emergency dispatch protocols with prioritized scheduling for critical equipment failures, minimizing production downtime through instant technician alerts and automated escalation procedures." 
    },
    { 
      question: "How does Fielduo handle inventory, assets, and equipment tracking for Manufacturing?", 
      answer: "Our solution includes full lifecycle asset management with real-time tracking, automated spare parts inventory management, equipment maintenance history, warranty tracking, and predictive replacement scheduling to optimize manufacturing operations." 
    },
    { 
      question: "How does the software enhance communication with manufacturing clients and stakeholders?", 
      answer: "Clients benefit from transparent operational reporting, real-time equipment status updates, dedicated service portals, and streamlined communication channels with technical support teams, ensuring complete visibility into service operations." 
    },
    { 
      question: "What measurable benefits do Manufacturing clients typically experience after implementing Fielduo?", 
      answer: "Manufacturers typically experience 30-50% reduction in unplanned downtime, 25% improvement in maintenance efficiency, 15-20% reduction in inventory carrying costs, and significant improvements in regulatory compliance and safety metrics." 
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Manufacturing Equipment Service Management
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6 }} 
            className="max-w-3xl mx-auto text-xl text-blue-100 font-light"
          >
            Optimize manufacturing equipment maintenance, reduce downtime, and enhance operational efficiency with our specialized industrial management platform.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "45%", label: "Reduction in Downtime" },
              { value: "30%", label: "Maintenance Cost Savings" },
              { value: "98%", label: "Compliance Accuracy" },
              { value: "250+", label: "Manufacturing Clients" },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Manufacturing Service Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Enterprise-grade tools designed specifically for industrial equipment management and maintenance</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Clock, title: "Predictive Maintenance", desc: "IoT-enabled equipment monitoring with predictive analytics to prevent failures before they occur" },
            { icon: Database, title: "Asset Management", desc: "Comprehensive industrial equipment tracking with full lifecycle documentation and history" },
            { icon: ShieldCheck, title: "Safety & Compliance", desc: "Digital safety procedures, compliance tracking, and audit-ready documentation" },
            { icon: AlertTriangle, title: "Emergency Response", desc: "Rapid dispatch protocols for critical equipment failures with priority escalation" },
            { icon: Package, title: "Inventory Management", desc: "Industrial spare parts inventory tracking with automated procurement alerts" },
            { icon: BarChart2, title: "Performance Analytics", desc: "Equipment performance monitoring with actionable insights for optimization" },
            { icon: Wrench, title: "Preventive Maintenance", desc: "Scheduled maintenance programs with automated work order generation" },
            { icon: Cpu, title: "IoT Integration", desc: "Seamless connectivity with industrial IoT devices and monitoring systems" },
            { icon: Settings, title: "Equipment Configuration", desc: "Centralized management of equipment specifications and service requirements" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Manufacturing Advantages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Drive operational excellence with measurable business outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Minimize Production Downtime", desc: "Predictive maintenance and rapid emergency response reduce equipment failures and maximize production uptime." },
              { title: "Enhance Workplace Safety", desc: "Digital safety protocols and compliance tracking create safer work environments and reduce incidents." },
              { title: "Optimize Equipment Performance", desc: "Data-driven maintenance strategies and performance analytics extend equipment lifespan and efficiency." },
              { title: "Reduce Operational Costs", desc: "Efficient resource allocation, inventory optimization, and preventive maintenance lower total cost of ownership." },
              { title: "Ensure Regulatory Compliance", desc: "Automated compliance tracking and audit-ready documentation minimize regulatory risks." },
              { title: "Improve Decision Making", desc: "Comprehensive analytics provide actionable insights for continuous operational improvement." },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Manufacturing Leaders</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { quote: "Fielduo has transformed our maintenance operations, reducing unplanned downtime by 45% and saving over $200,000 annually in maintenance costs.", author: "James Wilson, Plant Manager", role: "Precision Manufacturing Inc." },
              { quote: "The compliance features have been invaluable for our multi-site operations. We've streamlined safety protocols and passed all regulatory audits with ease.", author: "Lisa Chen, Operations Director", role: "Advanced Industrial Systems" },
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
            <p className="text-gray-600 max-w-2xl mx-auto">Common questions about our manufacturing service management solutions</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="text-3xl font-bold mb-6"
            >
            Transform Your Manufacturing Operations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="mb-8 text-xl text-blue-100 font-light max-w-2xl mx-auto"
            >
            Reduce downtime, enhance safety, and optimize equipment performance with our specialized manufacturing management platform.
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
            or <a href="#" className="font-semibold underline">explore our manufacturing solutions</a>
          </p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}