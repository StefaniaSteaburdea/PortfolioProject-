import { Link, useParams } from "react-router-dom"
import { projects } from "../data/projects";

import { motion } from "framer-motion";
import Footer from "./Footer";

export default function ProjectDetails(){
    const {id}=useParams();
    const project=projects[id-1];
    return(
        <div className="h-full">
         <motion.div
          className="min-h-[78%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="z-20 p-10">
            <p className="font-playfair font-semibold text-4xl mb-5">
                {project.title}
            </p>
            <div className="md:grid md:grid-cols-2 sm:justify-between items-center">
                <img src={`../assets/${project.image}`} alt=" " className="p-6 sm:order-2"/> 
                <div>
                <p className="indent-6 text-lg md:text-xl font-opensans"> {project.descr}</p>
                <p className="indent-6 text-lg md:text-xl font-opensans"> {project.descr2}</p>
                </div>
            </div>
            <Link to={{ pathname: project.link}} target="_blank"><button className="px-10 py-3  bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500" >
              DEMO
            </button></Link>
          </div>
        </motion.div>
        <Footer/>
        </div>
    )
}