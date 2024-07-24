
import './App.css';
import Navbar from "./componants/Navbar";

import Home from './sections/Home';
import Footer from './sections/Footer'
import HowItWorks from './sections/Howitworks';
import Testimonials from './sections/Testimonial';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Testimonials/>
    <HowItWorks/>
    <Footer/>
    
    </>
  );
}

export default App;
