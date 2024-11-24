import React from 'react'
import Image from 'next/image'

const Logo2 = () => {
  return (
    <div className="w-full h-[228px] bg-grey flex flex-col sm:flex-row">
      <p className="txt w-[327px] text-2xl font-bold pt-20 sm:w-auto sm:mr-8">
        Trusted by 2000+ companies worldwide.
      </p>
      <div className="logo w-full flex gap-12 sm:w-auto">
        <Image src="/logo2/Airbnb.svg" alt="logo" width={123.38} height={38} />
        <Image src="/logo2/Airbnb1.svg" alt="logo" width={123.38} height={38} />
        <Image src="/logo2/Airbnb2.svg" alt="logo" width={123.38} height={38} />
        <Image src="/logo2/Airbnb3.svg" alt="logo" width={123.38} height={38} />
        <Image src="/logo2/Airbnb4.svg" alt="logo" width={123.38} height={38} />
        <Image src="/logo2/Airbnb5.svg" alt="logo" width={123.38} height={38} />
      </div>
    </div>
  );
};

export default Logo2;
