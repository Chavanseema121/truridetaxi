import React from "react";
import Navbar from "./components/Navbar";
// import About from "./sections/About";
import Contact from "./sections/Contact";
// import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Testimonial from "./sections/Testimonial";
import Home from "./sections/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <About /> */}
      <Home/>
      
      {/* <Features /> */}
      <Testimonial />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
