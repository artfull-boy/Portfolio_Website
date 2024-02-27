import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import React, {useState, useEffect} from "react"
import AnimatedCursor from "react-animated-cursor"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
     <div>
             
      {loading ? (
        <LoadingPage />
      ) : (
        <>

        <HeroSection />
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
