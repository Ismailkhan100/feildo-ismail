"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import {
  Building2,
  Boxes,
  ClipboardCheck,
  CalendarCheck2,
  Users,
  Map,
  ShieldCheck,
  TrendingDown,
  Activity,
  BellRing,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  BarChart3,
  Clock,
  Target,
  FileCheck,
  ChevronDown,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Asset Management",
    desc: "Complete facility asset tracking with maintenance scheduling and lifecycle history.",
    highlights: ["QR/RFID ready", "Condition logs", "Service history"],
  },
  {
    icon: ClipboardCheck,
    title: "Work Order Management",
    desc: "Streamlined creation, assignment, and completion tracking for every maintenance job.",
    highlights: ["SLA timers", "Mobile updates", "Photo documentation"],
  },
  {
    icon: CalendarCheck2,
    title: "Preventive Maintenance",
    desc: "Automated calendars for routine tasks to minimize downtime and unexpected failures.",
    highlights: ["PM templates", "Recurrence rules", "Escalation protocols"],
  },
  {
    icon: Users,
    title: "Vendor Management",
    desc: "Coordinate contractors and service providers with approvals and performance tracking.",
    highlights: ["Rate cards", "Compliance documentation", "Performance scorecards"],
  },
  {
    icon: Map,
    title: "Space Management",
    desc: "Plan and optimize space utilization with assignments and move management.",
    highlights: ["Zones & floors", "Utilization analytics", "Move requests"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance Tracking",
    desc: "Stay audit‑ready with regulatory logs, checklists, and verifiable documentation trails.",
    highlights: ["Safety checks", "Certificates", "Audit trails"],
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Operating Costs",
    desc: "Intelligent scheduling, optimized routing, and resource allocation lower operational expenses.",
    metric: "18% avg OPEX reduction",
  },
  {
    icon: Activity,
    title: "Extend Asset Life",
    desc: "Proactive maintenance and condition monitoring protect your critical equipment investments.",
    metric: "24% MTBF improvement",
  },
  {
    icon: ShieldCheck,
    title: "Improve Safety Compliance",
    desc: "Comprehensive inspections and compliance tracking reduce incidents and liability.",
    metric: "Zero incident target",
  },
  {
    icon: CheckCircle2,
    title: "Enhance Productivity",
    desc: "Automated workflows and clear accountability keep teams focused and efficient.",
    metric: "2.1x job completion rate",
  },
];

const faqs = [
  {
    q: "What features does Fielduo offer for Facility Management?",
    a: "Fielduo provides comprehensive capabilities including asset & equipment tracking, work orders, preventive maintenance scheduling, vendor coordination, space utilization planning, and compliance management. All features are mobile-optimized for technicians and managers.",
  },
  {
    q: "How can Facility Management businesses improve efficiency with field service management software?",
    a: "By centralizing requests, automating scheduling, and providing clear checklists and SLAs, Fielduo reduces communication overhead, eliminates duplicate work, and decreases time-to-completion. Real-time status updates and notifications keep all stakeholders aligned without manual follow-ups.",
  },
  {
    q: "How does the software help with regulatory compliance for Facility Management?",
    a: "Fielduo standardizes safety inspections and stores certificates, permits, and audit trails in a centralized repository. Automated reminders ensure deadlines are met, and digitally signed checklists streamline audit processes.",
  },
  {
    q: "Does Fielduo offer emergency response capabilities for Facility Management?",
    a: "Yes. Priority flags, on-call rotations, and escalation protocols enable rapid dispatch during emergencies. Technicians receive instant mobile notifications with complete job details to accelerate response times.",
  },
  {
    q: "How does Fielduo support inventory and asset tracking for Facility Management?",
    a: "The platform links parts and inventory to assets and work orders, tracks usage against jobs, and maintains accurate stock levels. QR/RFID scanning enables quick identification, and lifecycle history informs repair versus replace decisions.",
  },
  {
    q: "How does the software enhance stakeholder communication for Facility Management?",
    a: "Automated status updates, appointment confirmations, and completion reports keep all stakeholders informed. Photo documentation, notes, and digital signatures provide complete transparency throughout service delivery.",
  },
  {
    q: "What benefits do Facility Management clients see after implementing Fielduo?",
    a: "Clients typically report reduced operating costs, fewer unplanned outages, improved safety metrics, faster response times, and higher satisfaction through proactive, transparent service delivery.",
  },
];

const stats = [
  { icon: Building2, value: "2,500+", label: "Facilities Managed" },
  { icon: Clock, value: "98%", label: "SLA Adherence Rate" },
  { icon: BarChart3, value: "100%", label: "Mobile Adoption" },
  { icon: Target, value: "40%", label: "Reduced Audit Findings" },
];

function Section({
  overline,
  title,
  subtitle,
  children,
}: {
  overline?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        {overline && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 uppercase tracking-wide">
            <Building2 className="h-4 w-4" /> {overline}
          </div>
        )}
        {title && (
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-3 max-w-3xl text-gray-600 text-lg">{subtitle}</p>
        )}
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
  );
}

export default function FacilityManagementPage() {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section with Blue Gradient */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
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
                  Enterprise <span className="text-blue-300">Facility Management</span> Platform
                </motion.h1>
                <p className="mt-4 text-lg text-blue-100">
                  Fielduo's comprehensive facility management solution enables organizations to maintain buildings, equipment, and assets with precision and efficiency.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#demo" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                    Request Demo <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#sales" className="rounded-lg border border-blue-300 px-6 py-3 font-semibold text-white hover:bg-blue-700/20 flex items-center gap-2 transition-all">
                    Contact Sales <PhoneCall className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 text-sm text-blue-200">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" /> Rapid implementation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" /> Mobile-first design</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" /> Role-based security</div>
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

        {/* Features Section */}
        <Section 
          overline="Facility Management Capabilities" 
          title="Comprehensive Facility Management Solutions"
          subtitle="Purpose-built tools to optimize operational efficiency, ensure compliance, and reduce costs across your portfolio."
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-blue-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <f.icon className="h-5 w-5 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.highlights.map((h, i) => (
                    <span key={i} className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 group-hover:bg-blue-100 transition-colors">{h}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-white">
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
                  <div className="flex justify-center">
                    <div className="rounded-lg bg-white/20 p-2 mb-3">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Benefits Section */}
        <Section 
          overline="Measurable Outcomes" 
          title="Drive Operational Excellence"
          subtitle="Transform your facility management operations with data-driven insights and streamlined processes."
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
                  <div className="rounded-lg bg-blue-100 p-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
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
          subtitle="Find answers to common questions about our facility management solutions."
        >
          <div className="w-full divide-y rounded-xl border border-blue-100 bg-white shadow-sm">
            {faqs.map((f, i) => (
              <div key={i} className="px-6 py-5 hover:bg-blue-50/50 transition-colors">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{f.q}</h3>
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                </div>
                <p className="mt-2 text-gray-600">{f.a}</p>
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
                  <FileCheck className="h-4 w-4" /> Enterprise Ready
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Ready to transform your facility operations?</h3>
                <p className="mt-2 max-w-2xl text-blue-100">
                  Schedule a personalized demonstration to see how Fielduo can streamline asset management, work orders, and preventive maintenance for your portfolio.
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
      </div>
      <Footer />
    </>
  );
}