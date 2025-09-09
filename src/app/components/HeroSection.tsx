import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Zap, Smartphone, BarChart3, Cloud, Cpu, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  const valuePropositions = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Streamline Operations",
      description: "Automated scheduling, dispatching, and work order management."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Boost Productivity",
      description: "Mobile-first workflows with full offline support for field teams."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Enhance Customer Experience",
      description: "24/7 customer portal with real-time updates and transparency."
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Increase Revenue",
      description: "Smart pricing tools, upsell workflows, and retention boosters."
    }
  ];

  const whyChooseFielduo = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "AI-Powered Scheduling",
      description: "Auto-assign jobs based on skills, location, and availability—minimizing admin and maximizing field efficiency."
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App (Offline-First)",
      description: "Works seamlessly with or without WiFi/data. No connectivity? No problem—fieldwork continues and syncs automatically."
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Real-Time Analytics",
      description: "Instant dashboards and reporting for all your jobs, revenue, and technician KPIs in a single view."
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "IoT & AI Integration",
      description: "Integrate smart devices, sensors, and leverage AI automation with zero hassle—future-proof your operations."
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Secure Cloud Platform",
      description: "Reliable, scalable, and accessible worldwide. Rock-solid infrastructure with encryption and compliance."
    }
  ];

  interface DropdownItem {
    name: string;
    href: string;
    desc?: string;
  }

  const industries = [
     { name: 'HVAC', href: '/industries/hvac', desc: 'Heating, Ventilation, and Air Conditioning' },
        { name: 'Plumbing', href: '/industries/plumbing', desc: 'Expert plumbing solutions' },
        { name: 'Electrical', href: '/industries/electrical', desc: 'Professional electrical services' },
        { name: 'Appliance Repair', href: '/industries/appliance-repair', desc: 'Reliable appliance fixes' },
        { name: 'Facility Management', href: '/industries/facility-management', desc: 'Comprehensive facility services' },
        { name: 'Pest Control', href: '/industries/pest-control', desc: 'Effective pest solutions' },

  ];

  const competitorsData = [
    { differentiator: "Pricing", fielduo: "Best-in-class value, no core gaps", competitors: "$0 to $119/month, features may restrict" },
    { differentiator: "Scheduling", fielduo: "AI-powered and easy to deploy", competitors: "Robust but complex" },
    { differentiator: "Mobile + Offline", fielduo: "Full features, easy setup", competitors: "Advanced offline use may be limited" },
    { differentiator: "Customer Portal", fielduo: "Fully integrated and seamless", competitors: "Often requires add-ons" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Service Business with Fielduo
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The All-in-One Field Service Management Platform for HVAC, Plumbing, Electrical, 
              Appliance Repair & more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Book a Demo
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                Start Free Trial
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Propositions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Value Propositions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-blue-600 mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fielduo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Fielduo?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFielduo.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                className="bg-gray-100 text-center py-4 px-3 rounded-lg block hover:bg-gray-200 transition-colors duration-200"
              >
                <div className="font-medium text-gray-900">
                  {industry.name}
                </div>
                {industry.desc && (
                  <div className="text-sm text-gray-500 mt-1">
                    {industry.desc}
                  </div>
                )}
              </Link>
            ))}
          </div>


          <div className="text-center mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
              Click to see All Industries →
            </button>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Beyond the Basics — Fielduo Powers 40+ Specialized Trades
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From janitorial services to pool maintenance, landscaping to locksmiths, 
              we tailor smart solutions for every field force.
            </p>
          </div>
        </div>
      </section>

      {/* Fielduo vs Competitors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Fielduo vs Competitors
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Differentiator</th>
                    <th className="px-6 py-4 text-left font-semibold">Fielduo Advantage</th>
                    <th className="px-6 py-4 text-left font-semibold">Competitors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {competitorsData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.differentiator}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{row.fielduo}</td>
                      <td className="px-6 py-4 text-gray-600">{row.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions? Check our comprehensive FAQs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            View FAQs
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of service businesses already using Fielduo to streamline operations and boost revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Start Your Free Trial Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;