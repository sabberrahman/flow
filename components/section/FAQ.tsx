import React from 'react'
import { FaDotCircle, FaICursor } from 'react-icons/fa'

function FAQ() {
  return (
    <div className='bg-[#f9f8f1]'>
        <div className="wrapper">
            <div className="flex flex-col px-8 py-4 gap-4">
                
              <div className="flex border-b">
                <FaDotCircle className='text-teal-500'/>
                <p>FAQ</p>
              </div>

              <div className='grid grid-cols-2'>
               {/* left - text basically */}
               <div className="col-span-1">
                <h1 className='text-start text-3xl md:text-4xl leading-tight'>Answers to the frequently <br /> asked questions</h1>
                <div className=''>
                    <FaICursor/>
                    <h1>Still have questions?</h1>
                    <p>For assistance, please visit our Contact Us page or call our customer support hotline at (671) 555-0110. Our dedicated team is ready to help you on your journey to a greener, more sustainable future.</p>
                </div>

                {/* right content */}
               </div>

              </div>

            </div>
        </div>
    </div>
  )
}

export default FAQ