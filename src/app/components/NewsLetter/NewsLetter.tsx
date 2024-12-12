'use client'

import React, { useState } from 'react';

function NewsLetter() {
    const [email, setEmail] = useState('');
    
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email) {
            setMessage('Please enter a valid email address!');
            return;
        }
        setMessage('Thank You for Signing Up!')
        setEmail('');
    };

    const onChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <section className='bg-[#0A6847] '>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 px-4 container mx-auto">
            <div className="flex flex-col gap-3 md:w-1/2 md:py-16 md:px-8">
                <h3 className="text-3xl md:text-4xl md:leading-10 leading-9 font-extrabold tracking-tight text-[#ffff]">Sign Up for our NewsLetter</h3>
                <p className="text-lg leading-6 font-normal text-[#D1D5DB]">Join our newsletter mailing list today to stay up-to-date with the latest news and updates from Along With. As a subscriber, you’ll receive exclusive content, early access to new features, and special promotions.</p>
            </div>
            <div className="flex flex-col gap-3 md:py-[85px] md:pr-8">
                <form onSubmit={handleSubmit} action="" className="flex flex-col md:flex-row gap-4">
                    <input onChange={onChange} type="text" placeholder='Enter your Email' className=' border rounded-md px-8 py-3' />
                    <button className='border rounded-md px-8 py-3 bg-[#F3CA52]'>Sign me Up!</button> 
                </form>
                {message && <p className="text-[#F3CA52] font-bold text-xl mt-2">{message}</p>}
                <p className="text-sm md:text-base leading-5 font-normal text-[#D1D5DB]">We care about the protection of your data. Read our <span className="underline">Privacy Policy.</span></p>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter;