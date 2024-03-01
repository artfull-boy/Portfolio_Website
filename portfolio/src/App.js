import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import React, {useState, useEffect} from "react"
import AnimatedCursor from "react-animated-cursor"
import Competence from './Components/competence/Competence';
import Projects from './Components/Projects/Projects';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
     <div className='flex flex-col gap-20'>
             
      {loading ? (
        <LoadingPage />
      ) : (
        <>

        <HeroSection />
        <Competence />
        <Projects />


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
