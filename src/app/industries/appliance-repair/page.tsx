"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Wrench, CheckCircle, Clock, Users, TrendingUp, Shield } from "lucide-react";
import Navabr from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ApplianceRepairPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What features does Fielduo offer for Appliance Repair?", a: "Fielduo provides comprehensive diagnostic tools, intelligent parts management, automated warranty tracking, digital service manuals, real-time customer communication, and robust quality control features specifically designed for appliance repair businesses." },
    { q: "How can Appliance Repair businesses improve efficiency with field service management software?", a: "Our platform streamlines diagnostic workflows, optimizes parts inventory management, automates scheduling processes, and maintains comprehensive repair history tracking, enabling technicians to complete jobs 40% faster with greater accuracy." },
    { q: "How does the software help with regulatory compliance for Appliance Repair?", a: "Fielduo automatically manages warranty claims processing, maintains detailed service records, and provides quality assurance documentation to ensure full compliance with manufacturer requirements and industry standards." },
    { q: "Does Fielduo offer emergency response or scheduling for Appliance Repair?", a: "Yes, our platform includes priority scheduling capabilities and instant dispatching for urgent appliance repair requests, with automated customer notifications and real-time technician tracking." },
    { q: "How does Fielduo support inventory, assets, or equipment tracking for Appliance Repair?", a: "Our integrated system provides real-time supplier connectivity, intelligent parts availability tracking, predictive inventory management, and ensures technicians have the right equipment and parts at the optimal time." },
    { q: "How does the software enhance customer communication for Appliance Repair?", a: "Customers receive automated repair status updates, completion notifications with photos, transparent pricing communication, and follow-up satisfaction surveys to build trust and loyalty." },
    { q: "What benefits do Appliance Repair clients see after implementing Fielduo?", a: "Our clients typically experience 35% faster diagnostics, 50% improvement in operational efficiency, 25% increase in customer satisfaction scores, and 20% boost in profitability within the first quarter." }
  ];

  const capabilities = [
    { icon: Wrench, title: "Advanced Diagnostic Tools", desc: "AI-powered troubleshooting guides and step-by-step repair procedures" },
    { icon: Shield, title: "Smart Parts Management", desc: "Real-time inventory tracking with automated supplier integration" },
    { icon: CheckCircle, title: "Warranty Tracking", desc: "Automated manufacturer warranty claims and compliance management" },
    { icon: Users, title: "Digital Service Manuals", desc: "Instant access to comprehensive documentation and technical specifications" }
  ];

  const benefits = [
    { icon: Clock, title: "Faster Diagnostics", desc: "Complete appliance information at your fingertips", metric: "40% faster" },
    { icon: TrendingUp, title: "Improved Efficiency", desc: "Streamlined scheduling and optimized parts management", metric: "50% improvement" },
    { icon: Users, title: "Enhanced Experience", desc: "Transparent communication throughout the service process", metric: "95% satisfaction" },
    { icon: Shield, title: "Increased Profitability", desc: "Optimized operations with intelligent upselling opportunities", metric: "20% revenue boost" }
  ];

  return (
    <>
    <Navabr />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="relative py-24 px-6 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-400/30">
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-medium">Professional Field Service Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Appliance Repair<br />Management Platform
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your appliance repair business with our comprehensive service management platform. 
            Optimize operations, enhance customer satisfaction, and drive profitability with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="border border-blue-400/50 hover:bg-blue-600/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-sm text-gray-600">Faster Diagnostics</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">20%</div>
              <div className="text-sm text-gray-600">Revenue Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Service Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your appliance repair business efficiently and professionally
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <capability.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">{capability.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Customer Communication Hub</div>
                    <div className="text-gray-600 text-sm">Automated repair status updates and notifications</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Quality Control Systems</div>
                    <div className="text-gray-600 text-sm">Service checklists and satisfaction tracking</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Mobile Technician App</div>
                    <div className="text-gray-600 text-sm">Complete job management on any device</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Business Impact</h4>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <benefit.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 text-sm flex-1">{benefit.title}</span>
                    <span className="text-blue-600 font-semibold text-sm">{benefit.metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our appliance repair field service management platform
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of appliance repair professionals who have already optimized their operations with Fielduo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="border border-blue-300 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
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