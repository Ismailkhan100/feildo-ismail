"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, TrendingUp, Clock, DollarSign, Target, Users } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const FielduoLandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const metrics = [
    {
      metric: 'ROI (Year One)',
      improvement: '300%+',
      trend: 'up',
      icon: TrendingUp
    },
    {
      metric: 'Daily Job Completion',
      improvement: '+47%',
      trend: 'up',
      icon: Target
    },
    {
      metric: 'Fuel & Travel Costs',
      improvement: '-30%',
      trend: 'down',
      icon: DollarSign
    },
    {
      metric: 'First-Time Fix Rate',
      improvement: '88%',
      trend: 'up',
      icon: Target
    },
    {
      metric: 'Technician Productivity',
      improvement: '+40%',
      trend: 'up',
      icon: Users
    },
    {
      metric: 'Customer Satisfaction',
      improvement: 'Significant ↑',
      trend: 'up',
      icon: Users
    }
  ];

  const highlights = [
    {
      title: '47% More Jobs Per Day',
      description: 'Intelligent technician matching and real-time route optimization dramatically increases daily throughput and operational efficiency.',
      icon: Target
    },
    {
      title: '30% Reduction in Travel Costs',
      description: 'Advanced routing algorithms and live traffic analysis minimize fuel consumption and vehicle wear while maximizing billable work hours.',
      icon: DollarSign
    },
    {
      title: '88% First-Time Fix Rate',
      description: 'Complete job history and customer details accessible on mobile devices enable technicians to resolve issues correctly on the first visit.',
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: 'What performance metrics can I track with Fielduo?',
      answer: 'Track comprehensive KPIs including job completion rates, technician productivity, customer satisfaction scores, first-time fix rates, travel costs, overtime expenses, and real-time operational efficiency metrics.'
    },
    {
      question: 'How are performance improvements measured and reported?',
      answer: 'Our analytics dashboard provides real-time insights with customizable reporting. Track progress through automated weekly and monthly reports, compare period-over-period performance, and receive actionable recommendations for continuous improvement.'
    },
    {
      question: 'Can you share specific client success stories?',
      answer: 'Our clients consistently achieve remarkable results. For example, Acme Plumbing reduced overtime expenses by 25% and improved their customer satisfaction score by 20 points within just six months of implementation.'
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                  <div className="text-center">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                          Measurable Results with <span className="text-blue-200">Fielduo</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                          Transform your field operations—enhance team performance, cut operational costs, and exceed customer expectations through data-driven optimization.
                      </p>
                      <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                          Get Your ROI Analysis
                          <ArrowRight className="inline ml-2 w-5 h-5" />
                      </button>
                  </div>
              </div>
          </div>

          {/* Performance Metrics Section */}
          <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          Performance Impact Overview
                      </h2>
                      <p className="text-xl text-gray-600">
                          Real metrics from real clients achieving extraordinary results
                      </p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                          <div className="text-xl font-semibold">Key Performance Indicator</div>
                          <div className="text-xl font-semibold text-right">Results Achieved</div>
                      </div>
                      {metrics.map((item, index) => {
                          const Icon = item.icon;
                          return (
                              <div key={index} className="grid grid-cols-1 md:grid-cols-2 p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                                      <Icon className="w-5 h-5 text-blue-600" />
                                      <span className="text-gray-800 font-medium">{item.metric}</span>
                                  </div>
                                  <div className="text-right">
                                      <span className={`text-2xl font-bold ${item.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                                          {item.improvement}
                                      </span>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>

          {/* Key Benefits Section */}
          <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {highlights.map((highlight, index) => {
                          const Icon = highlight.icon;
                          return (
                              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                  <div className="flex items-center mb-4">
                                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                          <Icon className="w-6 h-6 text-blue-600" />
                                      </div>
                                      <h3 className="text-xl font-bold text-blue-600">{highlight.title}</h3>
                                  </div>
                                  <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>

          {/* Client Testimonial */}
          <div className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border-l-4 border-blue-600">
                      <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                          "Within six months of implementing Fielduo, we achieved a 25% reduction in overtime costs and saw our customer satisfaction scores improve by 20 points. The transformation has been remarkable."
                      </blockquote>
                      <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                              SP
                          </div>
                          <div>
                              <div className="font-semibold text-gray-900">Sarah Patel</div>
                              <div className="text-blue-600">COO, Acme Plumbing Solutions</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* FAQ Section */}
          <div className="py-20 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          Performance Results — Frequently Asked Questions
                      </h2>
                  </div>

                  <div className="space-y-4">
                      {faqs.map((faq, index) => (
                          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                              <button
                                  onClick={() => toggleFaq(index)}
                                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                              >
                                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                  {openFaq === index ? (
                                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                  ) : (
                                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                  )}
                              </button>
                              {openFaq === index && (
                                  <div className="px-6 pb-5">
                                      <div className="border-l-4 border-blue-600 pl-4">
                                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                      </div>
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Ready to Transform Your Operations?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                      Join successful companies already achieving measurable improvements with Fielduo
                  </p>
                  <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                      Request Your ROI Forecast
                      <ArrowRight className="inline ml-2 w-5 h-5" />
                  </button>
              </div>
          </div>
      </div>
      <Footer />
      </>
  );
};

export default FielduoLandingPage;