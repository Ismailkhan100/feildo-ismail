"use client";

import { useState } from "react";
import { ChevronDown, Droplets, Zap, Shield, Users, TrendingUp, Wrench, AlertCircle, Clock } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function PlumbingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: "What features does Fielduo offer for Plumbing?", 
      a: "Fielduo provides comprehensive plumbing-specific features including emergency response dispatch, pipe inspection documentation, water quality monitoring, hydro-jetting scheduling, compliance management, and service history tracking to streamline all aspects of plumbing operations." 
    },
    { 
      q: "How can Plumbing businesses improve efficiency with field service management software?", 
      a: "Our platform automates job scheduling, optimizes technician routes, provides real-time job tracking, manages inventory levels, and maintains detailed service histories. This reduces administrative overhead, minimizes travel time, and enables faster response to customer needs." 
    },
    { 
      q: "How does the software help with regulatory compliance for Plumbing?", 
      a: "Fielduo maintains comprehensive digital records including inspection reports, water quality test results, permit tracking, safety compliance checklists, and certification management. Automated reminders ensure timely renewals and compliance audits." 
    },
    { 
      q: "Does Fielduo offer emergency response or scheduling for Plumbing?", 
      a: "Yes, our platform features 24/7 emergency dispatch capabilities with priority scheduling, real-time GPS tracking of technicians, automated customer notifications, and mobile access for immediate response to urgent plumbing emergencies." 
    },
    { 
      q: "How does Fielduo support inventory, assets, or equipment tracking for Plumbing?", 
      a: "Our system includes comprehensive asset management with equipment maintenance schedules, parts inventory tracking with automated reorder points, tool tracking, vehicle management, and integration with plumbing supply catalogs to ensure optimal resource allocation." 
    },
    { 
      q: "How does the software enhance customer communication for Plumbing?", 
      a: "Fielduo offers automated appointment confirmations, real-time service updates via SMS and email, digital work order completion with photos, customer portals for service history access, and proactive maintenance reminders to build stronger customer relationships." 
    },
    { 
      q: "What benefits do Plumbing clients see after implementing Fielduo?", 
      a: "Clients typically experience 30-45% faster emergency response times, 25% increase in job completion rates, improved customer satisfaction scores, better cash flow through faster invoicing, and significant reduction in compliance-related issues within the first quarter." 
    }
  ];

  const capabilities = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Emergency Response System",
      description: "24/7 dispatch capabilities with priority scheduling and real-time technician tracking for urgent plumbing emergencies."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Quality Monitoring",
      description: "Comprehensive testing documentation, compliance tracking, and automated reporting for water quality standards."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Digital inspection records, permit tracking, safety checklists, and automated compliance reminders."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Specialized Service Tracking",
      description: "Hydro-jetting scheduling, pipe inspection documentation, and specialized equipment management."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Portal Access",
      description: "Self-service customer portals with service history, appointment scheduling, and real-time job updates."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Preventive Maintenance",
      description: "Automated maintenance scheduling, service reminders, and proactive system health monitoring."
    }
  ];

  const advantages = [
    {
      title: "Reduce Emergency Response Time",
      description: "Optimize dispatch operations and technician routing to achieve industry-leading response times for critical plumbing emergencies.",
      metric: "40% faster response"
    },
    {
      title: "Increase Job Revenue",
      description: "Maximize revenue through efficient scheduling, upselling opportunities, and comprehensive service documentation.",
      metric: "25-35% revenue growth"
    },
    {
      title: "Enhance Customer Trust",
      description: "Build stronger customer relationships through transparent communication, professional service delivery, and reliable follow-up.",
      metric: "90%+ satisfaction rate"
    },
    {
      title: "Streamline Operations",
      description: "Eliminate administrative bottlenecks, reduce paperwork, and automate routine tasks to focus on core business growth.",
      metric: "50% less admin time"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Plumbing
                <span className="block text-blue-200">Business Management</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Transform your plumbing operations with Fielduo's specialized management platform. 
                Handle emergencies efficiently, ensure compliance, and deliver exceptional service that builds lasting customer relationships.
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

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Plumbing-Focused Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Purpose-built tools designed specifically for plumbing professionals to handle the unique challenges of your industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600 mr-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Measurable Business Advantages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of plumbing businesses experiencing significant improvements in efficiency, customer satisfaction, and profitability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{advantage.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {advantage.metric}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{advantage.description}</p>
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
                Get answers to common questions about Fielduo's plumbing field service management solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-6 h-6 text-blue-600 transition-transform flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.a}
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
              Ready to Transform Your Plumbing Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Join the growing community of plumbing professionals who trust Fielduo to streamline their operations and accelerate growth.
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