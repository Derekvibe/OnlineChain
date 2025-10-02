import React from 'react'

function Steps() {
  return (
    <div >
      <h2 className='items-center text-center'>How Web3Task <span className='bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent'>Works!</span></h2>

      <div className='flex justify-center items-center'>
        <img src="/wallet.png" alt="" />
        <div>
          <p  className='bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent'>01.</p>
          <h4>Setup and connect your wallet.</h4>
          <p>Use Trust Wallet, Metamask or any wallet to connect to multiple chains with the app.</p>
        </div>
      </div>
    </div>
  )
}

export default Steps