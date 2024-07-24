import React from 'react';
import auto from "../assets/testimonials/auto.png";
import cab from "../assets/testimonials/cab.png";
import autobook from "../assets/testimonials/autobook.png";
import linetwo from "../assets/testimonials/linetwo.png";

const testimonials = [
  {
    quote: "Excited to join TruRide as a driver! Fair earnings, community support, and perks like insurance and ad-based extra income make it a game-changer. Can't wait for the launch! 🚗💼",
    imageSrc: auto
  },
  {
    quote: "Can't wait to try out TruRide as a rider! The user-friendly platform and reward points for every ride, combined with unique AI route technology, make it the ride-hailing solution I've been searching for. 🚗🎉",
    imageSrc: cab
  },
  {
    quote: "Exciting times ahead with TruRide! With a driver's union, community benefits, and a platform designed for both drivers and riders, we're thrilled to join this integrated mobility network. 🌟🚗",
    imageSrc: autobook
  }
];

export default function Testimonials() {
  return (
    <div className='mt-10'>
      <section className='mt-40 max-w-full h-auto bg-[#f9f9f9] p-5'>
        <div className="text-center">
          <h3 className='text-[#100062] text-3xl font-bold'> 
            Our Drivers & Riders <span className='text-[#FF2E00]'>Testimonials</span>
          </h3>
          <div className='flex justify-center mt-5'>
            <img 
              src={linetwo} 
              alt="Decorative line" 
              className="rotate-180 w-64" 
              style={{ alignItems: "center" }} 
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:justify-around items-start mt-20'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='flex flex-col items-center text-center max-w-xs'>
              <img src={testimonial.imageSrc} alt="" className='w-48 h-48 mb-5' />
              <p className='text-lg font-medium text-[#100062] mb-5'>
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
