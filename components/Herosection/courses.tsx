import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className="w-full h-[1049px] flex flex-col justify-center items-center">
      <div className="w-[385px] h-[162px]">
        <h2 className="font-bold w-[385px] text-[32px]">Explore Courses By Category</h2>
        <p className="h-[54px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>
      <div className="flex flex-wrap gap-1 sm:flex-row">
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/team292-1.svg'} alt='course1' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Design & Development</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-2.svg'} alt='course2' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Marketing</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-3.svg'} alt='course3' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Development</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        </div>

        <div className="hidden sm:flex flex-wrap gap-1 ">
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-4.svg'} alt='course1' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Communication</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-5.svg'} alt='course2' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Digital Marketing</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-6.svg'} alt='course3' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-6 pl-2">
            <h4>Self Development</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        </div>

        <div className="hidden sm:flex flex-wrap gap-1 ">
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-7.svg'} alt='course1' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Business</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-8.svg'} alt='course2' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-3 pl-2">
            <h4>Finance</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        <div className="bg-grey h-[132px] flex w-full sm:w-1/4">
          <div className="w-1/3 pt-3">
            <Image src={'/Team/292-9.svg'} alt='course3' width={100} height={100} />
          </div>
          <div className="w-2/3 pt-6 pl-2">
            <h4>Consulting</h4>
            <p>50+ courses available</p>
          </div>
        </div>
        </div>
      

       
             

          
          
  
      <button className="w-[155] h-[48] text-[16px] border-black border-[1px]">View All Courses</button>
    </div>
  );
};

export default Courses;
