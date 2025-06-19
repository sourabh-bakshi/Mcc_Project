import { motion } from 'framer-motion';
import companyBuilding from './Images/infra.jpg';
import ceoImage from './Images/ceo.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function AboutUs() {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 max-w-screen-xl mx-auto">
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-[#1E2D3B] mb-10"
      >
        About MCC India
      </motion.h2>

      {/* Top Content: Intro & Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Established in 1971, Modern Construction Company (India) has become one of India’s most trusted names in civil and structural engineering.
            We deliver projects across Residential, Commercial, and Infrastructure sectors with a focus on precision, innovation, and integrity.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 50 years of legacy, our expertise includes reinforced concrete structures, industrial buildings, and specialized foundation work. We are ISO-certified and driven by quality.
          </p>
        </motion.div>
        <motion.img
          src={companyBuilding}
          alt="Company Building"
          className="rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        />
      </div>

      {/* Leadership */}
      <motion.div
        className="mt-20 grid md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <img src={ceoImage} alt="CEO" className="rounded-xl shadow-md h-full object-cover" />
        <div>
          <h3 className="text-2xl font-bold text-[#1E2D3B] mb-4">Leadership Message</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            "At MCC India, we believe that quality is never an accident. It is always the result of intelligent effort. Our commitment to excellence and innovation keeps us ahead in the industry, delivering landmark projects across India."
          </p>
          <p className="mt-4 text-[#1E2D3B] font-semibold">— Mr. Arvind Kumar, Chairman</p>
        </div>
      </motion.div>

      {/* Timeline (optional future enhancement) */}
    </div>
  );
}
