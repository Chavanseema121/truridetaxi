import React from "react";
import rocket from "../assets/home/rocket.png";
import watch from "../assets/home/watch.png";
import handmobile from "../assets/home/handmobile.png";
import apple from "../assets/home/apple.png";
import playstore from "../assets/home/sectionplay.png";
import qcode from "../assets/home/qcode.png";
// import doremon from "../assets/home/doremon.png";
import iphone from "../assets/home/doremon.png";
import amico from "../assets/home/amico.png";
import grouptwo from "../assets/home/Grouptwo.png";
import line from "../assets/home/line.png";
import benefittruride from "../assets/home/benefittruride.png";

export default function Home() {
  return (
    <>
      <section className="min-h-screen w-full py-10">
        <div className="w-11/12 mx-auto">
          <div className="flex gap-5 w-full justify-center">
            <img src={rocket} width={40} alt="Rocket"></img>
            <p className="font-bold text-2xl md:text-4xl text-[#100062] uppercase">
              Launching Soon
            </p>
            <img src={watch} width={35} alt="Watch"></img>
          </div>
          <div className="py-6 w-100 flex md:flex-row flex-col gap-4">
            {/* left */}
            <div className="my-8 md:w-1/2 w-full">
              <h1 className="font-bold text-xl text-center md:text-left">
                The most Affordable & Reliable{" "}
                <span className="text-[#FF2E00]">“TruRide”</span> Platform
              </h1>
              <h2 className="mt-8 font-bold text-2xl md:text-4xl text-center md:text-left text-[#100062]">
                Introducing <span className="text-[#FF2E00]">"TruRide"</span> -
                India's Premier AI-Infused Gamified Route Technology Platform!
              </h2>
              <h3 className="mt-8 text-xl font-normal text-[#100062]">
                Welcome to <span className="text-[#FF2E00]">TruRidetaxi</span>,
                the innovative AI-driven service simplifying cab, taxi, auto,
                and bike bookings. Dial our unique #360 number from your mobile
                for a seamless, app-free ride experience.
              </h3>
              <div className="w-full flex justify-between md:justify-start gap-4 mt-20">
                <div className="bg-black rounded px-3 md:px-6 py-3 flex gap-4 w-fit grow md:grow-0">
                  <img src={apple} alt="Apple" className="w-10 md:w-12 " ></img>
                  <div>
                    <p className="block text-white font-medium">Download On</p>
                    <p className="block text-white md:text-3xl text-lg font-medium">
                      App Store
                    </p>
                  </div>
                </div>
                <div className="bg-black rounded px-3 md:px-6 py-3 flex gap-4 w-fit grow md:grow-0">
                  <img src={playstore} alt="Playstore" className="w-10 md:w-12"></img>
                  <div>
                    <p className="block text-white font-medium">Get it on</p>
                    <p className="block text-white md:text-3xl text-lg font-medium">
                      Google Pay
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="my-8 md:w-1/2 w-full">
              <img
                src={handmobile}
                className="block md:absolute md:mx-auto mr-6 w-[598px] h-[610px] pb-4  "
                alt="Phone"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black w-full py-10 flex flex-col md:flex-row justify-center gap-10">
        {/* left */}
        <div className="my-8 w-full md:w-[40%] px-6 md:px-0 mx-auto">
          <h1 className="block mt-8 text-xl md:text-4xl text-white font-bold">
            Download The <span className="text-[#FF2E00]">TruRide</span>{" "}
          </h1>
          <h1 className="text-white font-bold text-xl md:text-4xl">
            Application Now
          </h1>
          <h4 className="block mt-8 md:text-xl text-lg text-white font-medium">
            Download TruRide: the AI-powered ride booking app with gamified
            routes. Unlock rewards as a user, and drivers enjoy bonuses with
            AI-enhanced mapping. Get the best offers now!
          </h4>
        </div>
        {/* right */}
        <div className="flex flex-col gap-4 md:gap-16 w-full md:w-[40%] px-4 md:px-0 mx-auto py-4">
          <div className="bg-[#434343] rounded px-4 md:px-8 w-full py-4 flex justify-between md:justify-normal md:gap-10 relative">
            <div className="w-fit flex flex-col justify-between">
              <p className="block text-2xl md:text-4xl text-white text-bold text-nowrap">
                For Android
              </p>
              <p className="mt-2 block text-white text-nowrap">iOS 15.6+</p>
              <a
      href = "# Download Now"
      className="mt-2 w-fit rounded block text-nowrap border border-[#FF2E00] py-2 px-10 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white"
    >
      Download Now
    </a>
            </div>
            <img src={qcode} alt="qcode" className="h-26 w-26 my-auto"></img>
            <img
              src={iphone} alt="iphone"
              className="w-16 h-13 my-auto bg-black rounded-full p-4 absolute top-[-25%] right-0"
            ></img>
          </div>
          <div className="bg-[#434343] rounded px-4 md:px-8 w-full py-4 flex justify-between md:justify-normal md:gap-10 relative">
            <div className="w-fit flex flex-col justify-between">
              <p className="block text-2xl md:text-4xl text-white text-bold text-nowrap">
                For iOS
              </p>
              <p className="mt-2 block text-white text-nowrap">iOS 15.6+</p>

              <a
                href="#Download Now"
                className="mt-2 w-fit rounded block text-nowrap border border-[#FF2E00] py-2 px-10 text-[#FF2E00] font-semibold hover:bg-[#FF2E00] hover:text-white"
              >
                Download Now
              </a>
            </div>
            <img src={qcode} alt="qcode" className="h-26 w-26 my-auto"></img>
            <img
              src={apple} alt="apple"
              className="w-16 h-13 my-auto bg-black rounded-full p-4 absolute bottom-[-25%] right-0"
            ></img>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <section className="mt-20 max-w-full h-auto bg-[#f9f9f9] flex items-center justify-center p-5">
          <div className="text-center">
            <h3 className="text-[#100062] text-3xl font-bold">
              Benefits of <span className="text-[#FF2E00]">TruRide</span>
            </h3>
            <div className="flex justify-center mt-5">
              <img
                src={line}
                alt="Decorative line"
                className="rotate-180 w-32"
                style={{ alignItems: "center" }}
              />
            </div>

            <img src={benefittruride} alt="benefittruride" width={1460} ></img>
          </div>
        </section>
      </div>

      <div className="bg-white w-full py-15 flex flex-col gap-0">
        <h1 className=" text-[#100062] font-bold text-4xl text-center">
          Why<span className="text-[#FF2E00]"> Truride? </span>
        </h1>
        <div className="flex justify-center mt-5">
              <img
                src={line}
                alt="Decorative line"
                className="rotate-180 w-32"
                style={{ alignItems: "center" }}
              />
            </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap md:justify-around items-center mt-20">
          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start px-16">
            <p className="font-bold text-center md:text-left mt-6">
              Empowering Drivers, Rewarding Users with AI route mapping
            </p>
            <p className="font-normal text-center md:text-left">
              At TruRidetaxi, we're a vibrant community, empowering drivers with
              40% stake ownership. Our AI route mapping optimizes rides,
              <br /> making them more affordable and efficient for both drivers
              and riders.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center mt-2">
            <img
              src={amico}
              className="max-w-full h-auto"
              alt="Descriptive Alt Text"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="w-full md:w-[40%] flex justify-center px-16">
            <img
              src={grouptwo}
              className="max-w-full h-auto"
              alt="Descriptive Alt Text"
            />
          </div>
          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start px-16">
            <p className="font-bold text-center md:text-left">
              Seamless Cabs & Auto Bookings with One tap Accessibility
            </p>
            <p className="font-normal text-center md:text-left">
              TruRide is user-friendly, allowing riders to access cab or auto
              bookings through
              <br /> a #360 of our dedicated Number or via the WhatsApp platform
              with just one tap.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="w-full md:w-[60%] flex flex-col items-center md:items-start px-16">
            <p className="font-bold text-center md:text-left mt-6">
              Empowering Drivers, Rewarding Users with AI route mapping
            </p>
            <p className="font-normal text-center md:text-left">
              At TruRidetaxi, we're a vibrant community, empowering drivers with
              40% stake ownership. Our AI route mapping optimizes rides, making
              them more affordable and efficient for both drivers and riders.
            </p>
          </div>
          <div className="w-full md:w-[40%] flex justify-center mt-2">
            <img
              src={amico}
              className="max-w-full h-auto"
              alt="Descriptive Alt Text"
            />
          </div>
        </div>
      </div>
    </>
  );
}
