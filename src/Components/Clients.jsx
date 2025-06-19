import { motion } from 'framer-motion';

const clients = [
  'Indian Railways',
  'Delhi Metro Rail Corporation',
  'Public Works Department (PWD)',
  'NBCC India Ltd.',
  'CPWD',
  'Municipal Corporations',
  'Private Builders & Developers'
];

const containerFadeUp = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      duration: 2
    }
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Clients() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 sm:px-8 min-h-[60vh]">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemFade}
          className="text-3xl sm:text-4xl font-bold text-[#1E2D3B] mb-6"
        >
          OUR CLIENTS
        </motion.h2>
        <motion.p
          variants={itemFade}
          className="text-[#1E2D3B] text-lg mb-12"
        >
          Trusted by India's leading public and private sector organizations.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerFadeUp}
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={itemFade}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 hover:scale-[1.02] hover:shadow-2xl transition-transform duration-500"
            >
              <h4 className="text-xl font-semibold text-blue-900">{client}</h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
