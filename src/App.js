import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"; 
import Home from './sections/Home';
import Contactus from './sections/Contactus';
import Footer from './sections/Footer';
import Testimonials from './sections/Testimonial';
import About from "./sections/About"
import Features from './sections/Features';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Testimonials/>
      <Contactus/>
      <Footer/>
    </>
  );
}

export default App;
