
import { motion } from 'framer-motion';
import HomeHeroSection from './Images/HomeHeroSection.jpg';
import residential from './Images/residential.jpg';
import commercial from './Images/commercial.jpg';
import infra from './Images/infra.jpg';
import companyLogo from './Images/logo.png';

const services = [
  { title: 'RESIDENTIAL', image: residential },
  { title: 'COMMERCIAL', image: commercial },
  { title: 'INFRASTRUCTURE', image: infra }
];

const containerFadeUp = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      duration: 3
    }
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function HomePage() {
  return ( <>  
    <div className="bg-white font-sans">
      {/* Header */}
      <motion.header
        className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 px-6 py-2 shadow-md sticky top-0 z-50 bg-gradient-to-r from-teal-400/40 via-blue-300/30 to-green-300/40 backdrop-blur-md bg-opacity-60"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{ minHeight: 'unset', height: 'auto' }}
      >
        <div className="flex items-center gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E2D3B] text-center md:text-left tracking-tight leading-tight">
            MODERN <span className="block text-sm sm:text-base font-bold text-[#1E2D3B] tracking-wide">CONSTRUCTION CO.(INDIA)</span>
          </h1>
          <img src={companyLogo} alt="Company Logo" className="h-12 w-20 object-cover" />
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-[#1E2D3B] text-sm sm:text-base font-semibold w-full max-w-4xl mx-auto">
          {['HOME', 'ABOUT US', 'PROJECTS', 'SERVICES', 'CONTACT US'].map((item, i) => (
            <motion.a
              key={i}
              href="#"
              className="relative group hover:text-blue-700 transition-colors duration-500"
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative z-10">{item}</span>
              <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-0 bg-blue-700 transition-all duration-500 group-hover:w-full origin-left"></span>
            </motion.a>
          ))}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-4 sm:px-6 overflow-hidden">
        <motion.img
          src={HomeHeroSection}
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="relative z-10 text-white max-w-3xl sm:max-w-4xl px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-wide">
            BUILDING <br /> INDIA’S <br /> FUTURE
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 text-lg sm:text-xl rounded-md shadow-xl hover:from-blue-800 hover:to-blue-600 transition"
          >
            CALL NOW
          </motion.button>
        </motion.div>
      </section>

      {/* Info & Services */}
      <motion.section
        className="px-4 sm:px-6 py-20 bg-white max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={itemFade} className="px-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2D3B] mb-4 border-b-4 border-blue-900 inline-block pb-1">ABOUT MCC INDIA</h3>
          <p className="text-[#1E2D3B] leading-relaxed text-base sm:text-lg mt-4">
            Delivering excellence in civil and structural engineering for over 50 years.
          </p>
        </motion.div>

        <motion.div variants={itemFade} className="px-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1E2D3B] mb-4 border-b-4 border-blue-900 inline-block pb-1">OUR SERVICES</h3>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6" variants={containerFadeUp}>
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemFade}
                className="group relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-700 hover:scale-[1.03]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 text-center font-bold text-[#1E2D3B] text-sm sm:text-base">
                  {service.title}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <h4 className="text-white text-xl font-bold tracking-wide">{service.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 text-center px-4"
        initial="hidden"
        whileInView="show"
        variants={itemFade}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-wider">BUILDING INDIA’S FUTURE</h2>
      </motion.footer>
    </div>
    </>
  );
}

