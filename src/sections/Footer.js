import React from 'react'
import camera from "../assets/contacts/camera.png"
import google from "../assets/contacts/google.png"
import mailbox from "../assets/contacts/mailbox.png"
import multiply from "../assets/contacts/multiply.png"
import facebook from "../assets/contacts/facebook.png"
import linkedin from "../assets/contacts/linkedin.png"
import logo from "../assets/contacts/logo.png"
import mbox from "../assets/contacts/mbox.png"


export default function Footer() {
  return (
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
  )
}

