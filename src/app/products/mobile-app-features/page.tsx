"use client";

import React, { useState } from 'react';
import { 
  Smartphone, 
  Wifi,
  WifiOff,
  ClipboardCheck,
  Camera,
  FileText,
  MapPin,
  Users,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  Apple,
  PlayCircle,
  Zap,
  Shield,
  Package,
  Navigation
} from 'lucide-react';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

const MobileAppFeaturesPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const coreFeatures = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      title: "Complete Job Information",
      items: [
        "Customer Profile & Service History",
        "Equipment Specifications",
        "Service Instructions & Checklists"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-600" />,
      title: "Digital Forms & Compliance",
      items: [
        "Customizable Digital Checklists",
        "Automated Data Validation",
        "Compliance Tracking"
      ]
    },
    {
      icon: <Camera className="w-8 h-8 text-red-500" />,
      title: "Photo & Video Capture",
      description: "Document job conditions, before/after results, and parts used with images/videos attached to work orders."
    },
    {
      icon: <Package className="w-8 h-8 text-slate-600" />,
      title: "Inventory Management",
      items: [
        "Real-Time Parts Usage",
        "On-Demand Replenishment",
        "Parts Availability Alerts"
      ]
    },
    {
      icon: <Navigation className="w-8 h-8 text-blue-600" />,
      title: "GPS Navigation & Routing",
      description: "Integrated mapping with AI-optimized routes and live traffic updates."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Team Collaboration",
      description: "Instantly share updates, photos, and notes with dispatchers and office staff."
    }
  ];

  const faqs = [
    {
      question: "Which platforms does the mobile app support?",
      answer: "Our mobile application is available as native apps for both iOS and Android platforms, ensuring optimal performance and user experience on all modern smartphones and tablets."
    },
    {
      question: "What compliance features are built in?",
      answer: "The app includes customizable digital checklists, automated data validation, and comprehensive compliance tracking to ensure all regulatory requirements are met and documented properly."
    },
    {
      question: "How is inventory managed on the app?",
      answer: "The app provides real-time parts usage tracking, on-demand replenishment requests, and parts availability alerts to ensure technicians always have the components they need for successful job completion."
    },
    {
      question: "Does the app include GPS navigation?",
      answer: "Yes, the app features integrated mapping with AI-optimized route planning and live traffic updates to help technicians reach customers efficiently and on time."
    }
  ];

  return (
    < >
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-4 rounded-full">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Mobile App Features
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed">
              Empower your field technicians with a mobile app designed for excellence—whether online or offline. 
              Fielduo's native iOS and Android applications put everything needed for first-time fixes in the palm 
              of their hands, boosting productivity, accuracy, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Offline-First Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Seamless Offline-First Design
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Technicians never miss a beat, even in remote locations without connectivity. 
                Data syncs automatically once online.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-2 rounded-full">
                  <WifiOff className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-lg text-gray-700">Works completely offline</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Wifi className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-lg text-gray-700">Auto-sync when connected</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-12 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Mobile Sync Status</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Offline mode active</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Local data cached</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">Ready to sync when online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Mobile Capabilities
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                {feature.items ? (
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronic Signatures Feature */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-12 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Digital Signature</span>
                </div>
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
                  <span className="text-gray-500">Customer signature area</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Electronic Signatures
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Capture customer sign-off securely for completed jobs, safety disclaimers, and 
                change orders. Eliminate paperwork and ensure legal compliance with tamper-proof 
                digital signatures.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-lg text-gray-700">Secure & legally compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get the Fielduo Mobile App
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Download our native mobile application and start empowering your field technicians today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center gap-3 min-w-[200px]">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg">App Store</div>
              </div>
            </button>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center gap-3 min-w-[200px]">
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-green-100">Get it on</div>
                <div className="text-lg">Play Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mobile App Features — FAQs
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Fielduo Mobile?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for field service excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <WifiOff className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Offline Ready</h3>
              <p className="text-gray-600">Work anywhere, sync everywhere</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-200">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for field performance</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Secure & Compliant</h3>
              <p className="text-gray-600">Enterprise-grade security</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-200">
                <CheckCircle className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Field Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join thousands of field service professionals who trust Fielduo to deliver 
            exceptional customer experiences every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default MobileAppFeaturesPage;