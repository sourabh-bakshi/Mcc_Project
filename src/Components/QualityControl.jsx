import { motion } from 'framer-motion';

const qualityPoints = [
  {
    title: 'Quality Policy',
    content:
      'MCC India is committed to providing world-class civil construction services that meet international standards by implementing strict quality management processes.'
  },
  {
    title: 'Materials & Machinery',
    content:
      'We ensure the use of high-quality materials and regularly maintained machinery to maintain the structural integrity and longevity of our projects.'
  },
  {
    title: 'Trained Workforce',
    content:
      'Our workforce undergoes regular training programs to stay updated with the latest construction techniques and safety standards.'
  },
  {
    title: 'Third-Party Testing',
    content:
      'We perform third-party testing and verification for crucial project aspects to ensure complete transparency and quality assurance.'
  },
  {
    title: 'Continuous Monitoring',
    content:
      'Quality engineers are deployed on all sites to monitor every stage of construction and ensure all deliverables meet predefined benchmarks.'
  }
];

const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

export default function QualityControl() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white py-16 px-6 sm:px-10 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2D3B] mb-4">QUALITY CONTROL</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our focus on uncompromised quality standards ensures safety, reliability, and long-lasting structures in every project.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {qualityPoints.map((point, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemFade}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 hover:scale-[1.03]"
          >
            <h4 className="text-xl font-semibold text-[#1E2D3B] mb-2">{point.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{point.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
