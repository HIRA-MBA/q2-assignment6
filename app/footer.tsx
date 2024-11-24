import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='w-full  '>
        <div className='flex flex-col sm:flex-row justify-between w-full h-[82px]"'>
            <div className=' h-[51px]'>
                <p className='h-[27px] font-semibold text-lg'> Subscribe to our newsletter</p>
                <p className='h-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[400px] h-[82px]  flex flex-col'>
                <div className='flex gap-1'>
                <label></label>
                <input type="text" id='name' defaultValue={''} placeholder='Enter your name' className='border-black border-[1px] w-[265px] h-[48px] rounded-[5px] '/>
                <button className='w-[119px] h-[48px] border-black border-[1px]'>Subscribe</button>
                </div>            
                
                <p className='w-[400px] h-[18px] text-[12px] pl-2'>By subscribing you agree to with our Privacy Policy</p>
            </div>
            
            
        </div>       
       
        <div className="flex flex-col sm:flex-row  ">
        
 
        <div className="w-full sm:w-1/4">
        <Image src={'/Team/Ddsgnr-Library.svg'} alt={'logo'} width={130} height={40}  />
        </div>
        <div className="w-full sm:w-1/4">
            <p className=' font-semibold'>Courses</p>         
                
                <ul>
                    <li>Business</li>
                    <li>Development</li>
                    <li>Technology</li>
                    <li>Design</li>
                    <li>Programming</li>
                </ul>
        </div>   
        <div className="w-full sm:w-1/4">
            <p className=' font-semibold'>Resources</p>

            <ul>
                <li>Career</li>
                <li>Resume</li>
                <li>Learning</li>
                <li>Interview Preperation</li>
                <li>Jobs</li>
            </ul>          
                
                
        </div>  
        <div className="w-full sm:w-1/4">
            <p className=' font-semibold'>About Us</p>              
            
            <ul >
                <li>Contacts</li>
                <li>Help/Support</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Partners</li>
            </ul>
                
                
        </div>   
           
 
     
           
            </div>
            <div className='border-t-[1px] border-black  flex flex-col justify-between items-center sm:flex-row' >
     <div className= ' flex flex-col text-sm underline gap-2 sm:flex-row '>
     
      <p>2023 Ddsgnr. All right reserved.</p>
      <p>Privacy Policy</p> 
      <p>Terms of Service</p> 
      <p>Cookies Settings</p> 
      </div>
    


    <ul className='flex gap-2'>
    <li><Image src={'/images/facebook_logo_icon.svg'} alt='facebook icon' height={6} width={10}/></li>
<li><Image src={'/images/instagram_logo_icon.svg'} alt='facebook icon' height={6} width={10} /></li>
<li><Image src={'/images/twitter_icon.svg'} alt='facebook icon' height={5} width={10} /></li>
<li><Image src={'/images/linkedin_logo_icon.svg'} alt='facebook icon' height={5} width={10} /></li>
</ul>
   
    
    </div> 
    
           

   
    </div>   
    
           
             

  )
}

export default footer
