"use client";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { 
  Brain, 
  MapPin, 
  Smartphone, 
  Users, 
  Building2, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target, 
  TrendingUp, 
  Settings,
  Calendar,
  Route,
  MessageSquare,
  FileText,
  BarChart3,
  CreditCard,
  Package,
  ChevronDown,
  Play
} from "lucide-react";

function CorePlatformCapabilities() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeModule, setActiveModule] = useState(0);

  const toggleFaq = (index: number) => {
const [openFaq, setOpenFaq] = useState<number | null>(null);
  };

  const modules = [
    {
      id: 1,
      title: "Smart Scheduling & Dispatching",
      icon: Brain,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      problem: "Double-booked technicians, missed appointment windows, and skill mismatches.",
      solutions: [
        {
          title: "AI-Powered Technician Matching",
          description: "Assigns jobs based on skills, location, and availability",
          icon: Target
        },
        {
          title: "Smart Route Optimization", 
          description: "Reduces travel time by up to 30% with live traffic data",
          icon: Route
        },
        {
          title: "Dynamic Schedule Adjustments",
          description: "Auto-reshuffles for emergencies or cancellations",
          icon: Calendar
        }
      ],
      result: "88% first-time fix rate & 47% more jobs daily",
      resultColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Mobile Workforce Management", 
      icon: Smartphone,
      color: "green",
      gradient: "from-green-500 to-green-600",
      problem: "Technicians arrive unprepared, causing delays and repeat visits.",
      solutions: [
        {
          title: "Complete Job Briefings",
          description: "Full history, specs & instructions on mobile devices",
          icon: FileText
        },
        {
          title: "Offline-First Mobile App",
          description: "Works without internet, auto-syncs when back online", 
          icon: Smartphone
        },
        {
          title: "Digital Work Orders",
          description: "Paperless with photos, e-signatures, and real-time updates",
          icon: CheckCircle
        }
      ],
      result: "40% more jobs completed & fewer repeat visits",
      resultColor: "text-green-600"
    },
    {
      id: 3,
      title: "Customer Experience Management",
      icon: Users,
      color: "purple", 
      gradient: "from-purple-500 to-purple-600",
      problem: "Lack of proactive communication increases churn & complaints.",
      solutions: [
        {
          title: "Real-Time Notifications",
          description: "SMS, email & voice updates for customers",
          icon: MessageSquare
        },
        {
          title: "Live Technician Tracking",
          description: "Interactive maps show exact ETA",
          icon: MapPin
        },
        {
          title: "Self-Service Customer Portal", 
          description: "24/7 scheduling, history & invoices",
          icon: Settings
        }
      ],
      result: "Reduced complaints & churn rates",
      resultColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Business Operations Optimization",
      icon: Building2,
      color: "orange",
      gradient: "from-orange-500 to-orange-600", 
      problem: "Manual processes slow inventory, quotes, and billing.",
      solutions: [
        {
          title: "Inventory Management",
          description: "Real-time parts tracking & automated reorders",
          icon: Package
        },
        {
          title: "Quote & Estimate Generation",
          description: "Faster approvals with templates & e-sign",
          icon: FileText
        },
        {
          title: "Automated Invoicing & Payments",
          description: "E-invoices, reminders & multiple payment options",
          icon: CreditCard
        },
        {
          title: "Comprehensive Reporting",
          description: "KPIs like profitability & utilization rates",
          icon: BarChart3
        }
      ],
      result: "Save hours weekly & gain up to 300% ROI in year one",
      resultColor: "text-orange-600"
    }
  ];

  const faqData = [
    {
      question: "How does AI-Powered Technician Matching work?",
      answer: "Our AI algorithm analyzes technician skills, certifications, location, current workload, and availability to automatically assign the most suitable technician to each job. This ensures optimal resource utilization and reduces the likelihood of delays or rework."
    },
    {
      question: "What is Smart Route Optimization?",
      answer: "Smart Route Optimization uses real-time traffic data, job priorities, and technician locations to calculate the most efficient routes. This reduces travel time by up to 30%, lowers fuel costs, and allows technicians to complete more jobs per day."
    },
    {
      question: "Can schedules adjust in real time?",
      answer: "Yes, our Dynamic Schedule Adjustments feature automatically reshuffles appointments when emergencies arise or cancellations occur. The system notifies all affected parties and optimizes the new schedule to minimize disruption."
    },
    {
      question: "Does the mobile app work offline?",
      answer: "Absolutely. Our offline-first mobile app ensures technicians can access job details, update work orders, capture photos, and collect signatures even without internet connectivity. All data automatically syncs when connection is restored."
    },
    {
      question: "How are digital work orders handled?",
      answer: "Digital work orders eliminate paperwork by allowing technicians to update job status, attach photos, collect customer signatures, and submit reports directly from their mobile device. All information is instantly available to the back office."
    },
    {
      question: "How does Fielduo manage inventory?",
      answer: "Our inventory management system provides real-time tracking of parts and supplies, automated reorder alerts when stock runs low, and integration with supplier systems for seamless procurement. This prevents job delays due to missing parts."
    },
    {
      question: "What billing features are included?",
      answer: "Fielduo includes automated invoice generation, multiple payment gateway integrations, recurring billing for service contracts, payment reminders, and detailed financial reporting. This streamlines cash flow and reduces administrative overhead."
    },
    {
      question: "What analytics are available?",
      answer: "Our comprehensive reporting dashboard provides insights into technician productivity, job completion rates, customer satisfaction scores, revenue trends, equipment utilization, and other key performance indicators to help optimize your operations."
    }
  ];

  const stats = [
    { label: "First-Time Fix Rate", value: "88%", icon: Target },
    { label: "More Jobs Daily", value: "47%", icon: TrendingUp },
    { label: "Travel Cost Savings", value: "30%", icon: MapPin },
    { label: "ROI in Year One", value: "300%", icon: BarChart3 }
  ];

  return (
    <>

        <Navbar />
      <section className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <Settings className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Core Platform Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Fielduo's Core Platform
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-10 leading-relaxed text-blue-100">
              Transforming chaos into clarity and profitability with four powerful modules that work together to deliver unmatched efficiency and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
                Explore Features <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Field Service Solution</h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Fielduo's comprehensive platform tackles the toughest field service challenges head-on. From intelligent scheduling to seamless customer communication and streamlined back-office operations, these four modules work together to deliver unmatched efficiency and growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Four Powerful Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each module is designed to solve specific field service challenges while working seamlessly together.
            </p>
          </div>

          <div className="space-y-20">
            {modules.map((module, index) => (
              <div key={module.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className={`inline-flex items-center bg-gradient-to-r ${module.gradient} text-white px-6 py-3 rounded-full mb-6`}>
                    <module.icon className="w-6 h-6 mr-3" />
                    <span className="font-semibold">{module.title}</span>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
                    <h4 className="font-semibold text-red-800 mb-2">The Problem:</h4>
                    <p className="text-red-700">{module.problem}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900 text-lg">Our Solution:</h4>
                    {module.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className={`w-10 h-10 bg-gradient-to-r ${module.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                          <solution.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1">{solution.title}:</h5>
                          <p className="text-gray-600 text-sm">{solution.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg`}>
                    <h4 className="font-semibold text-green-800 mb-2">Result:</h4>
                    <p className={`font-bold text-lg ${module.resultColor}`}>{module.result}</p>
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className={`bg-gradient-to-br ${module.gradient} rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <module.icon className="w-24 h-24 mx-auto mb-6 opacity-80" />
                      <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {module.solutions.map((solution, idx) => (
                            <div key={idx} className="text-center">
                              <solution.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                              <p className="text-xs font-medium">{solution.title}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Service Delivery into a Competitive Advantage
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Fielduo equips your business to schedule intelligently, empower your field workforce, 
              delight your customers, and optimize every operational process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">Get detailed answers about our core platform capabilities</p>
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
  return <CorePlatformCapabilities />;
}