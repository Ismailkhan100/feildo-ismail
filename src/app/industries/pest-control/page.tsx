"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bug,
  CalendarCheck2,
  FileText,
  FlaskConical,
  Users,
  Map,
  ShieldCheck,
  TrendingUp,
  Repeat,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  BarChart3,
  Clock,
  Target,
} from "lucide-react";
import { b } from "framer-motion/client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Fielduo Pest Control Management Page

const features = [
  {
    icon: CalendarCheck2,
    title: "Treatment Scheduling",
    desc: "Recurring pest control service management for residential and commercial clients.",
    highlights: ["Automated reminders", "Flexible intervals", "Client preferences"]
  },
  {
    icon: FlaskConical,
    title: "Chemical Tracking",
    desc: "Pesticide usage documentation with built‑in regulatory compliance logs.",
    highlights: ["Usage reporting", "Safety data sheets", "Regulatory compliance"]
  },
  {
    icon: FileText,
    title: "Inspection Forms",
    desc: "Digital inspection and treatment documentation for transparent reporting.",
    highlights: ["Custom templates", "Photo evidence", "Digital signatures"]
  },
  {
    icon: Users,
    title: "Customer Portals",
    desc: "Self‑service scheduling and service history access for clients.",
    highlights: ["Service history", "Online booking", "Document access"]
  },
  {
    icon: Repeat,
    title: "Seasonal Planning",
    desc: "Optimize treatments using pest activity patterns and seasonal demand trends.",
    highlights: ["Pest activity data", "Preventive scheduling", "Demand forecasting"]
  },
  {
    icon: Map,
    title: "Route Optimization",
    desc: "Efficient technician routing across multiple properties to maximize productivity.",
    highlights: ["Multi-stop routing", "Traffic awareness", "Time optimization"]
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "Maintain comprehensive chemical usage and safety documentation.",
    metric: "100% Audit Ready"
  },
  {
    icon: Users,
    title: "Customer Retention",
    desc: "Proactive service delivery, timely communication, and consistent results.",
    metric: "95% Retention Rate"
  },
  {
    icon: TrendingUp,
    title: "Operational Efficiency",
    desc: "Optimized routing, scheduling, and resource management for higher output.",
    metric: "40% Time Saved"
  },
  {
    icon: ClipboardCheck,
    title: "Service Quality",
    desc: "Standardized treatment protocols ensure consistent quality and assurance.",
    metric: "99% Satisfaction"
  },
];

const stats = [
  { value: "2,500+", label: "Pest Control Clients" },
  { value: "98%", label: "On-Time Service" },
  { value: "40%", label: "Faster Routing" },
  { value: "100%", label: "Compliance Accuracy" },
];

const faqs = [
  { 
    q: "What features does Fielduo offer for Pest Control?", 
    a: "Fielduo provides comprehensive pest control management including treatment scheduling, chemical tracking, inspection documentation, customer self-service portals, seasonal planning tools, and intelligent route optimization." 
  },
  { 
    q: "How can Pest Control businesses improve efficiency with field service management software?", 
    a: "By automating scheduling, optimizing routes, and centralizing inspection data, pest control teams reduce administrative overhead by up to 60% and improve client satisfaction through timely, consistent service delivery." 
  },
  { 
    q: "How does the software help with regulatory compliance for Pest Control?", 
    a: "Built‑in chemical usage tracking, automated documentation storage, and compliance reminders ensure safe operations and complete readiness for regulatory audits with full traceability of all treatments." 
  },
  { 
    q: "Does Fielduo offer emergency response or scheduling for Pest Control?", 
    a: "Yes. Our priority dispatch system with on‑demand scheduling and urgent service flags enables rapid response for emergency pest control situations with real-time technician tracking." 
  },
  { 
    q: "How does Fielduo support inventory, assets, or equipment tracking for Pest Control?", 
    a: "Track pesticide inventory levels, monitor equipment servicing schedules, and maintain accurate usage records to ensure operational efficiency and regulatory compliance." 
  },
  { 
    q: "How does the software enhance customer communication for Pest Control?", 
    a: "Automated service reminders, digital treatment reports, and customer self-service portals keep clients informed and engaged throughout the service lifecycle." 
  },
  { 
    q: "What benefits do Pest Control clients see after implementing Fielduo?", 
    a: "Clients report improved regulatory compliance, stronger customer retention rates, greater operational efficiency, and consistently high service quality standards." 
  },
];

function Section({ overline, title, subtitle, children }: { 
  overline?: string; 
  title?: string | React.ReactNode; 
  subtitle?: string | React.ReactNode; 
  children?: React.ReactNode; 
}) {
  return (
    <>
    <Navbar />
    <section className="relative py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {overline && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 uppercase tracking-wide">
            <Bug className="h-4 w-4" /> {overline}
          </div>
        )}
        {title && <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">{title}</h2>}
        {subtitle && <p className="mt-3 max-w-3xl text-lg text-gray-600">{subtitle}</p>}
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
    </>
  );
}

export default function PestControlPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <><div className="relative">
      {/* Hero Section with Green Theme */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://tailwindui.com/img/components/abstract-shapes-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

        <Section>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                Specialized <span className="text-lighblue-300">Pest Control</span> Management Software
              </motion.h1>
              <p className="mt-4 text-lg text-blue-100">
                Fielduo provides pest control companies with advanced tools for effective pest management, compliance, and customer satisfaction.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#demo" className="rounded-lg bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#sales" className="rounded-lg border border-blue-300 px-6 py-3 font-semibold text-white hover:bg-green-700/20 flex items-center gap-2 transition-all">
                  Talk to Sales <PhoneCall className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-green-200">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" /> Quick setup</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" /> Mobile friendly</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" /> Compliance ready</div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {features.slice(0, 4).map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="rounded-lg bg-blue-500/20 p-2">
                          <f.icon className="h-5 w-5 text-blue-300" />
                        </div>
                        <h4 className="text-base font-semibold text-white">{f.title}</h4>
                      </div>
                      <p className="text-sm text-blue-100">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-800 to-green-600 py-16 text-black">
        <Section>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white/10 backdrop-blur-sm p-6 text-center border border-white/10"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Features Section */}
      <Section
        overline="Pest Control Features"
        title="Comprehensive Pest Management Solutions"
        subtitle="Specialized tools to streamline inspections, treatments, and compliance for pest control businesses."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-green-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <f.icon className="h-5 w-5 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{f.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.highlights.map((h, i) => (
                  <span key={i} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 group-hover:bg-blue-100 transition-colors">{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section
        overline="Pest Control Advantages"
        title="Drive Business Growth & Efficiency"
        subtitle="Improve compliance, retain customers, and deliver consistent pest management services."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-blue-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-blue-100 p-2 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <b.icon className="h-5 w-5 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{b.desc}</p>
              <div className="mt-4 text-sm font-semibold text-blue-600">{b.metric}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQs Section */}
      <Section
        overline="Knowledge Center"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our pest control management solutions."
      >
        <div className="w-full divide-y rounded-xl border border-blue-100 bg-white shadow-sm">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="px-6 py-5 hover:bg-blue-50/50 transition-colors cursor-pointer"
              onClick={() => toggleFaq(i)}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-gray-900">{f.q}</h3>
                <ChevronDown className={`h-5 w-5 text-green-600 flex-shrink-0 mt-1 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 text-gray-600"
                >
                  {f.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600">
        <Section>
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-white/10 backdrop-blur-sm p-10 text-center border border-white/10 md:flex-row md:text-left">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white uppercase tracking-wide">
                <Bug className="h-4 w-4" /> Pest Control Ready
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Ready to transform your pest control operations?</h3>
              <p className="mt-2 max-w-2xl text-blue-100">
                Schedule a personalized demonstration to see how Fielduo can streamline your pest management services.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="#trial" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#sales" className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white/10 flex items-center gap-2 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div><Footer />
    </>
    
  );
}