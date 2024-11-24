import React from 'react'
import Image from 'next/image'

const Coursedetails = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center '>
      <div className='w-full h-[118px] flex flex-col justify-center items-center'>
      <h1 className='font-bold text-[56px]'>Courses</h1>
      <p className='   text-lg'>Your Ultimate Guide to learning</p>
    
      <ul className='flex gap-2 hover:underline pb-4 mb-[2px]'>
        <li>Popular</li>
        <li>Recommended</li>
        <li>Best  Price</li>
      </ul>

      </div>
      
      <div className=' w-full flex flex-col sm:flex-row items-center gap-2 '>
      <div className='w-[380px] h-[534px]  '>
        <Image src={'/courses/Image-1.svg'} alt ='image' width={380} height={300}/>
         <div className='bg-grey w-[380px] h-[234px] pl-2'>
            <ul className='flex '>
                <li>Design</li>
                <li className='flex pl-[270px]'><Image src={'/courses/star.svg'} alt='star' width={24} height={24}/></li>
                <li>5.0</li>
            </ul>
            <h5 className='w-[191x] h-[34px] font-bold text-2xl'>UX/UI Design 201</h5>
            <p className='w-[326px] h-[78px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             <div className='flex'>         
             <button className='border-black border-2 rounded-lg mt-2 p-2'>Enroll now</button>
            <p className='px-8 pt-2 m-2'>$400</p>            
            
            </div> 
        </div>  

      </div>
      <div className='w-[380px] h-[534px]  '>
        <Image src={'/courses/python.svg'} alt ='image' width={380} height={300}/>
         <div className='bg-grey w-[380px] h-[234px]'>
            <ul className='flex '>
                <li>Programming </li>
                <li className='flex pl-[250px]'>
                  <Image src={'/courses/star.svg'} alt='star' width={24} height={24}/></li>
                <li>5.0</li>
            </ul>
            <h5 className='w-[300px] h-[34px] font-bold text-2xl'>Introduction to Python</h5>
            <p className='w-[326px] h-[78px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             <div className='flex'>         
             <button className='border-black border-2 rounded-lg mt-2 p-2'>Enroll now</button>
            <p className='px-8 pt-2 m-2'>$400</p>           
            
            </div> 
        </div>  

      </div>
      <div className='w-[380px] h-[534px]  '>
        <Image src={'/courses/DataAnalysis.svg'} alt ='image' width={380} height={300}/>
         <div className='bg-grey w-[380px] h-[234px]'>
            <ul className='flex '>
                <li>Business</li>
                <li className='flex pl-[250px]'><Image src={'/courses/star.svg'} alt='star' width={24} height={24}/></li>
                <li>5.0</li>
            </ul>
            <h5 className='w-[330px] h-[34px] font-bold text-2xl'>Data Analysis for Beginners</h5>
            <p className='w-[326px] h-[78px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             <div className='flex'>         
             <button className='border-black border-2 rounded-lg mt-2 p-2'>Enroll now</button>
            <p className='px-8 pt-2 m-2'>$400</p>           
            
            </div> 
        </div>  

      </div>
      
      </div>

      <div className=' w-full flex flex-col sm:flex-row gap-2 '>
      <div className='art w-[380px] h-[534px]  '>
        <Image src={'/courses/ArtSpecialization.svg'} alt ='image' width={380} height={300}/>
         <div className='bg-grey w-[380px] h-[234px] pl-2'>
            <ul className='flex '>
                <li>Art</li>
                <li className='flex pl-[270px]'><Image src={'/courses/star.svg'} alt='star' width={24} height={24}/></li>
                <li>5.0</li>
            </ul>
            <h5 className='w-[191x] h-[34px] font-bold text-2xl'>Art Specialization</h5>
            <p className='w-[326px] h-[78px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             <div className='flex'>         
             <button className='border-black border-2 rounded-lg mt-2 p-2'>Enroll now</button>
            <p className='px-8 pt-2 m-2'>$400</p>            
            
            </div> 
        </div>  

      </div>
      <div className='law w-[380px] h-[534px]  '>
        <Image src={'/courses/RuleofLaw.svg'} alt ='image' width={380} height={300}/>
         <div className='bg-grey w-[380px] h-[234px]'>
            <ul className='flex '>
                <li>Law </li>
                <li className='flex pl-[250px]'>
                  <Image src={'/courses/star.svg'} alt='star' width={24} height={24}/></li>
                <li>5.0</li>
            </ul>
            <h5 className='w-[300px] h-[34px] font-bold text-2xl'>Rule of Law</h5>
            <p className='w-[326px] h-[78px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             <div className='flex'>         
             <button className='border-black border-2 rounded-lg mt-2 p-2'>Enroll now</button>
            <p className='px-8 pt-2 m-2'>$400</p>           
            
            </div> 
        </div>  

      </div>
      <div className='tech w-[380px] h-[534px]  '>
        <Image src={'/courses/introtowebflow.svg'} alt ='image' width={380} height={300}/>
         <div className='bg-grey w-[380px] h-[234px]'>
            <ul className='flex '>
                <li>Tech</li>
                <li className='flex pl-[250px]'><Image src={'/courses/star.svg'} alt='star' width={24} height={24}/></li>
                <li>5.0</li>
            </ul>
            <h5 className='w-[330px] h-[34px] font-bold text-2xl'>Introduction to webflow</h5>
            <p className='w-[326px] h-[78px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             <div className='flex'>         
             <button className='border-black border-2 rounded-lg mt-2 p-2'>Enroll now</button>
            <p className='px-8 pt-2 m-2'>$400</p>           
            
            </div> 
        </div>  

      </div>
      
      </div>
        
      
     
     
      <p className='w-[120px] h-[24px] text-[16px] border-black border-[1px]'>View All Courses</p>
      

    </div>
  )
}

export default Coursedetails
