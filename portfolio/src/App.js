import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import React, {useState, useEffect} from "react"
import AnimatedCursor from "react-animated-cursor"
import Competence from './Components/competence/Competence';
import Projects from './Components/Projects/Projects';
import Work from './Components/work/Work';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function App() {
  const [loading, setLoading] = useState(true);
  
  const lenis = new Lenis()
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
     <div className='flex flex-col gap-20'>
             
      {loading ? (
        <LoadingPage />
      ) : (
        <>

        <HeroSection />
        <Competence/>
        <Projects />
        <Work />
        <Testimonials />
        <Footer />


        </>
      )}
       <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='0, 0, 255'
      outerAlpha={0.4}
      innerScale={0.5}
      outerScale={5}
    />
    </div>
  );
}

export default App;
