'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../../public/assets/Logo - Only Icon -Yellow.svg';
import MenuBtn from '../../../../public/assets/Menu button.svg';
import ChevronRight from '../../../../public/assets/Chevron right.svg';
import Close from '../../../../public/assets/Close.svg';
import Instagram from '../../../../public/assets/Instagram Logo.svg';
import TicTok from '../../../../public/assets/Tik Tok Logo.svg';
import X from '../../../../public/assets/X Logo.svg';
import FaceBook from '../../../../public/assets/Facebook Logo.svg';
import Youtube from '../../../../public/assets/Youtube logo.svg';
import Link from 'next/link';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <section className="flex flex-col gap-16 pt-6 pb-16 bg-[#0A6847] ">
        <div className="flex flex-col gap-16 container mx-auto">
            <header className="">
                <div className="lg:flex gap-8">
                    <div className="flex justify-between px-4 ">
                        <div className="flex gap-4">
                            <Image src={Logo} alt='AW-Logo' className='h-10 w-10' />
                            <span className="text-lg text-[#F3CA52] font-bold hidden lg:flex">Along With</span>
                        </div>
                        <div className="cursor-pointer" onClick={toggleMenu}>
                            {
                                menuOpen ? (<Image src={Close} alt='Close-Btn' className='text-white h-10 w-4 lg:hidden' />
                                ) : (<Image src={MenuBtn} alt='Menu-Btn' className='text-white h-10 w-auto lg:hidden' />)
                            }
                        </div>
                    </div>
                    {/* Large Screen: Navbar Items */}
                    <ul className="hidden lg:flex lg:justify-start gap-4 py-1 lg:text-white">
                        <li>
                            <Link href='/'>Our Features</Link>
                        </li>
                        <li>
                            <Link href='/'>Join our Newsletter</Link>
                        </li>
                    </ul>
                </div>

                {/* Small Screen: Dropdown Menu */}
                {
                    menuOpen && (
                        <div className="absolute top-2 left-0 w-full bg-white p-4 shadow-lg border rounded-lg lg:hidden">
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-lg font-bold">
                                    <Image src={Logo} alt='AW-Logo' className='h-10 w-10' />
                                </div>
                                <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
                                    <Image src={Close} alt='Close-Btn' className='text-white h-10 w-4' />
                                </div>
                            </div>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href='/'>Our Features</Link>
                                </li>
                                <li>
                                    <Link href='/'>Join our Newsletter</Link>
                                </li>
                            </ul>
                        </div>
                    )
                }   
            </header>
        </div>    
        <div className="flex flex-col lg:flex-row lg:justify-between container mx-auto ">
            <div className="flex flex-col gap-8 px-4 lg:gap-10 lg:w-1/2 lg:pr-[130px] lg:mt-20">
                <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="flex gap-4 px-2 py-1 bg-[#064E3B] rounded-[14px] w-fit">
                        <div className="flex items-center justify-center">
                            <span className="text-xs text-[#1F2937] leading-5 font-semibold tracking-wide uppercase px-3 py-[2px] bg-[#F3CA52] rounded-[10px]">Beta</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm leading-5 font-[inter] font-normal text-white">Visit our sample creator page</span>
                            <Image src={ChevronRight} alt='Chevron-right' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h2 className="text-4xl leading-10 font-[inter] font-extrabold tracking-tight text-white lg:text-6xl lg:leading-none">Invite your fans to <span className="text-yellow-300">cook along with you</span></h2>
                        <p className="text-base leading-6 font-[inter] font-normal text-[#E5E7EB] lg:text-xl lg:leading-7">Cook with your followers using Along With! We provide the ingredients in the exact quantities specified in your recipes for an interactive cooking experience. Make cooking fun & interactive for your fans with Along With.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 mb-10">
                    <h3 className="text-sm leading-5 font-semibold font-[inter] tracking-wide uppercase text-[#fff]">Reach your audience on all Platforms</h3>
                    <div className="flex gap-10">
                        <Image src={Instagram} alt='Instagram-Logo' className='w-7 h-7' />
                        <Image src={TicTok} alt='Instagram-Logo' className='w-7 h-7' />
                        <Image src={X} alt='Instagram-Logo' className='w-7 h-7' />
                        <Image src={FaceBook} alt='Instagram-Logo' className='w- h-7' />
                        <Image src={Youtube} alt='Instagram-Logo' className='w-10 h-7' />
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-[#fff] lg:border lg:rounded-lg lg:mx-[88px] lg:h-fit">
                <div className="flex flex-col">
                    <form action="" className="flex flex-col gap-6 px-4 py-8 lg:px-10">
                        <div className="flex gap-1">
                            <h4 className="text-sm leading-5 font-medium text-[#111827]">Schedule a call with us</h4>
                        </div>
                        <input type="text" placeholder='Social Media Profile Link' className="border rounded-md shadow-sm px-3 py-2" />
                        <input type="text" placeholder='Full Name' className="border rounded-md shadow-sm px-3 py-2" />
                        <input type="text" placeholder='Email Address' className="border rounded-md shadow-sm px-3 py-2" />
                        <input type="text" placeholder='Mobile Number' className="border rounded-md shadow-sm px-3 py-2" />
                        <button className=" border rounded-md px-4 py-2 bg-[#F3CA52] shadow-sm">
                            <span className="text-sm text-[#1F2937] leading-5 font-medium">Talk to Us!</span>
                        </button>
                    </form>  
                    <div className="bg-[#E5E7EB] h-1"></div>
                    <footer className="flex px-4 py-6 gap-6 bg-[#F9FAFB] lg:px-10">
                        <p className="text-xs text-gray-500 leading-5 font-normal">By signing up, you agree to our <span className='text-xs text-gray-950 leading-5 font-medium'>Terms, Data Policy</span> and <span className='text-xs text-gray-950 leading-5 font-medium'>Cookies Policy.</span></p>
                    </footer>
                </div>
            </div>  
        </div>        
    </section>
  )
}

export default Hero;