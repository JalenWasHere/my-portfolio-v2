import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-bootstrap-icons";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployment_link,
}) => {
  return (
    <motion.div
      className="mx-auto"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[28rem]"
      >
        <div className="flex flex-col h-full">
          <div className="w-full h-40 relative">
            <img src={image} alt={name} className="w-full h-full rounded-2xl" />
            <div className="absolute gap-2 top-0 right-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open(deployment_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Link />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <p className="text-gray-200 text-sm mt-2">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-lg max-w-3xl leading-7"
        >
          These are just a few of the projects I've made. All of these projects
          are deployed and the code is available on GitHub, with more to come
          soon!
        </motion.p>
      </div>
      <div className="mt-14 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
