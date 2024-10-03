import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'
const logo=[{
    name:"Logoipsum",
    icon: FaStarOfLife,
},
{
    name:"Logoipsum",
    icon: FaStarOfLife,
},
{
    name:"Logoipsum",
    icon: FaStarOfLife,
},
{
    name:"Logoipsum",
    icon: FaStarOfLife,
},]

function Logoipsum() {
  return (
    <div className='bg-[#022c22] h-[50%] relative'>

        <div className="mx-auto flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center mt-6 px-8 py-4 max-w-screen-xl ">
                <h1 className='text-2xl sm:text-3xl md:text-3xl text-white text-center figtree-light'>Global partners that <br /> trusted us</h1>
                
            </div>
            <ul className='flex gap-4 mt-10  justify-around h-full w-screen  py-4 overflow-hidden mb-6 '>
                {logo.map((item, index) => (
                    <li key={index} className='flex gap-x-2  justify-center items-center w-full max-w-[28rem] px-6 py-3 rounded-lg bg-[#ffffff] opacity-30 '>
                        <item.icon className=''/>
                        <h1>{item.name}</h1>
                    </li>
                ))}
            </ul>

        </div>
    </div>
  )
}

export default Logoipsum