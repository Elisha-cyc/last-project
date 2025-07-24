import React from "react";
import { assets, cities } from "../assets/assets";

export const Hero = () => {
  return (
    <div className='flex flex-col lg-flex-row lg:flex-row  lg:items-center lg:w-full lg:justify-between items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
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
  rounded-2xl px-6 py-5 mt-8 flex flex-col md:flex-row lg:flex-col max-md:items-start gap-4  max-md:mx-auto w-full lg:w-[36%] max-w-sm md:max-w-3xl"
      >
        <div className="flex-1 w-full">
          <label htmlFor="destinationInput" className="lg:text-2xl">
              Destination
            </label>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="w-full  rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm  lg:text-base outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="checkIn" className="lg:text-2xl">
            Check in
          </label>
          <input
            id="checkIn"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-2 lg:text-base mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex-1 w-full">
          <label htmlFor="checkOut" className="lg:text-2xl">
            Check out
          </label>
          <input
            id="checkOut"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 lg:text-base text-sm outline-none"
          />
        </div>

        <div className="w-full md:w-auto  flex flex-col items-start">
          <label htmlFor="guests" className="lg:text-2xl">
            Guests
          </label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="w-full lg:w-[100%] md:w-16 rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none"
            placeholder="0"
          />
        </div>

        <button className="w-full md:w-auto flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-white font-bold text-xl font-playfair">
          <img src={assets.searchIcon} alt="" className="h-8 md:h-10" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
export default Hero;
