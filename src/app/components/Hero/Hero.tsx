'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/Logo - Only Icon -Yellow.svg';
import MenuBtn from '../assets/Menu button.svg';
import Badge from '../assets/Badge.svg';
import ChevronRight from '../assets/Chevron right.svg';
import Logos from '../assets/Logos.svg';
import Close from '../assets/Close.svg';
import Link from 'next/link';

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <section className="flex flex-col gap-16 pt-6 pb-16 bg-[#0A6847]  min-h-screen ">
      <div className="flex flex-col gap-16 lg:relative lg:left-20">
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
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:relative lg:left-20 top-20 lg:w-[90%]">
            <div className="flex flex-col gap-8 mb-4 px-4 lg:gap-10 lg:w-[75%]">
                <div className="flex flex-col gap-4 lg:gap-6 lg:w-2/3">
                    <div className="flex gap-4 px-2 py-1 bg-[#064E3B] rounded-2xl lg:w-[75%]">
                        <Image src={Badge} alt='Beta-badge' />
                        <div className="flex gap-2">
                            <span className="text-sm leading-5 font-normal text-[#FFF]">Visit our sample creator page</span>
                            <Image src={ChevronRight} alt='Chevron-right' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5">
                        <h2 className="text-4xl leading-10 font-extrabold tracking-tight text-white lg:text-6xl lg:leading-none">Invite your fans to <span className="text-yellow-300">cook along with you</span></h2>
                        <p className="text-base leading-6 font-normal text-[#E5E7EB] lg:text-xl lg:leading-7">Cook with your followers using Along With! We provide the ingredients in the exact quantities specified in your recipes for an interactive cooking experience. Make cooking fun & interactive for your fans with Along With.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-sm leading-5 font-semibold tracking-wide uppercase text-[#fff]">Reach your audience on all Platforms</h3>
                    <Image src={Logos} alt='Social Logos' />
                </div>
            </div>
            <div className="flex flex-col bg-[#fff] lg:border lg:w-[50%] lg:rounded-lg lg:relative bottom-20">
                <div className="flex flex-col">
                    <form action="" className="flex flex-col gap-6 px-4 py-8">
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
                    <footer className="flex px-4 py-6 gap-6 bg-[#F9FAFB]">
                        <p className="text-xs text-gray-500 leading-5 font-normal">By signing up, you agree to our <span className='text-xs text-gray-950 leading-5 font-medium'>Terms, Data Policy</span> and <span className='text-xs text-gray-950 leading-5 font-medium'>Cookies Policy.</span></p>
                    </footer>
                </div>
            </div>  
        </div>        
    </section>
  )
}

export default Hero;