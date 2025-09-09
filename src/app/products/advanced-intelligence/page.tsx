"use client";

import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Route, 
  Shield, 
  MessageSquare, 
  TrendingUp, 
  Monitor, 
  Settings, 
  Eye, 
  BarChart3, 
  DollarSign,
  ChevronDown,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

const AdvancedIntelligencePage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const aiFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Predictive Scheduling",
      description: "Leverage historical job data, technician performance, and seasonal trends to forecast demand. Our AI automatically allocates the right technician at the right time—minimizing idle time and maximizing billable hours."
    },
    {
      icon: <Route className="w-8 h-8 text-blue-600" />,
      title: "Smart Route Planning",
      description: "Go beyond basic GPS with dynamic route optimization. Real-time traffic, weather, and job priority feeds adjust routes on the fly, slashing travel time and fuel costs by up to 30%."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Preventive Maintenance Alerts",
      description: "Identify early warning signs of equipment failure by applying anomaly detection to service histories and performance metrics. Receive automated alerts so you can schedule maintenance before costly breakdowns occur."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Customer Sentiment Analysis",
      description: "Mine customer feedback—surveys, call notes, and social reviews—to gauge satisfaction. Natural language processing highlights pain points and emerging service issues, enabling you to address concerns before they escalate into churn."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Demand Forecasting",
      description: "Predict service volumes and resource needs weeks or months in advance. Use these insights for smarter staffing, parts stocking, and budget planning, ensuring you're never caught off guard by spikes in service requests."
    }
  ];

  const iotFeatures = [
    {
      icon: <Monitor className="w-8 h-8 text-emerald-600" />,
      title: "Real-Time Equipment Monitoring",
      description: "Stream sensor data—temperature, pressure, runtime hours—directly into Fielduo. Monitor asset health continuously and visualize trends with built-in dashboards."
    },
    {
      icon: <Settings className="w-8 h-8 text-emerald-600" />,
      title: "Automatic Work Order Generation",
      description: "Link IoT alerts to your work order engine. When a sensor breach or anomaly is detected, Fielduo auto-creates a service request, complete with customer info, location, and fault description."
    },
    {
      icon: <Eye className="w-8 h-8 text-emerald-600" />,
      title: "Remote Diagnostics",
      description: "Technicians or support staff can access live device telemetry to troubleshoot issues before dispatching. Reduce unnecessary site visits and accelerate resolution times."
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Performance Analytics",
      description: "Drive data-backed decisions with comprehensive reports on equipment utilization, failure rates, and maintenance costs. Identify top-performing assets and under-serviced locations to optimize your service portfolio."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: "New Revenue Streams",
      description: "Monetize continuous monitoring by offering premium maintenance contracts and alert-based service packages. Differentiate your business with value-added IoT services that cement customer loyalty."
    }
  ];

  const faqs = [
    {
      question: "What predictive analytics capabilities are offered?",
      answer: "Our AI suite includes demand forecasting, predictive scheduling, equipment failure prediction, and customer sentiment analysis. These capabilities help you move from reactive to proactive service delivery."
    },
    {
      question: "How does preventive maintenance work?",
      answer: "We use anomaly detection algorithms to analyze service histories and performance metrics, identifying patterns that indicate potential equipment failures. You receive automated alerts to schedule maintenance before breakdowns occur."
    },
    {
      question: "Can I integrate IoT devices?",
      answer: "Yes, our platform supports seamless IoT integration with real-time sensor data streaming, automatic work order generation based on alerts, and remote diagnostic capabilities."
    },
    {
      question: "How is customer sentiment analyzed?",
      answer: "We use natural language processing to analyze customer feedback from surveys, call notes, and social reviews. The system highlights pain points and emerging service issues to help you address concerns proactively."
    }
  ];

  return (
    < >
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Advanced Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Elevate your field service operations with Fielduo's Advanced Intelligence suite, 
              combining AI-driven insights and IoT integration to move you from reactive to 
              truly proactive service delivery. Harness predictive analytics, real-time 
              equipment monitoring, and automated workflows to reduce downtime, 
              optimize resources, and unlock new revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Intelligence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Intelligence
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Integration Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              IoT Integration for Proactive Service
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {iotFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-lg border border-purple-100">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Unlock Predictive Power and Connectivity
          </h2>
          <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
            With Fielduo's Advanced Intelligence, you're not just managing field service—you're 
            anticipating needs, preventing disruptions, and delivering a superior customer experience 
            at every touchpoint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              Start Your Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Intelligence — FAQs
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
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

      {/* Features Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Field Service Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of predictive analytics and IoT integration working together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Driven Insights</h3>
              <p className="text-gray-600 text-sm">Smart predictions and recommendations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600 text-sm">Continuous equipment oversight</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Automated Workflows</h3>
              <p className="text-gray-600 text-sm">Streamlined service processes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Revenue Growth</h3>
              <p className="text-gray-600 text-sm">New service opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AdvancedIntelligencePage;