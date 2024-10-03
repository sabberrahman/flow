import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { IoPerson } from 'react-icons/io5'

function Metrics() {
  return (
    <div className="mt-12 bg-[#F9F8F1]">
        <div className="wrapper">
            <div className="flex flex-col gap-8">
                <div>
                    <li className='decoration-teal-800 text-sm border-b'>Our results</li>
                </div>
                <h1 className='text-start text-3xl md:text-4xl'>We are committed to a sustainable future</h1>
                <div className="grid grid-cols-2 px-4 py-3">
                    <div className="col-span-1 flex flex-col borde text-black gap-3 px-3 py-3 bg-white">
                        <FaStar/>
                        <h1>5,000 Mwh</h1>
                        <h3>Renewable energy Generated</h3>
                        <p>Our commitment to sustainability shines through as we proudly announce the generation of 5,000 megawatt-hours of renewable energy, contributing to a greener and more environmentally friendly future.</p>

                    </div>
                    <div className="col-span-1 flex flex-col gap-2 ml-4">
                        <div className='flex gap-4 px-3 py-3 bg-white '>
                           <IoPerson/>
                           <div className="flex flex-col gap-y-2">
                            <h1>10,000+</h1>
                            <p>Customers served</p>
                           </div>
                        </div>
                        <div className='flex gap-4 px-3 py-3 bg-white'>
                           <IoPerson/>
                           <div className="flex flex-col gap-y-2">
                            <h1>15%</h1>
                            <p>Avg. Energy Saved</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Metrics