"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FielduoPricing = () => {
  const [activeTab, setActiveTab] = useState('starter');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pricingTiers = [
    {
      id: 'starter',
      name: 'STARTER PLAN',
      price: '$36/month',
      savings: '79% cheaper than Salesforce',
      description: 'Perfect for Small Businesses (1-5 Technicians)',
      features: [
        'Work order creation & management',
        'Task assignment & tracking',
        'Service history & documentation',
        'Multi-location support',
        'AI & Smart Features (Basic)',
        'IoT device connectivity (5 devices)',
        'Real-time equipment monitoring',
        'Mobile app (iOS/Android)',
        'Performance dashboards & KPI tracking',
        'Email support, no setup fees, cancel anytime'
      ],
      highlight: false
    },
    {
      id: 'professional',
      name: 'PROFESSIONAL PLAN',
      price: '$72/month',
      savings: '59% cheaper than Salesforce',
      description: 'Perfect for 6-15 Technicians',
      features: [
        'All Starter features plus:',
        'Advanced AI & ML',
        'IoT integration (50 devices)',
        'Customer self-service portal',
        'Online booking & real-time technician tracking',
        'Inventory management & asset tracking',
        'Custom reporting & analytics',
        'Premium support & priority response'
      ],
      highlight: true
    },
    {
      id: 'enterprise',
      name: 'ENTERPRISE PLAN',
      price: '$120/month',
      savings: '31% cheaper than Salesforce',
      description: 'Perfect for 16+ Technicians',
      features: [
        'Full AI & ML automation suite',
        '120 IoT devices & advanced analytics',
        'Custom ML models & real-time network monitoring',
        'Unlimited technician licenses',
        'Customization, white-label & multi-tenant options',
        'Advanced asset & warranty management',
        'Executive dashboards & business intelligence',
        'Full API access & custom integrations',
        'Priority 24/7 support & dedicated management'
      ],
      highlight: false
    }
  ];

  const competitors = [
    { name: 'Salesforce Field Service', price: '$175', type: 'Technician License', savings: 'Up to $139/month (79%)' },
    { name: 'Microsoft Dynamics 365', price: '$105', type: 'Full License', savings: 'Up to $69/month (66%)' },
    { name: 'Oracle Field Service', price: '$100', type: 'Professional', savings: 'Up to $64/month (64%)' },
    { name: 'FieldAware Basic', price: '$70', type: 'Basic', savings: 'Up to $34/month (49%)' },
    { name: 'IFS Field Service', price: '$65', type: 'Basic', savings: 'Up to $29/month (45%)' },
    { name: 'Zuper Starter', price: '$65', type: 'Starter', savings: 'Up to $29/month (45%)' },
    { name: 'Jobber Core', price: '$39', type: 'Individual', savings: 'Up to $3/month (8%)' }
  ];

  const addOns = [
    { service: 'Additional Technician License', price: '$3.60/month', competitor: 'Salesforce: $175/month', savings: '98% cheaper' },
    { service: 'Advanced Analytics Package', price: '$12/month', competitor: 'Tableau add-on: $70/month', savings: '83% cheaper' },
    { service: 'Custom Integration Development', price: 'Starting at $600', competitor: 'Custom dev: $10,000+', savings: '94% cheaper' },
    { service: 'Professional Implementation', price: '$240 (one-time)', competitor: 'Implementation: $5,000+', savings: '95% cheaper' },
    { service: 'Training and Onboarding', price: '$120/session', competitor: 'Training: $2,000+/session', savings: '94% cheaper' }
  ];

  const roiScenarios = [
    {
      size: 'Small Service Company (5 technicians)',
      fielduo: '$36/month',
      alternative: '$195/month ($39 × 5)',
      monthlySavings: '$159',
      annualSavings: '$1,908',
      threeYearROI: '$5,724'
    },
    {
      size: 'Growing Service Business (10 technicians)',
      fielduo: '$72/month',
      alternative: '$1,050/month ($105 × 10)',
      monthlySavings: '$978',
      annualSavings: '$11,736',
      threeYearROI: '$35,208'
    },
    {
      size: 'Enterprise Service Operation (25 technicians)',
      fielduo: '$120/month',
      alternative: '$4,375/month ($175 × 25)',
      monthlySavings: '$4,255',
      annualSavings: '$51,060',
      threeYearROI: '$153,180'
    }
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Fielduo Pricing | Unmatched Value with AI-Powered Field Service Management</title>
        <meta name="description" content="Experience 31-79% savings vs competitors with Fielduo's integrated AI, ML, and IoT field service management solution." />
      </Head>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Fielduo Pricing</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Unmatched value with 31-79% savings vs competitors with integrated AI, ML, IoT
          </p>
          <div className="mt-10 animate-bounce-in">
            <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full mr-4 hover:bg-gray-100 transition duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-700 transition duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Fielduo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fielduo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Significant Cost Savings</h3>
              <p className="text-lg mb-4">
                Save $396-$51,060 annually depending on your business size. Leverage our advanced AI, ML, IoT features, and enjoy complete digital transformation at an unbeatable price.
              </p>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800 font-semibold">Average savings of 55% compared to leading competitors</p>
              </div>
            </div>
            <div className="bg-indigo-50 p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">Advanced Technology Integration</h3>
              <p className="text-lg mb-4">
                Fielduo combines cutting-edge AI, machine learning, and IoT capabilities in a single platform, eliminating the need for multiple expensive solutions.
              </p>
              <div className="bg-indigo-100 p-4 rounded-lg">
                <p className="text-indigo-800 font-semibold">Enterprise-grade features at small business prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing Tiers</h2>
          <p className="text-center text-gray-600 mb-12">Choose the plan that fits your business needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={tier.id}
                className={`rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${
                  tier.highlight ? 'border-4 border-blue-500 relative' : 'border border-gray-200'
                }`}
              >
                {tier.highlight && (
                  <div className="bg-blue-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-800">{tier.name}</h3>
                  <div className="my-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-green-600 font-semibold ml-2">{tier.savings}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 py-3 rounded-lg font-semibold ${
                    tier.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  } transition duration-300`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Market Positioning Analysis</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Solution</th>
                  <th className="py-3 px-4 text-left">Monthly Price</th>
                  <th className="py-3 px-4 text-left">Plan Type</th>
                  <th className="py-3 px-4 text-left">vs Fielduo Saving</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 transition duration-300 hover:bg-gray-50 ${
                      index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    <td className="py-3 px-4">{competitor.name}</td>
                    <td className="py-3 px-4 font-semibold">{competitor.price}</td>
                    <td className="py-3 px-4">{competitor.type}</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">{competitor.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fielduo Add-On Services Pricing (USD)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{addOn.service}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{addOn.price}</p>
                <p className="text-gray-600 mb-2">{addOn.competitor}</p>
                <div className="bg-green-100 text-green-800 font-semibold py-1 px-3 rounded-full inline-block">
                  {addOn.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section ref={sectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fielduo ROI Analysis: Real-World Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roiScenarios.map((scenario, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg transform transition duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.size}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fielduo:</span>
                    <span className="font-semibold">{scenario.fielduo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Alternative:</span>
                    <span className="font-semibold">{scenario.alternative}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Monthly Savings:</span>
                    <span className="font-bold">{scenario.monthlySavings}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Annual Savings:</span>
                    <span className="font-bold">{scenario.annualSavings}</span>
                  </div>
                  <div className="flex justify-between text-green-700">
                    <span>3-Year ROI:</span>
                    <span className="font-bold">{scenario.threeYearROI}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fielduo Key Value Propositions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-500 bg-opacity-20 p-6 rounded-xl backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Unmatched Cost Efficiency</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>79% savings compared to Salesforce</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>66% savings compared to Dynamics 365</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI/ML/IoT included at every pricing tier</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No hidden fees or surprise charges</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-500 bg-opacity-20 p-6 rounded-xl backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Advanced Technology Integration</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered scheduling and optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Machine learning predictive maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>IoT device connectivity from starter plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom ML model training at enterprise level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-10">Start your free 14-day trial today, no setup fees, cancel anytime!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default FielduoPricing;