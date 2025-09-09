"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import { TrendingUp, DollarSign, Users, Clock, CheckCircle, ArrowRight, BarChart3, Target, Zap, Shield } from "lucide-react";

function OverviewImpact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Fielduo?",
      answer: "Fielduo is a comprehensive field service management platform that transforms chaotic operations into streamlined, profitable workflows. We provide intelligent scheduling, real-time tracking, automated dispatching, and powerful analytics to help service businesses maximize efficiency and revenue."
    },
    {
      question: "How does Fielduo reduce hidden costs?",
      answer: "Fielduo eliminates hidden costs through AI-powered route optimization (reducing fuel costs by 30%), smart scheduling that maximizes daily job completion (47% increase), automated workflows that reduce administrative overhead, and real-time communication that prevents costly delays and rework."
    },
    {
      question: "What ROI can I expect?",
      answer: "Our clients typically see 300%+ ROI within the first year. This comes from increased job capacity, reduced operational costs, improved first-time fix rates, and enhanced customer satisfaction leading to higher retention and referrals."
    },
    {
      question: "Which key metrics improve with Fielduo?",
      answer: "Key improvements include: 47% increase in daily job completion, 30% reduction in travel costs, 88% first-time fix rate, 40% boost in technician productivity, 25% improvement in customer satisfaction scores, and 60% reduction in administrative time."
    }
  ];

  const impactMetrics = [
    { icon: TrendingUp, label: "Revenue Increase", value: "300%+", description: "ROI in Year One" },
    { icon: Target, label: "Job Completion", value: "47%", description: "More daily jobs completed" },
    { icon: DollarSign, label: "Cost Savings", value: "30%", description: "Reduction in travel costs" },
    { icon: CheckCircle, label: "First-Time Fix", value: "88%", description: "Success rate improvement" },
    { icon: Users, label: "Productivity", value: "40%", description: "Technician efficiency boost" },
    { icon: Clock, label: "Response Time", value: "60%", description: "Faster customer service" }
  ];

  const problemAreas = [
    { icon: DollarSign, title: "Lost Revenue", description: "Without smart scheduling, you're missing 47% more daily jobs", color: "red" },
    { icon: Zap, title: "Wasted Fuel", description: "Inefficient routing increases mileage costs by 30%", color: "orange" },
    { icon: Users, title: "Customer Churn", description: "76% of clients leave after just one bad experience", color: "yellow" },
    { icon: Shield, title: "Technician Frustration", description: "Low retention and productivity without real-time tools", color: "purple" }
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <BarChart3 className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Transform Your Field Operations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Overview & 
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Impact
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed text-blue-100">
              Transform your field service operations. Stop losing money on chaos and unlock exponential growth with Fielduo's intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                See Live Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
                Learn More <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-gray-500">{metric.label}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Problem Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Problem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every minute your technicians run late, your customers are left waiting, and your back office drowns in paperwork—
              you're bleeding revenue. Fielduo replaces chaos with clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {problemAreas.map((problem, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  problem.color === 'red' ? 'from-red-500 to-red-600' :
                  problem.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  problem.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                  'from-purple-500 to-purple-600'
                } rounded-xl flex items-center justify-center mb-4`}>
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">The Hidden Cost of Chaos</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">Lost Revenue:</span> Inefficient scheduling costs you 47% more potential daily jobs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">Operational Waste:</span> Poor routing increases operational costs by 30%</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">Customer Loss:</span> 76% of clients leave after one bad service experience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-semibold">Team Burnout:</span> Manual processes lead to high turnover and low productivity</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Proven Business Impact</h3>
                <div className="space-y-4">
                  {[
                    { metric: "300%+ ROI", description: "Return on investment in Year One", color: "green" },
                    { metric: "47% boost", description: "In daily job completion rate", color: "blue" },
                    { metric: "30% savings", description: "On travel and fuel costs", color: "indigo" },
                    { metric: "88% success", description: "First-time fix rate achievement", color: "purple" },
                    { metric: "40% increase", description: "In technician productivity", color: "cyan" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className={`font-bold text-lg text-${item.color}-600`}>{item.metric}</span>
                      <span className="text-sm text-gray-600 text-right">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-20 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Get answers to common questions about Fielduo's impact and capabilities</p>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function Page() {
  return <OverviewImpact />;
}