import { motion } from 'framer-motion';
import ongoing from './Images/infra.jpg';
import executed from './Images/infra.jpg';

const projects = {
  ongoing: [
    {
      title: 'Construction of Residential Complex at AIIMS, Gorakhpur',
      client: 'HSCC (India) Ltd.',
      location: 'Gorakhpur',
      image: ongoing,
    },
    {
      title: 'Academic cum Residential Block at IIIT Ranchi',
      client: 'NBCC (India) Ltd.',
      location: 'Ranchi',
      image: ongoing,
    },
    // Add more as needed
  ],
  executed: [
    {
      title: 'Construction of ESIC Medical College & Hospital',
      client: 'ESIC',
      location: 'Bihar',
      image: executed,
    },
    {
      title: 'Girls Hostel Complex at IIT BHU',
      client: 'IIT BHU',
      location: 'Varanasi',
      image: executed,
    },
    // Add more as needed
  ]
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Projects() {
  return (
    <div className="bg-white px-4 sm:px-6 py-16 max-w-screen-xl mx-auto">
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="text-3xl sm:text-4xl font-bold text-[#1E2D3B] mb-8 text-center"
      >
        OUR PROJECTS
      </motion.h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-blue-900 mb-6">Ongoing Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.ongoing.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-[#1E2D3B]">{project.title}</h4>
                <p className="text-sm text-gray-600">Client: {project.client}</p>
                <p className="text-sm text-gray-600">Location: {project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-6">Executed Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.executed.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-[#1E2D3B]">{project.title}</h4>
                <p className="text-sm text-gray-600">Client: {project.client}</p>
                <p className="text-sm text-gray-600">Location: {project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
