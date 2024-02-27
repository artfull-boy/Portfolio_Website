import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import React, {useState, useEffect} from "react"

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
        <HeroSection />
      )}
    </div>
  );
}

export default App;
