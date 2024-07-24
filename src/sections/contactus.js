import React from 'react';
import circle from "../assets/contacts/circle.png"
import bar from "../assets/contacts/bar.png"
import lineimg from "../assets/contacts/lineimg.png"

function Contactus() {
  return (
    <div className='bg-white p-10  '>
            
    
      <section className="bg-gray-100 p-10 rounded-lg md:mb-6 mb-40">
        <div className="text-center mb-10">
          <h3 className='text-2xl font-bold text-indigo-900'>Contact Us</h3>
          <div className='mt-2'>
            <img src={bar} alt='bar' className='w-48 h-1 mx-auto'/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="flex flex-col w-full md:w-1/2 md:px-20">
            <div className="mb-4 w-full mx-auto">
              <label htmlFor="exampleFormControlInput1" className="block mb-2 font-semibold">Name</label>
              <input type="text" className="form-control w-full p-2 border rounded " id="exampleFormControlInput1" />
            </div>
            <div className="mb-4 w-full mx-auto">
              <label htmlFor="exampleFormControlInput1" className="block mb-2 font-semibold">Mobile Number</label>
              <input type="number" className="form-control  w-full p-2 border rounded" id="exampleFormControlInput1" />
            </div>
            <div className="mb-4 w-full mx-auto">
              <label htmlFor="exampleFormControlInput1" className="block mb-2 font-semibold">Email address</label>
              <input type="email" className="form-control w-full p-2 border rounded" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-4 w-full mx-auto">
              <label htmlFor="exampleFormControlInput1" className="block mb-2 font-semibold">You are a?</label>
              <input type="text" className="form-control w-full p-2 border rounded" id="exampleFormControlInput1" />
            </div>
            <div className="mb-4 w-full mx-auto">
              <label htmlFor="exampleFormControlTextarea1" className="block mb-2 font-semibold">Comments</label>
              <textarea className="form-control w-full p-4 border rounded" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="bg-[#ff2E00] max-w-md mx-auto text-white w-[197px] h-[48px] p-2 rounded font-bold text-[22px]">Submit</button>
          </div>
          <div className='hidden md:flex justify-center'>
            <img src={lineimg} alt='line' className="h-90 w-px"/>
          </div>
          <div className='hidden md:flex justify-center'>
           
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <p className='text-3xl text-red-600 font-bold'>Head Office:</p>
              <p className='text-xl text-indigo-900'>
                H.no-3-11-368/Flat no; 401, 4th<br />
                Floor, above old Indusind<br />
                Finance Bank, Back side of Axis<br />
                Bank, L.B Nagar, Hyderabad,<br />
                Telangana 500068
              </p>
            </div>
            <div>
              <p className='text-3xl text-red-600 font-bold'>Contact us:</p>
              <p className='text-xl text-indigo-900'>
                Email- truridetaxi@gmail.com<br />
                Helpline No. +91 9346467553<br />
                <span className='flex items-center'>
                    <img src={circle} width={15} alt='circle' />
                    -truridetaxi.com
                </span>
              </p>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Contactus;
