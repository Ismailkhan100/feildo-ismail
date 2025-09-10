"use client";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { 
  Lock, 
  Shield, 
  MapPin, 
  FileText, 
  Clock,
  PhoneCall,
  Package,
  BarChart3,
  CheckCircle,
  Users,
  Building2,
  Zap,
  Target,
  ArrowRight,
  Play,
  ChevronDown,
  Key,
  Route,
  MessageSquare,
  TrendingUp
} from "lucide-react";

function LocksmithServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const keyFeatures = [
    {
      icon: PhoneCall,
      title: "24/7 Emergency Dispatch",
      description: "Round-the-clock emergency lockout service with intelligent dispatching"
    },
    {
      icon: FileText,
      title: "Job & Service History Tracking",
      description: "Complete digital records of all services performed for each customer"
    },
    {
      icon: Route,
      title: "GPS & Route Optimization",
      description: "AI-powered routing gets technicians to jobs faster, saving time and fuel"
    },
    {
      icon: Package,
      title: "Lock Hardware Inventory",
      description: "Track lock inventory, keys, and supplies with automated reordering"
    },
    {
      icon: MessageSquare,
      title: "Real-Time Customer Updates",
      description: "Keep customers informed with automated ETA and service updates"
    },
    {
      icon: Shield,
      title: "Security Documentation",
      description: "Maintain detailed security audit trails and compliance documentation"
    }
  ];

  const businessBenefits = [
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Reduce response times with optimized dispatching and routing"
    },
    {
      icon: FileText,
      title: "Reliable Service Records",
      description: "Complete digital service histories improve customer trust and repeat business"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Professional documentation and audit trails for security-sensitive work"
    },
    {
      icon: TrendingUp,
      title: "Higher Operational Efficiency",
      description: "Complete more jobs per day with streamlined operations"
    }
  ];

  const demoHighlights = [
    "Scheduling & dispatch walkthrough",
    "Technician mobile flows",
    "Reports & compliance",
    "Q & A with our experts"
  ];

  const whyChoose = [
    {
      title: "Quick Implementation",
      description: "We help you start quickly by importing your data, checklists, and assets"
    },
    {
      title: "Enterprise Security",
      description: "Security is built-in with role-based permissions and full audit logs"
    }
  ];

  const faqData = [
    {
      question: "What features does Fielduo offer for Locksmith Services?",
      answer: "Fielduo provides comprehensive locksmith management features including emergency dispatch, job tracking, GPS routing, inventory management, customer communication tools, and security documentation. Our specialized solution is designed specifically for locksmith professionals."
    },
    {
      question: "How can Locksmith businesses improve efficiency with field service management software?",
      answer: "Fielduo streamlines operations by automating scheduling, optimizing technician routes, digitizing paperwork, and providing real-time data access. This reduces administrative overhead, decreases travel time, and enables technicians to complete more jobs daily with higher accuracy."
    },
    {
      question: "How does the software help with regulatory compliance for Locksmith Services?",
      answer: "Our compliance module automatically tracks all services performed, maintains detailed security audit trails, and generates compliance reports. The system ensures you're always prepared for audits with complete documentation of all security-related work."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Locksmith Services?",
      answer: "Yes, Fielduo includes 24/7 emergency dispatch capabilities. When lockout emergencies occur, our system automatically identifies the nearest available technician, notifies them immediately, and provides optimized routing to the location. Customers receive real-time updates on technician ETA."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Locksmith Services?",
      answer: "Fielduo provides complete inventory management for lock hardware, keys, and tools. The system tracks usage patterns, automatically generates reorder alerts when stock is low, and maintains equipment maintenance schedules. This prevents job delays due to missing supplies."
    },
    {
      question: "How does the software enhance customer communication for Locksmith Services?",
      answer: "Our system provides automated customer notifications with technician ETAs, service updates, and completion confirmations. Customers can also access a portal to view service history and request new services, improving transparency and satisfaction."
    },
    {
      question: "What benefits do Locksmith clients see after implementing Fielduo?",
      answer: "Clients typically see a 30% reduction in response times, 25% improvement in technician productivity, 40% fewer administrative tasks, and significantly higher customer satisfaction scores. Most clients achieve full ROI within the first year of implementation."
    }
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <Lock className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Specialized Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Locksmith Services
              <span className="block text-2xl md:text-3xl mt-4 font-light">
                Mobile locksmith management for fast, secure service.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-10 leading-relaxed text-blue-100">
              Professional solutions for locksmith businesses to improve response times, enhance security, and streamline operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
                Request Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for locksmith professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits Section */}
        <div className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Business Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How our specialized solution transforms your locksmith operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Highlights Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What You'll See</h2>
              <p className="text-xl text-gray-600 mb-8">
                During your personalized demo, we'll walk you through the key aspects of our locksmith solution:
              </p>
              
              <div className="space-y-4">
                {demoHighlights.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                Schedule Your Demo
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <Key className="w-24 h-24 mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Why Choose Fielduo</h3>
                  
                  <div className="space-y-6 mt-8">
                    {whyChoose.map((item, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-blue-100">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Locksmith Services — FAQs
              </h2>
              <p className="text-xl text-gray-600">Get answers about our locksmith solutions</p>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                    <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
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
  return <LocksmithServicesPage />;
}