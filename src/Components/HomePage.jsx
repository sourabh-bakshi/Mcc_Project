import { motion } from 'framer-motion';
import HomeHeroSection from './Images/HomeHeroSection.jpg';
import residential from './Images/residential.jpg';
import commercial from './Images/commercial.jpg';
import infra from './Images/infra.jpg';
import companyLogo from './Images/logo.png';

const pageVariants3D = {
  initial: {
    rotateY: -90,
    opacity: 0,
    transformOrigin: 'left center',
    perspective: 1000,
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    },
  },
  exit: {
    rotateY: 90,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};


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
  return (
    <motion.div
      // className="min-h-screen bg-gradient-to-br from-[#111827] to-[#1f2937] text-white px-8 py-12"      
        variants={pageVariants3D}
        initial="initial"
        animate="animate"
        exit="exit"
    >
    <div className="bg-white font-sans">
      
      <section className="relative h-[90vh] flex items-center px-4 sm:px-6 overflow-hidden">
        <motion.img
          src={HomeHeroSection}
          alt="Construction"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
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
            Delivering excellence in civil and structural<br/> engineering for over 50 years.
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
      className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-4 text-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Floating Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-40px] left-[10%] w-24 h-24 bg-blue-200 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-[-30px] right-[15%] w-32 h-32 bg-green-200 rounded-full blur-xl animate-ping" />
        <div className="absolute top-[30%] right-[5%] w-20 h-20 bg-teal-200 rounded-full blur-xl animate-pulse" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <img src={companyLogo} alt="Company Logo" className="h-16 object-contain" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-wider mb-4">
          BUILDING INDIA’S FUTURE
        </h2>
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Modern Construction Co. (India). All rights reserved.
        </p>
      </div>
    </motion.footer>

    </div>
    </motion.div>
  );
}

