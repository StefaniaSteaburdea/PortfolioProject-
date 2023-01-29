import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";

export default function Home(){

    return(
        <section id="home" className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">

        {/* IMAGE SECTION */}
            <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                
                <div
                    className="relative z-0 ml-20 ">
                    <img
                    alt="profile"
                    className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                    src="assets/profile-image.png"/>
                </div>
                
            </div>
            {/* MAIN TEXT */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <p className="text-5xl md:text-6xl font-playfair z-10 text-center md:text-start">
                        Stefania {" "}
                        <span
                        className="sm:relative sm:font-semibold z-20 md:before:content-brush
                        before:absolute before:-left-[45px] before:-top-[85px] before:z-[-2]"
                        >
                        Steaburdea
                        </span>
                    </p>

                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    I am a motivated and hardworking junior software developer who is always looking for new challenges. One of my main skills is adaptability. I have the ability to learn new things fast, I am an ambitious person and I like working in teams.
                    </p>
                    </motion.div><motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                        <SocialMedia margin={"my-10"}/>
                    </motion.div></div>

                    
    </section>
    );
}