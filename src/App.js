import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contactus from "./sections/Contactus";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Contactus />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
