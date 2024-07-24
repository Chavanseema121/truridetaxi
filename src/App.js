
import './App.css';
import Navbar from "./componants/Navbar";

import Home from './sections/Home';
import Footer from './sections/Footer'
import Contactus from './sections/Contactus';
import Testimonials from './sections/Testimonial';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Testimonials/>
    <Contactus/>
    <Footer/>
    
    </>
  );
}

export default App;
