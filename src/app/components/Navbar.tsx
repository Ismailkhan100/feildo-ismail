'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Types for navigation items
  type DropdownItem = {
    name: string;
    href: string;
    desc?: string;
  };

  type NavItem =
    | {
        name: string;
        hasDropdown: true;
        dropdownItems: DropdownItem[];
        href?: string;
      }
    | {
        name: string;
        href: string;
        hasDropdown?: false;
      };

  // Navigation items with dropdowns
  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Overview & Impact', href: '/products/Overview&Impact', desc: 'Comprehensive product suite' },
        { name: 'Core Platform Capabilities', href: '/products/core-platform-capabilities', desc: 'Robust and scalable' },
        { name: 'Advanced Intelligence', href: '/products/advanced-intelligence', desc: 'AI-driven solutions' },
        { name: 'Mobile App Features', href: '/products/mobile-app-features', desc: 'On-the-go functionality' },
        { name: 'Measurable Results', href: '/products/measurable-results', desc: 'Data-driven insights' },
        { name: 'Implementation & Support', href: '/products/implementation-support', desc: 'Seamless onboarding' },
      ]
    },
    {
      name: 'Solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'B2B Field Service', href: '/Solutions/B2B-field-services', desc: 'Enterprise-grade solutions'},
        { name: 'B2C Self-Service Portal', href: '/Solutions/B2C-Self-Service-Portal', desc: 'Customer-centric design' },
        { name: 'Scheduling & Dispatching', href: '/Solutions/Scheduling-Dispatching', desc: 'Streamlined operations' },
        { name: 'Invoicing & Payments', href: '/Solutions/Invoicing-Payments', desc: 'End-to-end management' },
      ]
    },
    {
      name: 'Industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'HVAC', href: '/industries/hvac', desc: 'Heating, Ventilation, and Air Conditioning' },
        { name: 'Plumbing', href: '/industries/plumbing', desc: 'Expert plumbing solutions' },
        { name: 'Electrical', href: '/industries/electrical', desc: 'Professional electrical services' },
        { name: 'Appliance Repair', href: '/industries/appliance-repair', desc: 'Reliable appliance fixes' },
        { name: 'Facility Management', href: '/industries/facility-management', desc: 'Comprehensive facility services' },
        { name: 'Pest Control', href: '/industries/pest-control', desc: 'Effective pest solutions' },
        // Divider and More link
        { name: 'More...', href: '/industries/more', desc: 'See all industries' },
      ]
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/20 shadow-sm' 
          : 'bg-white/95 backdrop-blur-xl'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/images/logo.png" alt="Fielduo Logo" className="w-20 h-20 object-contain" />
                <span className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Fielduo
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.hasDropdown ? '#' : item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 rounded-md hover:bg-gray-50/50 ${
                      activeDropdown === item.name ? 'text-gray-900 bg-gray-50/50' : ''
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/20 overflow-hidden">
                      <div className="p-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 rounded-lg hover:bg-gray-50/80 transition-colors duration-200 group"
                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.desc && (
                              <div className="text-sm text-gray-500 mt-1">
                                {dropdownItem.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-full transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-full transition-colors duration-200 lg:hidden">
                <ShoppingBag className="h-5 w-5" />
              </button>
              <Link 
                href="/contact"
                className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-md transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/20 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-b-0 pb-2 last:pb-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        mobileDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile dropdown items */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-md transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="font-medium">{dropdownItem.name}</div>
                            {dropdownItem.desc && (
                              <div className="text-xs text-gray-500 mt-1">{dropdownItem.desc}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-200/20 mt-4 space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-full transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-full transition-colors duration-200">
                  <ShoppingBag className="h-5 w-5" />
                </button>
              </div>
              <Link 
                href="/contact"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;