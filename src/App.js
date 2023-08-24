
import { useEffect } from "react";
import About from "./components/About";
import AiMap from "./components/AiMap";
import Bg from "./components/Bg";
import Count from "./components/Count";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Plan from "./components/Plan";
import Trust from "./components/Trust";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  
  return (
    <div className="App bg-gray-950">
    <NavBar />
    <Bg />
    <Trust />
    <About />
    <Features />
    <AiMap />
    <Info />
    <Count />
    <Plan />
    <Footer />

    </div>
  );
}

export default App;
