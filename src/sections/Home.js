import React from 'react'
import rocket from "../assets/home/rocket.png"
import watch from "../assets/home/watch.png"
import handmobile from "../assets/home/handmobile.png"
import apple from "../assets/home/apple.png"
import playstore from "../assets/home/sectionplay.png"
import qcode from "../assets/home/qcode.png"
import camera from "../assets/contacts/camera.png"
import google from "../assets/contacts/google.png"
import mailbox from "../assets/contacts/mailbox.png"
import multiply from "../assets/contacts/multiply.png"
import facebook from "../assets/contacts/facebook.png"
import linkedin from "../assets/contacts/linkedin.png"
import logo from "../assets/contacts/logo.png"
import mbox from "../assets/contacts/mbox.png"


export default function Home() {
  return (
    <section className='min-h-screen w-full py-10'>
       
      <div className='w-11/12 mx-auto'>
        <div className='flex gap-5 w-full justify-center'> 
          <img src={rocket} width={40}></img>
          <p className='font-bold text-4xl text-[#100062]'>Launching Soon</p>
          <img src={watch} width={35}></img>
        </div>
        <div className='py-6 w-100 flex gap-4'>
          {/* left */}
          <div className='my-8 w-1/2'>
            <h1 className='font-bold text-xl'>The most Affordable & Reliable <span className='text-[#FF2E00]'>“TruRide”</span> Platform</h1>
            <h2 className='mt-8 font-bold text-4xl text-[#100062]'>Introducing <span className='text-[#FF2E00]'>"TruRide"</span> - India's Premier AI-Infused Gamified Route Technology Platform!</h2>
            <h3 className='mt-8 text-xl font-normal text-[#100062]'>Welcome to <span className='text-[#FF2E00]'>TruRidetaxi</span>, the innovative AI-driven service simplifying cab, taxi, auto, and bike bookings. Dial our unique #360 number from your mobile for a seamless, app-free ride experience.</h3>
             <div className='w-full flex gap-4 mt-20'>
              <div className='bg-black rounded px-6 py-3 flex gap-4'>
                <img src={apple} width={50}></img>
                <div>
                  <p className='block text-white font-medium'>Download On</p>
                  <p className='block text-white text-3xl font-medium'>App Store</p>
                </div>
              </div>
              <div className='bg-black rounded px-6 py-3 flex gap-4'>
                <img src={playstore} width={50}></img>
                <div>
                  <p className='block text-white font-medium'>Get it on</p>
                  <p className='block text-white text-3xl font-medium'>Google Pay</p>
                </div>
              </div>
             </div>
          </div>
          {/* right */}
          <div className="my-8 md:w-1/2 w-full">
          <img
                src={handmobile}
                className="block md:absolute md:mx-auto bottom-0 right-0 "
                alt="Phone">
                   
          </img>
          </div>
        </div>
      </div>
      <div className='bg-black w-full py-10 flex justify-center gap-10'>
        {/* left */}
        <div className='my-8 w-[40%] mx-auto'>
          <h1 className='block mt-8 text-4xl text-white font-bold'>Download The <span className='text-[#FF2E00]'>TruRide</span> </h1>
          <h1 className='text-white font-bold text-4xl'>Application Now</h1>
          <h4 className='block mt-8  text-xl text-white font-medium'>Download TruRide: the AI-powered ride booking app with gamified routes. Unlock rewards as a user, and drivers enjoy bonuses with AI-enhanced mapping. Get the best offers now!</h4>
        </div>
        {/* right */}
        <div className='flex flex-col gap-6 w-[40%] mx-auto'>
          <div className='bg-[#434343] rounded  px-8 w-full py-4 flex gap-10'>
            <div className=''>
              <p className='block text-4xl text-white text-bold text-nowrap'>For Android</p>
              <p className='mt-2 block text-xs text-white text-nowrap'>iOS 15.6+</p>
              <a href='#' className='mt-2 rounded block text-nowrap border border-[#FF2E00] py-2 px-4 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white'>Download App</a>
              
            </div>
            <img src={qcode} className='h-26 w-26 my-auto'></img>
            </div>
            <div className='bg-[#434343] rounded  px-8 w-full py-4 flex gap-10'>
            <div className=''>
              <p className='block text-4xl text-white text-bold text-nowrap'>For Android</p>
              <p className='mt-2 block text-xs text-white text-nowrap'>iOS 15.6+</p>
              <a href='#' className='mt-2 rounded block text-nowrap border border-[#FF2E00] py-2 px-4 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white'>Download App</a>
              
            </div>
            <img src={qcode} className='h-26 w-26 my-auto'></img>
            </div>
         

        </div>
      </div>
      <div className='px-10 pt-12  bg-black w-full pb-48 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        <div className='mt-8 p-4'>
          <div className='px-3 py-2 bg-white rounded w-fit'>
          <img src={logo} width={120} ></img>
          </div>
          <p className='block mt-8  text-xs text-white font-medium'>TruRide offers an innovative AI-powered platform for booking rides, featuring gamified routes. Users are incentivized with rewards for booking rides, while drivers can earn bonuses through the AI-enhanced gamified route mapping system.</p>
          <div className='flex gap-6 mt-5'>
            <img src={camera} width={20}></img>
            <img src={google} width={20}></img>
            <img src={mailbox} width={20}></img>
            <img src={multiply} width={20}></img>
            <img src={facebook} width={20}></img>
            <img src={linkedin} width={20}></img>
            
          </div>
        </div>
        <div className='text-white mt-10 px-12'>
          <p className='font-bold pb-8'>company</p>
          <p className=''>Home</p>
          <p className=''>Features</p>
          <p className=''>About us</p>
          <p className=''>How its works</p>
          <p className=''>Testimonial</p>
          <p className=''>Conatacts</p>
        </div>
        <div className='text-white mt-10'>
          <p className='font-bold pb-8'>Contact</p>
          <p>(+91) 9346467553</p>
          <p>www.truridetaxi.com</p>
          <p>truridetaxi@gmail.com</p>
          <p>H.no-3-11-386/Flat:no401.4th Floor.above old Indusland Finance Bank.Back side of Axis Bank,L.B Nagar,Hyderabad,Telangana 500068</p>
          
        </div>
        <div className='text-white mt-10 font-bold space-y-6'>
          <p className='font-bold pb-8 text-xm'>Get the latest information</p>
          <div>
            <img src={mbox} width={180}></img>
          </div>

        </div>
      </div>
      <div>
        <div className=''>
          {/* left */}
          <p>Empowering Drivers, Rewarding Users with AI route mapping</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}
