import { useEffect, useState } from 'react';
import useMediaQuerry from "./hooks/useMediaQuerry";
import Contact from './scenes/Contact';
import DotGroup from './scenes/DotGroup';
import Footer from './scenes/Footer';
import Home from './scenes/Home';
import MySkills from './scenes/MySkills';
import Navbar from './scenes/Navbar';
import Projects from './scenes/Projects';

function App() {
  
  const [selectedPage,setSelectedPage]=useState('home');
  const [isTopOfPage,setIsTopOfPage]=useState(true);
  const isAboveMediumScreen=useMediaQuerry("(min-width:1060px)");

  useEffect(()=>{
    const handleScroll=()=>{
       if(window.scrollY === 0) setIsTopOfPage(true);
         else setIsTopOfPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);
  },[])
  return (
    <div className="app bg-deep-blue">
     <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
     <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        )}
        <Home setSelectedPage={setSelectedPage}/>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills setSelectedPage={setSelectedPage}/>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Projects setSelectedPage={setSelectedPage}/>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact setSelectedPage={setSelectedPage}/>
      </div>
      <Footer setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
