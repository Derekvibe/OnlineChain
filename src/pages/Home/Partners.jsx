import React from 'react'

function Partners() {
  return (
    <>
      {/* Show banner on small & medium screens */}
      <div className="flex sm:flex md:flex lg:hidden justify-center px-4 py-4">
        <img src="/Partners.png" alt="Partners Banner" />
      </div>

      {/* Show individual logos only on large screens */}
      <div className="hidden lg:flex gap-4 w-[95%] px-4 py-4 items-center">
        <div className="w-48 h-14"><img src="/web3dev.png" alt="web3dev" /></div>
        <div className="w-48 h-6"><img src="/solana.png" alt="Solana" /></div>
        <div className="w-48 h-12"><img src="/metamask.png" alt="Metamask" /></div>
        <div className="w-48 h-16"><img src="/thegraph.png" alt="The Graph" /></div>
        <div className="w-48 h-16"><img src="/Think_Dev.png" alt="Think Dev" /></div>
        <div className="w-48 h-20"><img src="/polygon.png" alt="Polygon" /></div>
        <div className="w-48 h-16"><img src="/LaChain.png" alt="LaChain" /></div>
      </div>
    </>
  )
}

export default Partners
