import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='w-full  bg-grey justify-center items-center '>
         <div className='flex flex-col justify-center items-center'>
      <h2 className=' font-bold text-[32px]'>Our team</h2>

      <p className=' text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
    <div className='flex flex-col sm:flex-row '>
    <div className='w-full sm:w-1/3 h-[273px]  flex flex-col justify-center items-center'>
        <Image src={'/employees/em1.svg'} alt='pic' width={80} height={80} />
        <p className='w-auto h-[30px] font-semibold text-xl'>James Nduku</p>
        <p className='h-[27px] text-lg'>Marketing Coordinator</p>
        <div className='flex'>
        <Image src={'/employees/linkedin.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Twitter.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Vector.svg'} alt='linkedin logo' width={18} height={18}/> 
        </div>     

    </div>
    <div className='w-full sm:w-1/3 h-[273px] flex flex-col justify-center items-center'>
        <Image src={'/employees/em2.svg'} alt='pic' width={80} height={80} />
        <p className='w-auto h-[30px] font-semibold text-xl'>Joseph Munyambu</p>
        <p className='h-[27px] text-lg'>Nursing Assistant</p>
        <div className='flex'>
        <Image src={'/employees/linkedin.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Twitter.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Vector.svg'} alt='linkedin logo' width={18} height={18}/> 
        </div>     

    </div>
    <div className='w-full sm:w-1/3 h-[273px] flex flex-col justify-center items-center'>
        <Image src={'/employees/em3.svg'} alt='pic' width={80} height={80} />
        <p className='w-auto h-[30px] font-semibold text-xl'>Joseph Ngumbau</p>
        <p className='h-[27px] text-lg'>Medical Assistant</p>
        <div className='flex'>
        <Image src={'/employees/linkedin.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Twitter.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Vector.svg'} alt='linkedin logo' width={18} height={18}/> 
        </div>     

    </div>
    </div>
    <div className='flex flex-col sm:flex-row'>
    <div className=' w-full sm:w-1/3 h-[273px]  flex flex-col justify-center items-center'>
        <Image src={'/employees/em4.svg'} alt='pic' width={80} height={80} />
        <p className='w-auto h-[30px] font-semibold text-xl'>Erick Kipkemboi</p>
        <p className='h-[27px] text-lg'>Web Designer</p>
        <div className='flex'>
        <Image src={'/employees/linkedin.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Twitter.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Vector.svg'} alt='linkedin logo' width={18} height={18}/> 
        </div>     

    </div>
    <div className=' w-full sm:w-1/3 h-[273px] flex flex-col justify-center items-center'>
        <Image src={'/employees/em5.svg'} alt='pic' width={80} height={80} />
        <p className='w-auto h-[30px] font-semibold text-xl'>Stephen Kerubo</p>
        <p className='h-[27px] text-lg'>President of Sales</p>
        <div className='flex'>
        <Image src={'/employees/linkedin.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Twitter.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Vector.svg'} alt='linkedin logo' width={18} height={18}/> 
        </div>     

    </div>
    <div className=' w-full sm:w-1/3 h-[273px] flex flex-col justify-center items-center'>
        <Image src={'/employees/em6.svg'} alt='pic' width={80} height={80} />
        <p className='w-auto h-[30px] font-semibold text-xl'>John Leboo</p>
        <p className='h-[27px] text-lg'>Dog Trainer </p>
        <div className='flex'>
        <Image src={'/employees/linkedin.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Twitter.svg'} alt='linkedin logo' width={18} height={18}/>
        <Image src={'/employees/Vector.svg'} alt='linkedin logo' width={18} height={18}/> 
        </div>     

    </div>
    </div>
    
    <div className='  p-4'>
        <h2 className='tab h-[58px] font-bold text-5xl'>Customer testimonials</h2>
        <h2 className='mob h-[58px] font-bold text-[32px]'>What Our Student Say</h2>
        <p className='h-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    </div>
    <div className='flex flex-col gap-2 p-4 sm:flex-row'>

    <div className='w-full sm:w-1/3 h-[321.89] border-black border-[1px] p-4'>
        <div className='flex'>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        </div>
    <p className='w-[352px] h-[108px]'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.`}</p>
    <div className='flex'>
    <Image src={'/employees/em3.svg'} alt='pic' width={56} height={56} className='rounded-[50%]'/>
       <div className='w-[178px] h-[48px]'>
    <p className='w-[99px] h-[24px] font-semibold text-base'>James Nduku</p>
    <p className='w-[140px] h-[24px] text-base'>Software Developer</p>
       </div>
    </div>
    </div>

    <div className='w-full sm:w-1/3 h-[321.89] border-black border-[1px] p-4'>
        <div className='flex'>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        </div>
    <p className='w-[352px] h-[108px]'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.`}</p>
    <div className='flex'>
    <Image src={'/employees/em1.svg'} alt='pic' width={56} height={56} className='rounded-[50%]'/>
       <div className='w-[178px] h-[48px]'>
    <p className='w-[120px] h-[24px] font-semibold text-base'>Erick Kipkemboi</p>
    <p className='w-[140px] h-[24px] text-base'>Scrum Master</p>
       </div>
    </div>
    </div>

    <div className='w-full sm:w-1/3 h-[321.89] border-black border-[1px] p-4'>
        <div className='flex'>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        <Image src={'/Testimonials/star.svg'} alt='star' width={20} height={18.89}/>
        </div>
    <p className='w-[352px] h-[108px]'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.`}</p>
    <div className='flex'>
    <Image src={'/employees/em6.svg'} alt='pic' width={56} height={56} className='rounded-[50%]'/>
       <div className='w-[178px] h-[48px]'>
    <p className='w-[145px] h-[24px] font-semibold text-base'>Stephen Kerubo</p>
    <p className='w-[109px] h-[24px] text-base'>UI/UX Designer</p>
       </div>
    </div>
    </div>




    





    </div>
    <div className='flex w-[1132px] h-[48px] justify-between items-center p-4'>
<div className='flex gap-2 '>
    <Image src={'/Testimonials/Dot-black.svg'} alt='dot' width={8} height={8}/>
    <Image src={'/Testimonials/Dot.svg'} alt='dot' width={8} height={8}/>
    <Image src={'/Testimonials/Dot.svg'} alt='dot' width={8} height={8}/>
    <Image src={'/Testimonials/Dot.svg'} alt='dot' width={8} height={8}/>
    <Image src={'/Testimonials/Dot.svg'} alt='dot' width={8} height={8}/>
    </div>
    <div className='flex gap-2'>

    <button><Image src={'/Testimonials/Button-left.svg'} alt='arrow' width={20} height={20}/></button>
    <button><Image src={'/Testimonials/Button-right.svg'} alt='arrow' width={20} height={20}/></button>
   

    </div>
    </div>
   

    </div>
  )
}

export default Team
