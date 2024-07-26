import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"; // Correct the folder name "components"
import Home from './sections/Home';
import Contactus from './sections/Contactus';
import Footer from './sections/Footer';
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
