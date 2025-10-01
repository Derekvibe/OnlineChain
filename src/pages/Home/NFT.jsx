import React from 'react'

function NFT() {
  return (
    <>
      <div className='mt-16 px-6 py-6'>
        {/* Header */}
        <div>
          <div className='border-b-4 bg-gradient-to-r w-24 m-auto from-three-lightpurple to-three-darkblue'></div>
          <h1 className='font-inter font-bold flex text-white justify-center mt-10 text-center 
            text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
            Why{" "}
            <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
              choose us?
            </span>
          </h1>
        </div>
        
        {/* Cards */}
        <div className='mt-20 flex flex-wrap gap-6 justify-center'>
          {/* Card 1 */}
          <div className='text-white border px-4 py-10 rounded-xl text-start leading-8 max-w-xs'>
            <img src="/Globe.png" alt="" className="w-6 h-6" />
            <h3 className='font-inter font-bold text-xl mt-6'>DAOs</h3>
            <p className='font-inter font-thin text-sm mt-2'>Tool for organizations.</p>
          </div>
          
          {/* Card 2 */}
          <div className='text-white border px-4 py-10 rounded-xl text-start leading-8 max-w-xs 
            md:relative md:top-14'>
            <img src="/Cards.png" alt="" className="w-8 h-8" />
            <h3 className='font-inter font-bold text-xl mt-6'>Proof-of-Value</h3>
            <p className='font-inter font-thin text-sm mt-2'>
              Score system for <br /> measuring user <br /> results.
            </p>
          </div>

          {/* Card 3 */}
          <div className='text-white border px-4 py-6 rounded-xl text-start leading-6 max-w-xs 
            md:relative md:-top-10'>
            <img src="/check.png" alt="" className="w-8 h-8" />
            <h3 className='font-inter font-bold text-xl mt-6'>NFT</h3>
            <p className='font-inter font-thin text-sm mt-2'>
              Work tokenization and <br /> portfolio registration.
            </p>
          </div>

          {/* Card 4 */}
          <div className='text-white border px-4 py-6 rounded-xl text-start leading-6 max-w-xs 
            md:relative md:top-16'>
            <img src="/NFT.png" alt="" className="w-8 h-8" />
            <h3 className='font-inter font-bold text-xl mt-6'>Open Source</h3>
            <p className='font-inter font-thin text-sm mt-2'>
              Networking for users <br /> and projects.
            </p>
          </div>

          {/* Card 5 */}
          <div className='text-white border px-4 py-6 rounded-xl text-start leading-6 max-w-xs 
            md:relative md:-top-10'>
            <img src="/Github.png" alt="" className="w-8 h-8" />
            <h3 className='font-inter font-bold text-xl mt-6'>GitHub Chain</h3>
            <p className='font-inter font-thin text-sm mt-2'>
              Commit and push <br /> with us.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFT
