import React from 'react';
import Image from 'next/image';
import XLogo from '../../../../public/assets/X.svg';
import Instagram from '../../../../public/assets/Instagram.svg';

function Footer() {
  return (
    <section className='relative'>
        <footer className="flex flex-col md:flex-row md:justify-between items-center justify-center md:px-8 md:py-12 px-4 gap-8 container mx-auto">
          <span className=" flex items-center justify-center leading-6 font-normal text-[#9CA3AF] text-base">© 2024 Along With, Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <Image src={Instagram} alt='Instagram-Logo' />
            <Image src={XLogo} alt='X-Logo' />
          </div>
        </footer>
    </section>
  )
}

export default Footer