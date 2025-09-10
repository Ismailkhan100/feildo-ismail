"use client";

import Footer from "@/app/components/Footer";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function FireSafetyInspectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What features does Fielduo offer for Fire Safety & Inspection?",
      a: `Inspection scheduling & tracking, code compliance management, certificate and document handling, emergency response coordination, suppression equipment test logs, and comprehensive inspection reporting — all with role-based permissions and full audit trails.`,
    },
    {
      q: "How can Fire Safety & Inspection businesses improve efficiency with field service management software?",
      a: `Automated scheduling and dispatch, technician mobile checklists, pre-built or custom inspection templates, and integrated reporting reduce admin time and speed up on-site work.`,
    },
    {
      q: "How does the software help with regulatory compliance for Fire Safety & Inspection?",
      a: `Centralized record keeping, certificate tracking, date-based reminders for re-tests and re-certifications, and exportable audit trails simplify regulatory reporting.`,
    },
    {
      q: "Does Fielduo offer emergency response or scheduling for Fire Safety & Inspection?",
      a: `Yes — priority dispatch, emergency job flags, and two-way technician communication help teams respond quickly and coordinate on incidents.`,
    },
    {
      q: "How does Fielduo support inventory, assets, or equipment tracking for Fire Safety & Inspection?",
      a: `Asset-level records, serial numbers, test history, and location tagging let you track suppression equipment, spare parts, and consumables.`,
    },
    {
      q: "How does the software enhance customer communication for Fire Safety & Inspection?",
      a: `Automated notifications, on-site checklists shared with clients, and PDF inspection certificates improve transparency and reduce follow-up calls.`,
    },
    {
      q: "What benefits do Fire Safety & Inspection clients see after implementing Fielduo?",
      a: `Faster scheduling, fewer missed tests, improved safety posture, reduced liability from clear audit trails, and better customer satisfaction.`,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Bar */}

      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Fire Safety & Inspection Management
            </h1>
            <p className="mt-4 text-lg text-blue-100 leading-relaxed">
              Comprehensive fire protection service management for inspections and system maintenance. 
              Ensure faster scheduling, regulatory compliance, and safer buildings with our specialized platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-blue-700 font-semibold shadow-md hover:bg-gray-50 transition-all"
              >
                Request a Demo
              </a>
              <a
                href="#faqs"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors"
              >
                View FAQs
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
              <h3 className="font-bold text-gray-800 text-lg mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Inspection scheduling & tracking</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fire code compliance management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certificate & documentation handling</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Emergency response coordination</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Suppression equipment testing logs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive inspection reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Benefits & Why Choose */}
        <section id="benefits" className="grid gap-10 md:grid-cols-2 items-start mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Benefits</h2>
              <p className="text-gray-700 leading-relaxed">
                Deliver safer buildings, stay audit-ready, and streamline your inspection operations with a system built for field-first teams.
              </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Ensure code compliance</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Track certificates, schedules, and corrective actions in one place.
                </p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Improve building safety</h4>
                <p className="text-sm text-gray-600 mt-2">Reduce risk with consistent testing and clear records.</p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Streamline inspections</h4>
                <p className="text-sm text-gray-600 mt-2">Mobile checklists, templated reports, and dispatch tools.</p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Reduce liability</h4>
                <p className="text-sm text-gray-600 mt-2">Full audit trails and exportable reports simplify audits.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Fielduo</h2>
              <p className="text-gray-700 leading-relaxed">
                We help you start quickly by importing your data, checklists, and assets. Security is built-in with role-based permissions and full audit logs.
              </p>
            </div>

            <div className="mt-4 grid gap-4">
              <div className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-none w-12 h-12 rounded-lg bg-blue-100 grid place-items-center font-semibold text-blue-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fast import & setup</div>
                  <div className="text-sm text-gray-600 mt-1">Bring your checklists, assets and historical data into Fielduo quickly.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-none w-12 h-12 rounded-lg bg-blue-100 grid place-items-center font-semibold text-blue-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Security & control</div>
                  <div className="text-sm text-gray-600 mt-1">Role-based access and detailed audit logs keep control tight.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-none w-12 h-12 rounded-lg bg-blue-100 grid place-items-center font-semibold text-blue-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Support & training</div>
                  <div className="text-sm text-gray-600 mt-1">Onboarding, templates and expert Q&A to get teams productive fast.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll See - walkthrough cards */}
        <section id="features" className="mt-16 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Experience</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Scheduling & Dispatch</h4>
              <p className="text-gray-600">Visualize routes, assign priority jobs and automatically notify technicians.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Technician Mobile App</h4>
              <p className="text-gray-600">Intuitive mobile checklists, photo evidence capture and signature collection on-site.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Reports & Compliance</h4>
              <p className="text-gray-600">Exportable PDF certificates, overdue item tracking and audit reports.</p>
            </div>
          </div>
        </section>

        {/* Demo / Contact CTA */}
        <section id="contact" className="mt-16 mb-16 bg-blue-50 rounded-2xl p-10 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See Fielduo in Action</h3>
              <p className="text-gray-700 leading-relaxed">
                Schedule a personalized demonstration to explore our scheduling tools, mobile workflows, and compliance reporting features with our industry experts.
              </p>
            </div>
            <div>
              <a href="#" className="inline-block rounded-md bg-blue-700 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-800 transition-colors">
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mt-16 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left flex items-center justify-between gap-4 p-6 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="font-medium text-gray-900 pr-4">{f.q}</div>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    {openFaq === i ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>

                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
          
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>© {new Date().getFullYear()} Fielduo Inc. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
      </main>
    </div>
    <Footer />
    </>
  );
}