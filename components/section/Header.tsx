import React from 'react'

function Header() {
  return (
    <div className="backdrop-blur-xl bg-white border-b sticky top-0 z-50 bg-transparent/2">
    <div className="wrapper">
      <div className="flex justify-between p-4">
        <div className="flex gap-8">
           <h1 className="text-xl font-semibold">Flow</h1>
           <div className="flex justify-center items-center gap-4 text-lg">
             <a href="#" className="hover:text-teal-700 duration-300 ">About</a>
             <a href="#" className="hover:text-teal-700 duration-300 ">Price</a>
             <a href="#" className="hover:text-teal-700 duration-300 ">Blog</a>
           </div>
        </div>

        <div className="">
            <a href="#" className="px-4 py-3 rounded-3xl border border-gray-800">
              Get in touch
            </a>
        </div>
 
      </div>
      
    </div>
    </div>
  )
}

export default Header