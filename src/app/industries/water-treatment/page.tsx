"use client";
import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import { 
  Droplets, 
  Shield, 
  FileText, 
  Calendar,
  Beaker,
  TestTube,
  BarChart3,
  CheckCircle,
  Users,
  Building2,
  Zap,
  Target,
  ArrowRight,
  Play,
  ChevronDown,
  Clock,
  MapPin,
  PhoneCall,
  Package
} from "lucide-react";

function WaterTreatment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const keyFeatures = [
    {
      icon: Beaker,
      title: "Water quality monitoring",
      description: "Continuous monitoring and tracking of water quality parameters with automated alerts"
    },
    {
      icon: TestTube,
      title: "Chemical usage management",
      description: "Precise tracking and optimization of chemical treatments with automated dosing records"
    },
    {
      icon: FileText,
      title: "Compliance documentation",
      description: "Automated generation of compliance reports and documentation for regulatory requirements"
    },
    {
      icon: Calendar,
      title: "Testing schedules & results",
      description: "Automated scheduling of water tests with digital result recording and trend analysis"
    },
    {
      icon: Package,
      title: "Equipment maintenance tracking",
      description: "Comprehensive tracking of treatment equipment maintenance and service history"
    },
    {
      icon: Users,
      title: "Customer reporting portals",
      description: "Secure client portals for real-time access to water quality reports and compliance data"
    }
  ];

  const businessBenefits = [
    {
      icon: Shield,
      title: "Assure water quality",
      description: "Maintain consistent water quality standards with automated monitoring and alerts"
    },
    {
      icon: FileText,
      title: "Maintain regulatory standards",
      description: "Stay compliant with ever-changing water treatment regulations and requirements"
    },
    {
      icon: BarChart3,
      title: "Optimize treatment processes",
      description: "Data-driven insights to improve treatment efficiency and reduce chemical costs"
    },
    {
      icon: Users,
      title: "Build customer confidence",
      description: "Transparent reporting and proven compliance builds trust with your clients"
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
      question: "What features does Fielduo offer for Water Treatment?",
      answer: "Fielduo provides comprehensive water treatment management features including water quality monitoring, chemical usage tracking, compliance documentation, testing schedule management, equipment maintenance tracking, and customer reporting portals. Our specialized solution is designed specifically for water treatment professionals."
    },
    {
      question: "How can Water Treatment businesses improve efficiency with field service management software?",
      answer: "Fielduo streamlines operations by automating scheduling, optimizing technician routes, digitizing paperwork, and providing real-time data access. This reduces administrative overhead by up to 40%, decreases travel time by 30%, and enables technicians to complete more jobs daily with higher accuracy."
    },
    {
      question: "How does the software help with regulatory compliance for Water Treatment?",
      answer: "Our compliance module automatically tracks all testing, treatments, and maintenance activities, generating comprehensive reports that meet regulatory requirements. The system provides audit trails, automated reminders for required tests, and digital documentation that ensures you're always prepared for inspections."
    },
    {
      question: "Does Fielduo offer emergency response or scheduling for Water Treatment?",
      answer: "Yes, Fielduo includes 24/7 emergency dispatch capabilities. When water quality issues arise, our system automatically identifies the nearest available technician with the right expertise, notifies them immediately, and provides optimized routing to the site. Customers receive real-time updates on response times."
    },
    {
      question: "How does Fielduo support inventory, assets, or equipment tracking for Water Treatment?",
      answer: "Fielduo provides complete inventory management for chemicals, parts, and equipment. The system tracks usage patterns, automatically generates reorder alerts when stock is low, and maintains detailed maintenance histories for all treatment equipment. This prevents job delays due to missing supplies."
    },
    {
      question: "How does the software enhance customer communication for Water Treatment?",
      answer: "Our customer portal provides clients with 24/7 access to water quality reports, compliance documentation, and service history. Automated notifications keep customers informed about scheduled maintenance, test results, and any water quality issues. This transparency builds trust and reduces customer service calls."
    },
    {
      question: "What benefits do Water Treatment clients see after implementing Fielduo?",
      answer: "Clients typically see a 30% reduction in operational costs, 45% fewer compliance issues, 25% improvement in technician productivity, and significantly higher customer satisfaction scores. Most clients achieve full ROI within the first year of implementation."
    }
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <Droplets className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Specialized Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Water Treatment
              <span className="block text-2xl md:text-3xl mt-4 font-light">
                Service management for water quality and treatment systems.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-10 leading-relaxed text-blue-100">
              Comprehensive solutions to ensure water quality, maintain compliance, and optimize treatment processes.
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
              Comprehensive tools designed specifically for water treatment professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
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
                How our specialized solution transforms your water treatment operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
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
                During your personalized demo, we'll walk you through the key aspects of our water treatment solution:
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
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <Building2 className="w-24 h-24 mx-auto mb-6 opacity-80" />
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
                Water Treatment Services — FAQs
              </h2>
              <p className="text-xl text-gray-600">Get answers about our water treatment solutions</p>
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
  return <WaterTreatment />;
}