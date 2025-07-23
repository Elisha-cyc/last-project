import React from "react";
import { assets, cities } from "../assets/assets";

export const Hero = () => {
  return (
    <div className='flex flex-col lg-flex-row lg:flex-row  lg:items-center lg:w-full lg:justify-start items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <div>
        <p className=" inline bg-[#293C4F]/50 px-3.5 py-1 rounded-full mt-20 lg:text-lg lg:my-5 lg:leading-relaxed ">
          Welcome to your Best Hotel Experience
        </p>
        <h1 className="font-playfair text-2x1 md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold md:max-w-xl mt-4 lg:text-6xl lg:max-w-6xl lg:my-5 ">
          Discover Your Relaxing Gateway
        </h1>
        <p className="max-w-xl mt-2 text-sm md:text-base lg:text-lg lg:my-4 lg:leading-relaxed">
          We Offer luxury and Comfort that no Hotel can provide in the world.
          Come and experience luxury
        </p>
      </div>
      <form
        className="bg-white/10 backdrop-blur-lg border border-white/20 text-sm md:text-base font-medium font-playfair
 rounded-2xl px-6 py-5 mt-8 flex lg:flex-col md:flex-row w-l max-md:items-start gap-4 max-md:mx-auto lg:ml-auto l"
      >
        <div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="destinationInput"
              className=""
            >
              Destination
            </label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none lg:w-120 lg:text-2xl"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm lg:w-120 lg:text-2xl outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm  lg:w-120 lg:text-2xl outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  md:w-16 lg:w-120 lg:text-2xl"
            placeholder="0"
          />
        </div>

        <button className=" flex items-center justify-center gap-1 rounded-xl bg-black py-3 px-5 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 ml-2 lg:px-8 mt-1  lg:w-[30.4rem] lg:-ml-[2px] ">
          <img src={assets.searchIcon} alt="" className="lg:h-10 h-8" />
          <span className="text-2xl font-bold font-playfair">Search</span>
        </button>
      </form>
    </div>
  );
};
export default Hero;
