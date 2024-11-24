import React from 'react'
import Image from 'next/image'


const Landingpage = () => {
  return (
    <div className="land w-full flex flex-col sm:flex-row items-center">
      <div className="flex flex-col justify-center items-center w-[580px] gap-4 sm:w-auto sm:mr-8">
        <h1 className="font-bold text-[56px] w-[580px] h-[134px] sm:text-4xl sm:w-auto">
          Learn new skills online with ease
        </h1>
        <p className="text-lg sm:text-base">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex gap-2 w-[580px] h-[81px] sm:w-auto">
          <button className="flex justify-center items-center w-[160px] h-[40px] text-base border border-black rounded bg-blue-500 text-white">
            Start learning now
          </button>
          <button className="flex justify-center items-center w-[160px] h-[40px] text-base border border-gray-400 rounded bg-gray-100">
            Explore courses
          </button>
        </div>
      </div>
      <div className="flex sm:w-1/2">
        <Image src="/images/hero-Image.svg" alt="icon" width={720} height={900} />
      </div>
    </div>
  );
};

export default Landingpage;



