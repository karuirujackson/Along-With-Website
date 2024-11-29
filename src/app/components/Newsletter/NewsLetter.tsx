import React from 'react'

function NewsLetter() {
  return (
    <section className='bg-[#0A6847] h-screen'>
        <div className="flex flex-col md:flex-row gap-8 md:px-8 md:py-16 px-4 py-12">
            <div className="flex flex-col gap-3 md:w-1/2">
                <h3 className="text-3xl md:text-4xl md:leading-10 leading-9 font-extrabold tracking-tight text-[#ffff]">Sign Up for our NewsLetter</h3>
                <p className="text-lg leading-6 font-normal text-[#D1D5DB]">Join our newsletter mailing list today to stay up-to-date with the latest news and updates from Along With. As a subscriber, you’ll receive exclusive content, early access to new features, and special promotions.</p>
            </div>
            <div className="flex flex-col gap-3">
                <form action="" className="flex flex-col md:flex-row gap-3">
                    <input type="text" placeholder='Enter your Email' className=' border rounded-md px-5 py-3' />
                    <button className='border rounded-md px-6 py-3 bg-[#F3CA52]'>Sign me Up!</button> 
                </form>
                <p className="text-sm md:text-base leading-5 font-normal text-[#D1D5DB]">We care about the protection of your data. Read our <span className="underline">Privacy Policy.</span></p>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter;