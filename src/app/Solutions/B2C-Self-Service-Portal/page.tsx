"use client";

import React from "react";
import { Calendar, History, UserCog, CreditCard, BookOpen, MessageCircle, ArrowRight, Shield, Clock, Users } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const B2CPortal: React.FC = () => {
  return (
    <>
        <Navbar />
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Customer Self-Service Portal
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Streamline your customer experience with 24/7 access to scheduling, account management, and comprehensive self-help resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Always Available</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Secure & Encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Self-Service Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Meet the evolving expectations of modern customers with an intuitive, mobile-first platform that empowers users to manage their entire service experience independently while reducing operational overhead.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Intelligent Scheduling
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced real-time calendar integration with automated availability detection, instant confirmations, and smart conflict resolution.
              </p>
              <div className="text-blue-600 font-medium text-sm flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                <History className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Complete Service History
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive digital records with detailed technician notes, invoice history, and advanced search capabilities for quick reference.
              </p>
              <div className="text-green-600 font-medium text-sm flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <UserCog className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Account Management
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Full profile control with preference settings, notification management, and personalized dashboard configuration.
              </p>
              <div className="text-purple-600 font-medium text-sm flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-amber-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <CreditCard className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure Payment Processing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enterprise-grade encryption supporting multiple payment methods including cards, bank transfers, and digital wallets.
              </p>
              <div className="text-amber-600 font-medium text-sm flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Knowledge Center
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive resource library with interactive tutorials, video guides, and searchable documentation for self-resolution.
              </p>
              <div className="text-indigo-600 font-medium text-sm flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-rose-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                <MessageCircle className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Integrated Communication
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Seamless messaging system with real-time notifications, file sharing, and escalation workflows for complex issues.
              </p>
              <div className="text-rose-600 font-medium text-sm flex items-center gap-1">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Customer Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce support costs while increasing customer satisfaction through intelligent automation and self-service capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce Support Volume</h3>
                  <p className="text-gray-600">Enable customers to resolve 80% of common inquiries independently through self-service tools.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Increase Satisfaction</h3>
                  <p className="text-gray-600">Provide instant access to information and services when customers need them most.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale Efficiently</h3>
                  <p className="text-gray-600">Handle growing customer bases without proportional increases in support staff.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">Join thousands of businesses already using our platform to enhance customer experience.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our self-service portal
            </p>
          </div>
          
          <div className="space-y-6">
            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                What comprehensive features does the self-service portal offer?
                <span className="text-blue-600 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  Our portal provides a complete suite of customer management tools including intelligent scheduling with real-time availability, comprehensive service history tracking, secure account management, multi-channel payment processing, an extensive knowledge base, and integrated communication systems.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                How does the 24/7 scheduling system work?
                <span className="text-blue-600 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  The scheduling system provides round-the-clock access to real-time availability, intelligent slot recommendations based on preferences, automated confirmation workflows, and seamless calendar integration with mobile notifications.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                What security measures protect payment processing?
                <span className="text-blue-600 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  All transactions are secured with industry-standard encryption, PCI DSS compliance, multi-factor authentication, and support for major payment methods including credit cards, bank transfers, and popular digital wallets.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                What type of self-help resources are available?
                <span className="text-blue-600 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  The knowledge center features interactive tutorials, HD video guides, searchable FAQs, downloadable resources, troubleshooting wizards, and community forums to help customers find solutions quickly and independently.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
              <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
                How does the integrated communication system function?
                <span className="text-blue-600 group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  Our communication platform enables direct messaging with service teams, real-time status updates, file sharing capabilities, automated escalation for urgent matters, and comprehensive conversation history tracking.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join leading businesses who trust our platform to deliver exceptional self-service experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default B2CPortal;