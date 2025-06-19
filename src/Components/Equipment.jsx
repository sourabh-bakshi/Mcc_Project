import { motion } from 'framer-motion';

const equipmentList = [
  {
    name: 'Crawler Cranes',
    quantity: '20+',
    description: 'High-capacity cranes for heavy lifting and structural assembly.'
  },
  {
    name: 'Hydraulic Excavators',
    quantity: '30+',
    description: 'Modern excavators for digging, trenching, and site preparation.'
  },
  {
    name: 'Concrete Transit Mixers',
    quantity: '25+',
    description: 'Efficient transport of ready-mix concrete to construction sites.'
  },
  {
    name: 'Bore Piling Rigs',
    quantity: '15+',
    description: 'Precision rigs for foundation and deep piling work.'
  },
  {
    name: 'Vibratory Compactors',
    quantity: '18+',
    description: 'Used for compacting soil, concrete, and asphalt efficiently.'
  },
  {
    name: 'Boom Placers',
    quantity: '10+',
    description: 'For accurate placement of concrete at difficult locations.'
  }
];

const itemFade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Equipment() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6" id="equipment">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Modern Construction Equipment
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transform hover:-translate-y-1 transition duration-500"
              variants={itemFade}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-[#1E2D3B] mb-2">{item.name}</h3>
              <p className="text-sm text-blue-700 font-semibold mb-2">Quantity: {item.quantity}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
