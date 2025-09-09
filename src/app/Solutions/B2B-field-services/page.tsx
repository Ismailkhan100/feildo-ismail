import React from "react";
import { Wrench, Layers, ShieldCheck, Users, Clock, CheckCircle, ArrowRight, Award, Target, Zap } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ImplementationSupport: React.FC = () => {
  const implementationPhases = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 Weeks",
      description: "Comprehensive business analysis, technical assessment, and strategic roadmap development",
      deliverables: ["Technical architecture design", "Implementation timeline", "Risk assessment", "Resource planning"]
    },
    {
      phase: "Configuration & Setup",
      duration: "2-3 Weeks", 
      description: "Platform configuration, workflow design, and initial system integration",
      deliverables: ["Environment setup", "Workflow configuration", "User role definition", "Security configuration"]
    },
    {
      phase: "Integration & Testing",
      duration: "2-3 Weeks",
      description: "Enterprise system integration, data migration, and comprehensive testing protocols",
      deliverables: ["System integrations", "Data migration", "UAT completion", "Performance validation"]
    },
    {
      phase: "Training & Go-Live",
      duration: "1-2 Weeks",
      description: "User training delivery, production deployment, and post-launch monitoring",
      deliverables: ["Training completion", "Production deployment", "Go-live support", "Performance metrics"]
    }
  ];

  const supportTiers = [
    {
      name: "Standard",
      subtitle: "Essential Support",
      price: "Included",
      features: [
        "Business hours support (9 AM - 6 PM)",
        "Online documentation & resources",
        "Community forums access",
        "Standard SLA (48-hour response)",
        "Monthly platform updates"
      ],
      cta: "Learn More",
      popular: false
    },
    {
      name: "Professional",
      subtitle: "Enhanced Coverage",
      price: "Custom Pricing",
      features: [
        "24/7 priority technical support",
        "Dedicated customer success manager",
        "Quarterly business reviews",
        "Enhanced SLA (4-hour response)",
        "Priority feature requests",
        "Advanced analytics & reporting"
      ],
      cta: "Get Quote",
      popular: true
    },
    {
      name: "Enterprise",
      subtitle: "White-Glove Service",
      price: "Custom Pricing",
      features: [
        "Named technical account manager",
        "Custom SLA agreements available",
        "Strategic roadmap consultation",
        "Custom development services",
        "Executive-level reporting",
        "Dedicated infrastructure options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const integrationPartners = [
    "Salesforce", "Microsoft Dynamics", "SAP", "Oracle", "ServiceNow", 
    "Workday", "NetSuite", "HubSpot", "Zendesk", "Slack"
  ];

  const faqs = [
    {
      question: "What is the typical implementation timeline for enterprise deployments?",
      answer: "Enterprise implementations typically range from 6-12 weeks depending on complexity, integration requirements, and customization needs. We provide detailed project timelines during the discovery phase with clear milestones and deliverables."
    },
    {
      question: "What training and certification programs do you offer?",
      answer: "We provide comprehensive role-based training including administrator certification, end-user workshops, and train-the-trainer programs. All training includes hands-on labs, documentation, and ongoing learning resources."
    },
    {
      question: "What level of ongoing support is included with each tier?",
      answer: "Support levels vary by tier: Standard includes business-hours assistance, Professional adds 24/7 priority support with dedicated account management, and Enterprise provides white-glove service with custom SLAs and strategic consulting."
    },
    {
      question: "Which enterprise systems integrate out of the box?",
      answer: "We offer pre-built connectors for 100+ enterprise applications including major CRM, ERP, ITSM, and collaboration platforms. Our API framework also supports custom integrations for unique requirements."
    },
    {
      question: "How do you handle data security and compliance during implementation?",
      answer: "We follow SOC 2 Type II standards with end-to-end encryption, role-based access controls, and comprehensive audit logging. Our team works with your security and compliance teams to meet industry-specific requirements."
    },
    {
      question: "What happens if we need customizations beyond standard features?",
      answer: "Our Professional Services team can develop custom features, workflows, and integrations. We also offer consulting services to help optimize your processes and maximize platform value."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Trusted by 2,000+ Organizations
              </div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
                Enterprise Implementation
                <span className="block text-blue-600">& Support Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Transform your operations with confidence. Our proven methodology and dedicated experts 
                ensure rapid deployment, seamless integration, and continuous optimization for long-term success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all">
                  Schedule Implementation Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all">
                  Download Implementation Guide
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                  <span className="font-medium">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-medium">24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-1">
          {/* Core Services */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Implementation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our expert-led approach ensures your platform delivers value from day one while positioning you for long-term growth
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Enhanced Implementation */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Wrench className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Accelerated Implementation</h3>
                    <p className="text-blue-600 font-medium">Enterprise-Ready in 6-12 Weeks</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Strategic Discovery & Planning</h4>
                      <p className="text-gray-600 text-sm">Comprehensive business process analysis, stakeholder interviews, and technical architecture design</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Intelligent Configuration</h4>
                      <p className="text-gray-600 text-sm">Platform optimization based on your specific workflows, compliance requirements, and business objectives</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Training Programs</h4>
                      <p className="text-gray-600 text-sm">Role-based certification courses, administrator workshops, and ongoing learning resources</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Go-Live Excellence</h4>
                      <p className="text-gray-600 text-sm">Dedicated launch support with real-time monitoring, performance optimization, and immediate issue resolution</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Integration */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                    <Layers className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Enterprise Integration</h3>
                    <p className="text-green-600 font-medium">100+ Pre-Built Connectors</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Native Enterprise Connectors</h4>
                      <p className="text-gray-600 text-sm">Pre-built integrations with Salesforce, SAP, Oracle, Microsoft Dynamics, and other mission-critical systems</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Advanced API Framework</h4>
                      <p className="text-gray-600 text-sm">RESTful APIs, webhooks, and real-time data synchronization for seamless connectivity</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Secure Data Migration</h4>
                      <p className="text-gray-600 text-sm">Enterprise-grade migration with validation checkpoints, rollback procedures, and zero-downtime cutover</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Custom Workflow Engine</h4>
                      <p className="text-gray-600 text-sm">Configurable business rules, approval processes, and compliance workflows tailored to your operations</p>
                    </div>
                  </div>
                </div>

                {/* Integration Partners */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-3">Popular Integrations:</p>
                  <div className="flex flex-wrap gap-2">
                    {integrationPartners.map((partner, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section className="bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Proven Implementation Methodology
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our structured approach, refined through 2,000+ successful deployments, ensures predictable outcomes and rapid time-to-value
                </p>
              </div>

              <div className="grid lg:grid-cols-4 gap-6">
                {implementationPhases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                          {index + 1}
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">{phase.phase}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{phase.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Key Deliverables:</p>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < implementationPhases.length - 1 && (
                      <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-0.5 bg-blue-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Tiers */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ongoing Support & Success
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the support level that aligns with your business requirements and growth objectives
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className={`relative rounded-2xl p-8 ${tier.popular ? 'bg-blue-50 border-2 border-blue-500 shadow-lg' : 'bg-white border border-gray-200 shadow-sm'} hover:shadow-lg transition-all`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.subtitle}</p>
                    <div className="text-3xl font-bold text-blue-600">{tier.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'}`}>
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Value Proposition */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    Why Choose Our Implementation Services?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Our proven track record speaks for itself. We've successfully deployed our platform 
                    across diverse industries, delivering measurable results and exceptional ROI.
                  </p>
                  <button className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                    View Case Studies
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">2,000+</div>
                    <div className="text-blue-100">Successful Deployments</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-blue-100">Customer Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">45%</div>
                    <div className="text-blue-100">Average ROI Increase</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">6 Weeks</div>
                    <div className="text-blue-100">Average Go-Live</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Implementation FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Get detailed answers to common questions about our implementation process
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all group"
                >
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold group-open:bg-blue-600 group-open:text-white transition-all">
                          <span className="group-open:rotate-45 transition-transform">+</span>
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16 p-10 bg-gray-100 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Start Your Implementation Journey?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our implementation specialists are ready to discuss your specific requirements and create a customized deployment plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Implementation Team
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ImplementationSupport;