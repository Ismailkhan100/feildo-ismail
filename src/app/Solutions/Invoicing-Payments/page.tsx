'use client';

import React, { useState } from 'react';
import { 
  CreditCard, 
  FileText, 
  Globe, 
  RefreshCw, 
  Calculator, 
  Clock, 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 backdrop-blur-sm">
      <div className="text-white">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-blue-100 leading-relaxed">{description}</p>
  </div>
);

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="text-lg font-semibold text-gray-900">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && (
      <div className="px-8 pb-6">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const InvoicingPaymentsPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const invoicingFeatures = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional Invoice Templates",
      description: "Customize layouts with branding, logos, and terms to maintain professional appearance across all client communications."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automated Invoice Generation",
      description: "Transform completed work orders into invoices with one click—no manual input required, reducing errors and saving time."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Currency Support",
      description: "Automatically convert amounts based on current exchange rates for global customers, ensuring accurate international billing."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Recurring Billing",
      description: "Schedule automated invoices for service agreements, maintenance contracts, or subscriptions with flexible timing options."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Tax Management",
      description: "Calculate and apply taxes by region, ensuring compliance with local regulations and reducing administrative burden."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Payment Terms",
      description: "Set net terms, early-pay discounts, and late fees to suit each customer and optimize cash flow management."
    }
  ];

  const paymentFeatures = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Payment Methods",
      description: "Accept credit/debit cards, ACH, mobile wallets, and bank transfers—both online and in the field for maximum flexibility."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online Payment Portal",
      description: "Customers can securely view and pay invoices at any time, with instant receipt generation and payment confirmation."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Payments",
      description: "Technicians can process payments on their devices immediately upon job completion, improving cash flow speed."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Payment Reminders",
      description: "Automate overdue notices via email or SMS to improve collections without manual intervention."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Payment Tracking",
      description: "Real-time dashboard shows which invoices are paid, pending, or past due with comprehensive analytics."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improved Cash Flow",
      description: "Reduce days-sales-outstanding by up to 20% through faster invoicing and automated reminders."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reduced Administrative Work",
      description: "Free finance teams from manual billing tasks, allowing focus on strategic analysis and growth."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Enhanced Customer Experience",
      description: "Provide transparent billing, clear payment options, and instant receipts for better satisfaction."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Better Financial Control",
      description: "Gain insights with real-time reports on revenue, outstanding receivables, and payment trends."
    }
  ];

  const faqs = [
    {
      question: "How does automated invoice generation work?",
      answer: "Once a work order is marked as complete, the system automatically generates an invoice using predefined templates and pricing structures. All job details, materials, labor, and applicable taxes are included without manual data entry."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support all major credit and debit cards, ACH bank transfers, mobile wallets (Apple Pay, Google Pay), and direct bank transfers. Payments can be processed both online through our portal and in the field via mobile devices."
    },
    {
      question: "Can invoices be customized with company branding?",
      answer: "Yes, invoices are fully customizable with your company logo, colors, fonts, and terms. You can create multiple templates for different service types or customer segments while maintaining consistent branding."
    },
    {
      question: "How does recurring billing work?",
      answer: "Set up recurring billing schedules for maintenance contracts, subscriptions, or regular services. The system automatically generates and sends invoices according to your specified frequency (weekly, monthly, quarterly, etc.)."
    },
    {
      question: "What about multi-currency support for international customers?",
      answer: "The system automatically handles currency conversion using real-time exchange rates. You can set preferred currencies for different customers and regions, with all conversions clearly displayed on invoices."
    },
    {
      question: "How are taxes calculated and managed?",
      answer: "Tax rates are automatically applied based on customer location and service type. The system stays updated with regional tax requirements and can handle multiple tax types including sales tax, VAT, and service taxes."
    },
    {
      question: "Can customers pay immediately after service completion?",
      answer: "Yes, technicians can present invoices and process payments instantly using mobile devices. Customers can pay via card reader, mobile wallet, or by accessing the online payment portal immediately."
    },
    {
      question: "How do payment reminders work?",
      answer: "Automated reminders are sent via email or SMS based on your payment terms. You can customize reminder schedules, messages, and escalation procedures to maximize collection efficiency while maintaining customer relationships."
    },
    {
      question: "What's the typical timeline for receiving payments?",
      answer: "With our automated invoicing and multiple payment options, most customers see a 15-25% reduction in payment times. Card payments are processed immediately, while ACH transfers typically clear within 1-3 business days."
    },
    {
      question: "Is the payment processing secure?",
      answer: "Yes, all payment processing is PCI DSS compliant with bank-level encryption. Customer payment data is never stored on our servers, and all transactions are processed through certified payment gateways with fraud protection."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    < >
    <Navbar />
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Invoicing & Payments
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Accelerate billing cycles, minimize errors, and offer flexible payment options—all within a unified financial management module.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Overview</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Fast, accurate invoicing and seamless payment collection are critical for maintaining healthy cash flow. 
            <span className="font-semibold text-blue-600"> Fielduo's integrated billing suite</span> automates the entire process 
            from work order to payment reconciliation.
          </p>
        </div>
      </section>

      {/* Invoicing Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Invoicing Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {invoicingFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Processing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Payment Processing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paymentFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Financial Management Benefits</h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Billing Process?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of field service companies that have streamlined their invoicing and payments with Fielduo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl">
              Start Free 14-Day Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </ >
  );
};

export default InvoicingPaymentsPage;