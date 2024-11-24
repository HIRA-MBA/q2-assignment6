import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div>
      <div className='head'>
    <div className=" w-full h-[72px] flex justify-between items-center text-sm gap-4 ">
      
       <Image src={'/Team/Ddsgnr-Library.svg'} alt={'logo'} width={130} height={41} />
        
      <ul className='flex gap-3'>
      
        <li>Home</li>
        <li>Courses</li>
        <li>Services</li>
        <li>Acheivements</li>
        <li>About Us</li>
        <li>Testimonials</li>
      </ul>
      <div className='flex gap-2'>

      <button className='bg-black text-white w-[50px] h-[20px] ' >Login</button>
      <button className='bg-slate-400 text-white w-[60px] h-[20px] '> Sign Up</button>
      </div>
      </div>
      </div>
      
      <div className="icon h-[72px] flex justify-between items-center">
      
      <Image src={'/Team/Ddsgnr-Library.svg'} alt={'logo'} width={130} height={41} />

       <Image src={'./images/Vector.svg'} alt='header' width={18} height={12}/>
      
      </div>
    </div>
  )
}

export default Navbar
