"use client";

import React from "react";
import { Rocket, PlugZap, Shield, Clock, Users, CheckCircle } from "lucide-react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const ImplementationSupport: React.FC = () => {
  const faqs = [
    {
      question: "What is the typical deployment timeline?",
      answer: "Standard deployments are completed within 4-6 weeks, including configuration, testing, and user training. Enterprise implementations may require 8-12 weeks depending on complexity and integration requirements."
    },
    {
      question: "What training programs are included?",
      answer: "We provide comprehensive role-based training including live sessions, video tutorials, and hands-on workshops. Training covers platform administration, end-user functionality, and best practices for your specific workflows."
    },
    {
      question: "What level of post-launch support do you provide?",
      answer: "Our support includes 24/7 technical assistance, regular health checks, performance optimization, and dedicated customer success management to ensure continuous value realization."
    },
    {
      question: "Which enterprise systems integrate out of the box?",
      answer: "Pre-built connectors are available for Salesforce, Microsoft Dynamics 365, SAP, Oracle, ServiceNow, and 50+ other enterprise applications. Custom integrations can be developed as needed."
    },
    {
      question: "Can custom integrations be developed?",
      answer: "Yes, our integration team can develop custom connectors using our robust API framework. We also provide comprehensive documentation and developer resources for in-house development."
    },
    {
      question: "How do you ensure secure data migration?",
      answer: "We follow enterprise-grade security protocols including encrypted transfers, data validation checkpoints, and rollback procedures. All migrations are thoroughly tested in staging environments before production deployment."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Accelerated Time-to-Value",
      description: "Get operational within weeks, not months, with our proven deployment methodology"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant processes with end-to-end encryption and audit trails"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Dedicated implementation specialists with deep industry expertise"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Implementation & Support Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Accelerate your digital transformation with our comprehensive implementation services. 
                From initial deployment to ongoing optimization, we ensure your success every step of the way.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Services */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Implementation Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures rapid deployment with minimal business disruption
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Professional Deployment */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Professional Deployment
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Strategic Planning & Discovery</h4>
                  <p className="text-sm">Comprehensive business requirements analysis and technical architecture design</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Accelerated Configuration</h4>
                  <p className="text-sm">Platform setup optimized for your specific business processes and compliance requirements</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Professional Training Programs</h4>
                  <p className="text-sm">Role-specific certification programs for administrators, managers, and end users</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Go-Live Support & Monitoring</h4>
                  <p className="text-sm">Dedicated support during launch with real-time performance monitoring and optimization</p>
                </div>
              </div>
            </div>

            {/* Enterprise Integration */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <PlugZap className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Enterprise Integration
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Pre-Built Enterprise Connectors</h4>
                  <p className="text-sm">Native integrations with Salesforce, SAP, Oracle, Microsoft Dynamics, and 100+ business applications</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Advanced API Framework</h4>
                  <p className="text-sm">RESTful APIs, webhooks, and real-time data synchronization capabilities</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Secure Data Migration</h4>
                  <p className="text-sm">Enterprise-grade migration with validation, testing, and zero-downtime cutover</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Custom Workflow Engine</h4>
                  <p className="text-sm">Configure approval chains, compliance rules, and automated business processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tiers */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ongoing Support & Success
              </h2>
              <p className="text-lg text-gray-600">
                Choose the support level that matches your business requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Standard Support */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard Support</h3>
                  <p className="text-gray-600 text-sm">Included with all plans</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Business hours support (8x5)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Online knowledge base</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Community forums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Monthly platform updates</span>
                  </li>
                </ul>
              </div>

              {/* Premium Support */}
              <div className="border-2 border-blue-500 rounded-xl p-6 relative bg-blue-50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                    RECOMMENDED
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Support</h3>
                  <p className="text-gray-600 text-sm">Enhanced service level</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Quarterly business reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Priority feature requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Support */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Support</h3>
                  <p className="text-gray-600 text-sm">White-glove service</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Named technical architect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Custom SLA agreements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Strategic roadmap planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Custom development services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Executive reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach developed from hundreds of successful enterprise deployments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: "Discovery", duration: "Week 1-2", description: "Requirements gathering, stakeholder interviews, and technical assessment" },
              { phase: "Configuration", duration: "Week 3-4", description: "Platform setup, workflow design, and initial integration development" },
              { phase: "Testing & Training", duration: "Week 5-6", description: "User acceptance testing, training delivery, and performance validation" },
              { phase: "Go-Live & Optimization", duration: "Week 7+", description: "Production deployment, monitoring, and continuous improvement" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.phase}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{step.duration}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Begin Your Implementation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join over 2,000+ organizations that have successfully deployed our platform. 
              Schedule a consultation with our implementation specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Download Implementation Guide
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common implementation and support questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <summary className="p-6 cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-6 h-6 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm group-open:bg-blue-600 group-open:text-white transition-colors">
                        +
                      </div>
                    </div>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Need Additional Information?
            </h3>
            <p className="text-gray-600 mb-4">
              Our implementation experts are standing by to answer your specific questions.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Contact Implementation Team →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImplementationSupport;