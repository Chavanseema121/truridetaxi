import React from 'react'
import rocket from "../assets/home/rocket.png"
import watch from "../assets/home/watch.png"
import handmobile from "../assets/home/handmobile.png"
import apple from "../assets/home/apple.png"
import playstore from "../assets/home/sectionplay.png"
import qcode from "../assets/home/qcode.png"

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
          <div></div>
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
            <div>
              <p className='block text-4xl text-white text-bold text-nowrap'>For Android</p>
              <p className='mt-2 block text-xs text-white text-nowrap'>iOS 15.6+</p>
              <a href='#' className='mt-2 rounded block text-nowrap border border-[#FF2E00] py-2 px-4 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white'>Download Now</a>
              
            </div>
            <img src={qcode} className='h-26 w-26 my-auto'></img>

          </div>
          <div className=''>

          </div>

        </div>
      </div>
    </section>
  )
}
