import React from 'react'
import Image from 'next/image'

const contacts = () => {
  return (
    <div className='cont'>
      
    
    <div className=' w-[1280px] flex justify-between items-center pt-1 pb-1'>
     <ul className=' flex text-xs gap-2' >
        <li className='border-r-[2px] border-slate-400 pr-1'>Phone Number: 956 742 455 678</li>
        <li>Email:info@ddsgnr.com</li>
       
     </ul>
     
     
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

export default contacts

