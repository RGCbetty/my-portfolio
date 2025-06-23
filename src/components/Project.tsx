import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => {
          return (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.0 }}
                className="w-full lg:w-1/4"
              >
                <img
                  className="mb-6 rounded"
                  width={350}
                  height={400}
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.0 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <a
                  href={project?.link}
                  className="mb-2 font-semibold underline"
                  target="_blank"
                >
                  {project.title}
                </a>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
