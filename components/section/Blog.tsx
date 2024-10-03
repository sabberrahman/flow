import React from 'react'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'

function Blog() {
  return (
    <div className='h-[66rem] bg-[#ffffff]'>
        <div className="wrapper">
            <div className=" my-24 mx-6">

                <div className="flex justify-between items-center ">
                    <h1 className='text-2xl md:text-4xl'>Blog</h1>
                    <a href="#" className='flex gap-2 justify-center items-center px-4 py-3 border rounded-xl'>see all <BiArrowFromLeft/></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Blog