import { motion } from 'framer-motion';
import companyLogo from './Images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (    
      <motion.header
      className="relative flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 px-6 py-2 shadow-lg sticky top-0 z-50 bg-gradient-to-br from-[#0f172a]/70 via-[#1e293b]/80 to-[#0f172a]/70 backdrop-blur-xl bg-opacity-80 overflow-visible border-b border-white/10"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-float blur-sm shadow-md"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Header Content */}
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex flex-col items-center leading-none">
          <img src={companyLogo} alt="Company Logo" className="h-14 w-auto object-contain drop-shadow-xl" />
          <span className="text-xl font-bold text-white tracking-tight -mt-1">MCC</span>
          <span className="text-xs sm:text-sm font-semibold text-blue-400 tracking-[0.4em]">INDIA</span>
        </div>

        <div className="ml-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">MODERN</h1>
          <span className="block text-sm sm:text-base font-semibold text-white/80 mt-0.5">
            CONSTRUCTION COMPANY (INDIA)
          </span>
        </div>
      </div>

      {/* Navigation Bar with Dropdowns */}
      <nav className="relative z-10 flex flex-wrap justify-center md:justify-end gap-4 text-white text-sm sm:text-base font-semibold w-full max-w-4xl mx-auto">
        {[{ label: 'HOME', to: '/' }, { label: 'SERVICES', to: '/services' }, { label: 'CLIENTS', to: '/clients' }, { label: 'CONTACT US', to: '/contact' }].map((item, i) => (
          <motion.div
            key={i}
            className="relative group hover:text-cyan-300 transition-colors duration-500 flex items-center"
            whileHover={{ scale: 1.1 }}
          >
            <Link to={item.to} className="relative z-10 px-2">
              {item.label}
            </Link>
            {i < 3 && <span className="h-4 w-[1px] bg-white/20 mx-1"></span>}
            <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full origin-left"></span>
          </motion.div>
        ))}
        {/* ABOUT Dropdown */}
        <div className="relative group z-50 flex items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer px-2">
            ABOUT US
            <div
              className="absolute left-0 top-full mt-1 w-48 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              {['Company Overview', 'Company Administration', 'Major Architects', 'Quality Control'].map((sub, idx) => (
                <a key={idx} href="#" className="block px-4 py-2 text-sm text-slate-800 hover:bg-blue-100/60">{sub}</a>
              ))}
            </div>
          </motion.div>
          <span className="h-4 w-[1px] bg-white/20 mx-1"></span>
        </div>

        {/* PROJECTS Dropdown */}
        <div className="relative group z-50 flex items-center">
          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer px-2">
            PROJECTS
            <div
              className="absolute left-0 top-full mt-1 w-40 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              {['On Going', 'Executed'].map((sub, idx) => (
                <a key={idx} href="#" className="block px-4 py-2 text-sm text-slate-800 hover:bg-blue-100/60">{sub}</a>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Keyframe style for floating effect */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); opacity: 0.6; }
            50% { transform: translateY(-20px); opacity: 1; }
            100% { transform: translateY(0px); opacity: 0.6; }
          }
          .animate-float {
            animation-name: float;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
        `}
      </style>
    </motion.header>
  )
}