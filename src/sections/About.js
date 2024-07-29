// import React from 'react';
// import airo from '../assets/about/airo.png';
// import roundlogo from '../assets/about/roundlogo.png';

// function About() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white w-[1520px] h-[500px]">
//       <div className="w-full p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-indigo-900">
//           About our <span className="text-orange-500">TruRide</span>
//         </h1>
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Left side - Image */}
//           <div className="relative mb-6 md:mb-0 md:mr-6 flex justify-center items-center w-full md:w-1/2">
//             <img
//               src={roundlogo}
//               alt="TruRide Logo"
//               className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-112 rounded-full"
//             />
//           </div>

//           {/* Right side - Text content */}
//           <div className="flex flex-col items-start text-left text-lg sm:text-xl lg:text-2xl text-gray-700 space-y-4 w-full md:w-1/2">
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <img src={airo} alt="arrow" className="h-6 w-6 mr-2 mt-1" />
//                 0% Commission fee on Cabs & Auto-wala. And we have drivers stake in our company
//               </li>
//               <li className="flex items-start">
//                 <img src={airo} alt="arrow" className="h-6 w-6 mr-2 mt-1" />
//                 We partnered with advertisement to reward more commission to our TruRide drivers
//               </li>
//               <li className="flex items-start">
//                 <img src={airo} alt="arrow" className="h-6 w-6 mr-2 mt-1" />
//                 AI route mapping, for Drivers for easy access to users location
//               </li>
//               <li className="flex items-start">
//                 <img src={airo} alt="arrow" className="h-6 w-6 mr-2 mt-1" />
//                 Two way cab booking through, Call or WhatsApp & App
//               </li>
//               <li className="flex items-start">
//                 <img src={airo} alt="arrow" className="h-6 w-6 mr-2 mt-1" />
//                 User Friendly interface
//               </li>
//               <li className="flex items-start">
//                 <img src={airo} alt="arrow" className="h-6 w-6 mr-2 mt-1" />
//                 AI Gamified rewards
//               </li>
//             </ul>
//             <div className="w-full flex justify-center">
//               <button className="mt-6 px-6 py-3 text-center bg-orange-500 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
//                 Download the App
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import airo from '../assets/about/airo.png';
import roundlogo from '../assets/about/roundlogo.png';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-9xl bg-white rounded-lg shadow-md mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-indigo-900">
          About our <span className="text-[#FF2E00]">TruRide</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Image */}
          <div className="flex justify-center items-center w-full md:w-1/2 p-4">
            <img
              src={roundlogo}
              alt="TruRide Logo"
              className="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-112 rounded-full"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col items-start text-left text-lg sm:text-xl lg:text-2xl text-gray-700 space-y-4 w-full md:w-1/2 p-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <img src={airo} alt="arrow" className="h-[19px] w-[26px] mr-2 mt-1" />
                0% Commission fee on Cabs & Auto-wala. And we have drivers stake in our company
              </li>
              <li className="flex items-start">
                <img src={airo} alt="arrow" className="h-[19px] w-[26px] mr-2 mt-1" />
                We partnered with advertisement to reward more commission to our TruRide drivers
              </li>
              <li className="flex items-start">
                <img src={airo} alt="arrow" className="h-[19px] w-[26px] mr-2 mt-1" />
                AI route mapping, for Drivers for easy access to users location
              </li>
              <li className="flex items-start">
                <img src={airo} alt="arrow" className="h-[19px] w-[26px] mr-2 mt-1" />
                Two way cab booking through, Call or WhatsApp & App
              </li>
              <li className="flex items-start">
                <img src={airo} alt="arrow" className="h-[19px] w-[26px] mr-2 mt-1" />
                User Friendly interface
              </li>
              <li className="flex items-start">
                <img src={airo} alt="arrow" className="h-[19px] w-[26px] mr-2 mt-1" />
                AI Gamified rewards
              </li>
            </ul>
            <div className="w-full flex justify-center">
              <button className="mt-6 px-6 py-3 text-center bg-[#FF2E00] text-black rounded-lg text-lg font-semibold shadow-md hover:bg-[#FF2E00] transition duration-300">
                Download the App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

