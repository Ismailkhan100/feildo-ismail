// pages/industries.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { 
  FaTree, FaBroom, FaShieldAlt, FaHeartbeat, 
  FaUserMd, FaIndustry, FaFireExtinguisher, 
  FaKey, FaWater, FaTrashAlt, 
  FaSwimmingPool, FaLaptop, FaSatelliteDish, 
  FaHardHat, FaBolt, FaCar, FaOilCan, 
  FaSolarPanel, FaWifi, FaHome, FaFire, 
  FaSnowflake, FaHouseDamage, FaVectorSquare, 
  FaGlasses, FaPaintRoller, FaHouseUser, 
  FaLeaf, FaFlask, FaPaw, FaTooth, 
  FaBuilding, FaFileContract, FaGavel, 
  FaTools, FaUtensils, FaCalendarAlt, 
  FaTruckMoving, FaShippingFast, FaPills, 
  FaSmile, FaCheckCircle
} from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="p-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 text-white text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Industries: NextPage = () => {
  const industries = [
    { 
      title: 'Landscaping & Lawn Care.', 
      description: 'Professional landscaping and lawn care management software for outdoor service professionals.', 
      icon: <FaTree />,
      link: '/industries/landscaping-lawn-care'
    },
    { 
      title: 'Janitorial & Cleaning', 
      description: 'Commercial cleaning management software for quality control and client satisfaction.', 
      icon: <FaBroom />,
      link: '/industries/janitorial-cleaning'
    },
    { 
      title: 'Security Services', 
      description: 'Optimize security operations with tools for installation, monitoring, and compliance.', 
      icon: <FaShieldAlt />,
      link: '/industries/security-services'
    },
    { 
      title: 'Medical Device Services', 
      description: 'Healthcare equipment management ensuring compliance and patient safety.', 
      icon: <FaHeartbeat />,
      link: '/industries/medical-device-services'
    },
    { 
      title: 'Healthcare Field Services', 
      description: 'Mobile healthcare service management for home health and patient care.', 
      icon: <FaUserMd />,
      link: '/industries/healthcare-field-services'
    },
    { 
      title: 'Manufacturing', 
      description: 'Industrial equipment service management to minimize downtime and optimize safety.', 
      icon: <FaIndustry />,
      link: '/industries/manufacturing'
    },
    { 
      title: 'Fire Safety & Inspection', 
      description: 'Comprehensive fire protection service management with compliance tracking.', 
      icon: <FaFireExtinguisher />,
      link: '/industries/fire-safety-inspection'
    },
    { 
      title: 'Elevator Maintenance', 
      description: 'Specialized software for elevator and escalator maintenance and safety compliance.', 
      icon: <FaTools />,
      link: '/industries/elevator-maintenance'
    },
    { 
      title: 'Locksmith Services', 
      description: 'Mobile locksmith service management with emergency dispatch and tracking.', 
      icon: <FaKey />,
      link: '/industries/locksmith-services'
    },
    { 
      title: 'Water Treatment', 
      description: 'Manage water quality, chemical tracking, and compliance in treatment services.', 
      icon: <FaWater />,
      link: '/industries/water-treatment'
    },
    { 
      title: 'Waste Management', 
      description: 'Optimize waste collection routes, recycling, and environmental compliance.', 
      icon: <FaTrashAlt />,
      link: '/industries/waste-management'
    },
    { 
      title: 'Pool Service', 
      description: 'Comprehensive pool maintenance software with chemical tracking and scheduling.', 
      icon: <FaSwimmingPool />,
      link: '/industries/pool-service'
    },
    { 
      title: 'IT Services', 
      description: 'Field IT support management including remote troubleshooting and asset tracking.', 
      icon: <FaLaptop />,
      link: '/industries/it-services'
    },
    { 
      title: 'Telecommunications', 
      description: 'Manage telecom infrastructure, installations, and network performance.', 
      icon: <FaSatelliteDish />,
      link: '/industries/telecommunications'
    },
    { 
      title: 'Construction', 
      description: 'Project management software for construction crews, equipment, and safety.', 
      icon: <FaHardHat />,
      link: '/industries/construction'
    },
    { 
      title: 'Energy & Utilities', 
      description: 'Comprehensive power and utility service management with outage response.', 
      icon: <FaBolt />,
      link: '/industries/energy-utilities'
    },
    { 
      title: 'Automotive Services', 
      description: 'Mobile automotive repair and fleet maintenance with diagnostics and tracking.', 
      icon: <FaCar />,
      link: '/industries/automotive-services'
    },
    { 
      title: 'Oil & Gas', 
      description: 'Field operations for oil and gas with asset management and safety compliance.', 
      icon: <FaOilCan />,
      link: '/industries/oil-gas'
    },
    { 
      title: 'Solar & Renewable Energy', 
      description: 'Manage renewable energy systems with installation, monitoring, and reporting.', 
      icon: <FaSolarPanel />,
      link: '/industries/solar-renewable-energy'
    },
    { 
      title: 'Internet Service Providers', 
      description: 'ISP field service management with installation, support, and optimization.', 
      icon: <FaWifi />,
      link: '/industries/internet-service-providers'
    },
    { 
      title: 'Home Security', 
      description: 'Residential security management with system installation and monitoring.', 
      icon: <FaHome />,
      link: '/industries/home-security'
    },
    { 
      title: 'Fire Protection Systems', 
      description: 'Manage fire suppression installations, testing, and compliance effectively.', 
      icon: <FaFire />,
      link: '/industries/fire-protection-systems'
    },
    { 
      title: 'Refrigeration Services', 
      description: 'Commercial refrigeration management with temperature and compliance tracking.', 
      icon: <FaSnowflake />,
      link: '/industries/refrigeration-services'
    },
    { 
      title: 'Roofing Services', 
      description: 'Field management for roofing installation, repairs, and warranty tracking.', 
      icon: <FaHouseDamage />,
      link: '/industries/roofing-services'
    },
    { 
      title: 'Flooring Services', 
      description: 'Flooring installation and maintenance management with project tracking.', 
      icon: <FaVectorSquare />,
      link: '/industries/flooring-services'
    },
    { 
      title: 'Glass & Glazing', 
      description: 'Manage glass installation projects with precision measurement and tracking.', 
      icon: <FaGlasses />,
      link: '/industries/glass-glazing'
    },
    { 
      title: 'Painting Services', 
      description: 'Painting project management for residential and commercial services.', 
      icon: <FaPaintRoller />,
      link: '/industries/painting-services'
    },
    { 
      title: 'Restoration Services', 
      description: 'Disaster restoration and remediation management with emergency response.', 
      icon: <FaHouseUser />,
      link: '/industries/restoration-services'
    },
    { 
      title: 'Environmental Services', 
      description: 'Environmental testing and remediation with compliance and reporting tools.', 
      icon: <FaLeaf />,
      link: '/industries/environmental-services'
    },
    { 
      title: 'Laboratory Services', 
      description: 'Mobile laboratory services with testing protocols and secure tracking.', 
      icon: <FaFlask />,
      link: '/industries/laboratory-services'
    },
    { 
      title: 'Veterinary Services', 
      description: 'Mobile veterinary service management with scheduling and medical records.', 
      icon: <FaPaw />,
      link: '/industries/veterinary-services'
    },
    { 
      title: 'Dental Services', 
      description: 'Mobile dental care services with scheduling, insurance, and compliance.', 
      icon: <FaTooth />,
      link: '/industries/dental-services'
    },
    { 
      title: 'Real Estate Services', 
      description: 'Inspection and property services with detailed reporting and compliance.', 
      icon: <FaBuilding />,
      link: '/industries/real-estate-services'
    },
    { 
      title: 'Insurance Services', 
      description: 'Inspection and claims management with accurate assessments and reporting.', 
      icon: <FaFileContract />,
      link: '/industries/insurance-services'
    },
    { 
      title: 'Legal Services', 
      description: 'Legal process serving and support with document tracking and compliance.', 
      icon: <FaGavel />,
      link: '/industries/legal-services'
    },
    { 
      title: 'Equipment Rental', 
      description: 'Rental and maintenance management with asset tracking and billing.', 
      icon: <FaTools />,
      link: '/industries/equipment-rental'
    },
    { 
      title: 'Catering Services', 
      description: 'Field management for catering events with menu planning and safety.', 
      icon: <FaUtensils />,
      link: '/industries/catering-services'
    },
    { 
      title: 'Event Services', 
      description: 'Event setup and management software with resource and staff coordination.', 
      icon: <FaCalendarAlt />,
      link: '/industries/event-services'
    },
    { 
      title: 'Moving Services', 
      description: 'Manage moving and relocation with inventory, insurance, and route planning.', 
      icon: <FaTruckMoving />,
      link: '/industries/moving-services'
    },
    { 
      title: 'Courier Services', 
      description: 'Delivery and courier management with real-time tracking and proof of delivery.', 
      icon: <FaShippingFast />,
      link: '/industries/courier-services'
    },
    { 
      title: 'Pharmacy Services', 
      description: 'Mobile pharmacy service management with prescription tracking and delivery.', 
      icon: <FaPills />,
      link: '/industries/pharmacy-services'
    },
    { 
      title: 'Beauty & Wellness', 
      description: 'Mobile beauty and wellness management with scheduling and product tracking.', 
      icon: <FaSmile />,
      link: '/industries/beauty-wellness'
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Fielduo Industries | Tailored Solutions for 40+ Specialized Trades</title>
          <meta name="description" content="Fielduo powers 40+ specialized trades with tailored field service management solutions." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero Section - Matching the provided UI */}
        <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <FaCheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">40+ Industries Served</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Explore More
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Industries
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-5xl mx-auto mb-10 leading-relaxed text-blue-100">
              Fielduo powers 40+ specialized trades with tailored solutions designed for your unique business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Request a Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
                Contact Sales
              </button>
            </div>
          </div>
        </header>

        {/* Industries Grid Section */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tailored Solutions for Every Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Fielduo can transform operations in your specific industry with customized features and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                link={industry.link}
              />
            ))}
          </div>
        </main>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-bold mb-2">40+</div>
                <div className="text-blue-100">Industries Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-blue-100">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-bold mb-2">88%</div>
                <div className="text-blue-100">First-Time Fix Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                <div className="text-3xl font-bold mb-2">47%</div>
                <div className="text-blue-100">More Jobs Daily</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Industries;