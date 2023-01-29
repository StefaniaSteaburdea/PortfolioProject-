import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuerry";

export default function MySkills(){
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pb-24 pt-2 md:pt-12">

      <div className="md:flex md:justify-between md:gap-16 mt-20 md:mt-28 ">
      <div className="mt-3 sm:mt-0 sm:order-2 pb-10 " >
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.jpg"
              />
            </div>
          ) : (
            <div className="flex justify-center">
            <img alt="skills" className="z-10" src="assets/skills-image.jpg" />
            </div>
          )}
        </div>
        <motion.div
          className="md:w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="items-center text-center z-20">
          <p className="font-playfair font-semibold text-4xl mb-12">
            MY <span className="text-red">SKILLS</span>
          </p>
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-1 mx-auto w-5/6 justify-between">
          <ul className=" marker:text-red list-disc ml-5 text-xl font-opensans text-start">
            <li>React</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Relational databases - MySQL</li>
            <li>Java</li>
          </ul>
           <ul className=" marker:text-red list-disc ml-5 text-xl font-opensans text-start">
            <li>Object-oriented programming</li>
            <li>Version Control /Git</li>
            <li>Agile frameworks</li>
            <li>C++</li>
            <li>Non-relational databases (Firebase)</li>
            <li>C</li>
          </ul>
          </div>
          </div>
        </motion.div>

        
      </div>
    </section>
    );
}