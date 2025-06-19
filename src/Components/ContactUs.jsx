import { easeInOut, motion } from 'framer-motion';

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


const itemFade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ContactUs() {
  return (
    <motion.div
      className="min-h-screen bg-[#0f172a] text-white p-8"
        variants={pageVariants3D}
        initial="initial"
        animate="animate"
        exit="exit"
    >
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-green-100 rounded-lg shadow-xl"
    >
      <motion.h2
        variants={itemFade}
        className="text-3xl sm:text-4xl font-bold text-[#1E2D3B] text-center mb-12"
      >
        Contact Us
      </motion.h2>

      <motion.div
        variants={itemFade}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Contact Details */}
        <div className="text-[#1E2D3B] space-y-4">
          <h3 className="text-xl font-semibold">Corporate Office:</h3>
          <p>27, N.S. Road, 4th Floor, Kolkata - 700001</p>
          <p>Email: <a href="mailto:info@mccgroup.in" className="text-blue-700 underline">info@mccgroup.in</a></p>
          <p>Phone: <a href="tel:+913322386149" className="text-blue-700 underline">+91 33 2238 6149</a></p>
          <p>Fax: +91 33 2243 7644</p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold">Working Hours:</h4>
            <p>Monday - Friday: 10:00 AM – 6:30 PM</p>
            <p>Saturday: 10:00 AM – 2:30 PM</p>
          </div>
        </div>

        {/* Contact Form (non-functional placeholder) */}
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
    </motion.div>
  );
}
