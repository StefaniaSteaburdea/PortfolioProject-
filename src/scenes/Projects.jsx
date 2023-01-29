import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects(){
    const container={
        hidden:{},
        visible:{
            transition: { staggerChildren:0.2}
        }
    }
   
    return(
        <section id="projects" className="pb-24 pt-32 justify-center ">
        {/* Header*/ }
        <motion.div
            className="md:w-3/5 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
        >
            <p className="font-playfair font-semibold text-4xl">
                    MY <span className="text-red">PROJECTS</span>
            </p>
            <p className="pt-5 pb-8 mb-5">These are some of my projects.</p>    
        </motion.div>
        {/* Projects*/ }
        <div className="flex justify-center">
        <motion.div
            className="sm:grid sm:grid-cols-2 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {projects.map((project)=>
            <ProjectCard project={project} />
            )}
        </motion.div>
        </div>
        </section>
    );
}