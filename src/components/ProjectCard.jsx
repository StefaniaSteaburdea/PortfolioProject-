import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({project}){
    const {id,title,subtitle,photo}=project;
    const projectVariant={
        hidden:{opacity:0, scale:0.8},
        visible:{opacity:1,scale:1}
    }
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-10 text-deep-blue`;
    const buttonStyles="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2";
    
  const projectTitle = title.split(" ").join("-").toLowerCase();
    
   const navigate=useNavigate();

  return (
    <motion.div variants={projectVariant} className="relative m-3">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-6">
          {subtitle}
        </p>
        <button onClick={()=>navigate(`/projects/${id}`)} className={buttonStyles}>Details</button>
      </div>
      <img src={`../assets/${photo}`} alt={projectTitle} />
    </motion.div>
  );
}