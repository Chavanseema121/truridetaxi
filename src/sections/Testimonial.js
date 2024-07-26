import React from 'react';
import auto from "../assets/testimonials/auto.png";
import cab from "../assets/testimonials/cab.png";
import autobook from "../assets/testimonials/autobook.png";
import linetwo from "../assets/testimonials/linetwo.png";
import groupone from "../assets/testimonials/groupone.png";
import grouptwo from "../assets/testimonials/grouptwo.png";
import groupthree from "../assets/testimonials/groupthree.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import lines from "../assets/testimonials/lines.png"


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
const blogs = [
  {
    title: "Choosing the App for You",
    date: "23 Oct, 2023",
    author: "Admin",
    image: groupone, 
  },
  {
    title: "Taxi Booking: Best Taxi Booking Apps for Budget Travelers",
    date: "23 Oct, 2023",
    author: "Admin",
    image: grouptwo, 
  },
  {
    title: "Taxi Booking: Best Taxi Booking Apps for Budget Travelers",
    date: "23 Oct, 2023",
    author: "Admin",
    image: groupthree, 
  },
];


const BlogCard = ({ title, date, author, image }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-4">
    <button className="rounded text-nowrap border border-[#FF2E00] py-2 px-4 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white">
        Taxi Booking
      </button>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-1 flex items-center">
        <FontAwesomeIcon icon={faUser} className="mr-2 text-[#FF2E00]" />
        {author}
      </p>
      <p className="text-gray-600 flex items-center">
        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-[#FF2E00]" />
        {date}
      </p>
    </div>
  </div>
);

const BlogSection = () => (
  <div className="container w-full mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-25">Our Latest <span className='text-[#FF2E00]'> Blog <span className='text-[#100062]'> &  </span> News </span> </h2>
    <div className="flex justify-center mb-20">
              <img
                src={lines}
                alt="lines"
                className="rotate-180 w-60 h-1 mx-auto"
                
              />
            </div>
       <p className='text-[15] text-center mb-10 font-semibold text-lg'>"TruRidetaxi: Effortlessly book rides via AI call automation from your mobile dialpad, with 2D maps for easy navigation and brand icon <br/> rewards to earn redeemable coins." </p>     
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  </div>
);



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

      <BlogSection />

    </div>





  );
}
