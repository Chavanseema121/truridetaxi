import React from "react";
import camera from "../assets/contacts/camera.png";
import google from "../assets/contacts/google.png";
import mailbox from "../assets/contacts/mailbox.png";
import multiply from "../assets/contacts/multiply.png";
import facebook from "../assets/contacts/facebook.png";
import linkedin from "../assets/contacts/linkedin.png";
import logo from "../assets/logo.png";

import apple from "../assets/contacts/apple.png";
import pstore from "../assets/contacts/pstore.png";
import arrow from "../assets/arrow.png"

export default function Footer(){
  return (
    <section className="relative">
      

      <div className="px-10 pt-12  bg-black w-full pb-48 mt-10 grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="mt-48 px-4">
          <div className="px-3 py-2 bg-white rounded w-fit mx-auto md:mx-0">
            <img src={logo} alt="logo" width={120}></img>
          </div>
          <p className="block mt-8  text-xs text-white font-medium text-center md:text-left">
            TruRide offers an innovative AI-powered platform for booking rides,
            featuring gamified routes. Users are incentivized with rewards for
            booking rides, while drivers can earn bonuses through the
            AI-enhanced gamified route mapping system.
          </p>
          <div className="flex gap-6 mt-5">
            <img src={camera}  alt="camera"width={20}></img>
            <img src={google} alt="google" width={20}></img>
            <img src={mailbox} alt="mailbox" width={20}></img>
            <img src={multiply} alt="multiply" width={20}></img>
            <img src={facebook}  alt="facebook" width={20}></img>
            <img src={linkedin}  alt="linkedin" width={20}></img>
          </div>
        </div>
        <div className="text-white md:mt-48 mt-4 px-12 text-center md:text-left">
          <p className="font-bold text-2xl pb-8">company</p>
          <p className="">Home</p>
          <p className="">Features</p>
          <p className="">About us</p>
          <p className="">How its works</p>
          <p className="">Testimonial</p>
          <p className="">Contacts</p>
        </div>
        <div className="text-white md:mt-48 mt-4 text-center md:text-left">
          <p className="font-bold text-2xl pb-8 ">Contact</p>
          <p>(+91) 9346467553</p>
          <p>www.truridetaxi.com</p>
          <p>truridetaxi@gmail.com</p>
          <p>
            H.no-3-11-386/Flat:no401.4th Floor.above old Indusland Finance
            Bank.Back side of Axis Bank,L.B Nagar,Hyderabad,Telangana 500068
          </p>
        </div>
        <div className="text-white md:mt-48 mt-4 font-bold space-y-6 text-center md:text-left px-4">
          <p className="font-bold pb-8 text-2xl">Get the latest information</p>
          <div className="flex text-white px-4">
            <input  placeholder="Email Address" className="px-1 w-full md:w-fit  bg-[#505050]"></input>
            <button className="bg-[#FF2E00] h-full p-2 flex items-center justify-center">
              <img src={arrow} alt="arrow" width={30}></img>
            </button>
          </div>
        </div>
      </div>


      <div className="w-4/6 bg-[#FF2E00] py-4 md:py-8 px-4 gap-2  text-center text-white flex justify-center items-center flex-col rounded-lg absolute top-[-15%] md:top[-40%] left-[50%] right-[50%] translate-x-[-50%] md:translate-y-[-30%] ">
        <p className="">Unlock your Dream affordable Ride with our TruRide</p>
        <p className="text-bold  md:text-4xl text-xl">Download the App Now!</p>
        <p>
          TruRide: AI-powered ride booking with gamified routes.<br/> Users earn
          rewards; drivers get bonuses via<br/> AI-enhanced mapping.
        </p>
        <div className="w-full flex justify-between md:justify-center md:flex-row flex-col items-center gap-4 md:mt-20 ">
          <div className="bg-black rounded px-3 md:px-6 py-3 flex gap-4 w-fit grow md:grow-0">
            <img src={apple} alt="apple" className="w-10 md:w-12"></img>
            <div>
              <p className="block text-white font-medium">Download On</p>
              <p className="block text-white md:text-3xl text-lg font-medium">
                App Store
              </p>
            </div>
          </div>
          <div className="bg-black rounded px-3 md:px-6 py-3  flex gap-4 w-fit grow md:grow-0">
            <img src={pstore} alt="pstore" className="w-10 md:w-12"></img>
            <div>
              <p className="block text-white font-medium">Get it on</p>
              <p className="block text-white md:text-3xl text-lg font-medium">
                Google Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
