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

const pageVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4, ease: 'easeIn' } },
};

export default function Clients() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#111827] to-[#1f2937] text-white px-8 py-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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
    </motion.div>
  );
}
