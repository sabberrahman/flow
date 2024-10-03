import React from 'react'

function Hero() {
  return (
    <div className="hero mt-12 inset-0">
        <div className="wrapper">

          <div className="flex gap-4 justify-center items-center flex-col">
            <div> 
                <p className=''>Powering Tomorrow</p>
            </div>
             <h1 className='text-5xl text-center sm:text-6xl md:text-6xl lg:text-8xl font-semibold'>The Future of <br /> Green Energy</h1>
             <p className='text-center text-sm text-gray-500 px-8  md:text-lg opacity-85'>Our commitment to green energy is paving the way for a cleaner,<br /> healthier planet. Join us on a journey towards a future where clean, <br /> renewable energy sources transform the way we power our lives.</p>  

           <div className='flex gap-4 figtree-light mt-4'>
            <a href="#" className='px-6 py-4 rounded-3xl border text-white bg-[#022C22] '>See our solution</a>
            <a href="#" className='px-6 py-4 rounded-3xl  border text-black '>Get in touch</a>
          </div>

          </div>

          

        </div> 
    </div>
  )
}

export default Hero