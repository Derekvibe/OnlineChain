import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <>
      <div className='px-6 py-4'>
        <div>
          <h1 className="font-inter font-bold leading-[80px] text-white">
          The{" "}
          <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
            Online Git Hub
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-three-lightpurple to-three-darkblue bg-clip-text text-transparent">
            Chain
          </span>{" "}
          Is Here
        </h1>

        <p className="font-inter font-thin leading-6 mt-4 text-gray-200">
          Spend less money in projects while providing a <br />
          learning curve for students worldwide
        </p>

        <button className="mt-6 px-4 py-2 rounded-2xl bg-gradient-to-r from-three-purple to-three-blue text-white font-semibold flex items-center gap-2 hover:opacity-90 transition">
          Open App
          <ArrowUpRight size={18} />
        </button>

        <img src="/Frame_1.png" alt="Hero Illustration" className="mt-8" />

        </div>
          <div></div>
        
        </div>
    </>
   
  )
}

export default Home