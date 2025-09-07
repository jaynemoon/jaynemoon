import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-20 bg-white dark:bg-stellar-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-5xl mb-4"></span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Jayne Moon
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Passionate full-stack developer illuminating the digital landscape 
            with moonlit creativity and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Profile Image */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-stellar-blue-600 to-stellar-accent-purple dark:bg-gradient-to-r dark:from-stellar-slate-800 dark:to-stellar-slate-700 rounded-xl p-8 text-center border border-gray-200 dark:border-stellar-slate-700 shadow-stellar"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-48 rounded-full mx-auto bg-gradient-to-r from-stellar-blue-400 to-stellar-accent-purple flex items-center justify-center border-4 border-white dark:border-stellar-slate-600">
                  <span className="text-8xl"></span>
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Jayne Moon</h3>
              <p className="text-blue-100 dark:text-stellar-slate-300">Full Stack Developer</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                My Story
              </h2>
              <div className="text-gray-600 space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Hello! I'm a full-stack developer with a passion for creating
                  digital experiences that are not only functional but also
                  delightful to use. My journey in web development started 5 years
                  ago, and I've been constantly learning and evolving ever since.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  I specialize in modern web technologies like React, TypeScript,
                  Node.js, and cloud services. I love the process of taking an idea
                  from concept to a fully realized product that users love.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open source projects, or sharing my knowledge
                  through technical writing and mentoring.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What I Do
              </h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2, staggerChildren: 0.1 }}
              >
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-2xl mb-4">🎨</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600">
                    Creating responsive and interactive user interfaces using
                    modern frameworks and best practices.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-2xl mb-4">⚙️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Backend Development
                  </h3>
                  <p className="text-gray-600">
                    Building robust APIs and server-side applications with
                    scalability and performance in mind.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-2xl mb-4">☁️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cloud & DevOps
                  </h3>
                  <p className="text-gray-600">
                    Deploying and managing applications in the cloud with
                    automated CI/CD pipelines.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.7 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="text-2xl mb-4">📱</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Mobile Development
                  </h3>
                  <p className="text-gray-600">
                    Creating cross-platform mobile applications using React
                    Native and progressive web apps.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Senior Frontend Developer
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Tech Company • 2022 - Present
                  </p>
                  <p className="text-gray-600 mt-2">
                    Led development of multiple React applications, mentored junior
                    developers, and implemented best practices for code quality.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Full Stack Developer
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Startup Inc • 2020 - 2022
                  </p>
                  <p className="text-gray-600 mt-2">
                    Built and maintained web applications using React, Node.js, and
                    PostgreSQL. Worked closely with design and product teams.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Junior Developer
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Digital Agency • 2019 - 2020
                  </p>
                  <p className="text-gray-600 mt-2">
                    Developed responsive websites and learned modern web
                    development practices in a fast-paced agency environment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;