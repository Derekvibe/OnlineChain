import React from 'react'

function Steps() {
  return (
    <div className="mt-20 px-6 py-12">
  {/* Heading */}
  <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-12 text-white">
    How Web3Task{" "}
    <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
      Works!
    </span>
  </h2>

  {/* Section 1 */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 mt-20">
    <img src="/wallet.png" alt="" className="w-96 sm:w-52 md:w-96" />
    <div className="text-center md:text-left">
      <p className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent text-lg font-semibold sm:text-left">
        01.
      </p>
      <h4 className="text-white font-inter text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-2">
        Setup and connect your <br /> wallet.
      </h4>
      <p className="text-white font-inter font-thin leading-7 mt-3">
        Use Trust Wallet, Metamask or any wallet to connect to <br /> multiple chains with the app.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 mb-16">
    <div className="text-center md:text-left">
      <p className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent text-lg font-semibold sm:text-left">
        02.
      </p>
      <h4 className="text-white font-inter text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-2">
        Find a task that matches <br /> your skills.
      </h4>
      <p className="text-white font-inter font-thin leading-7 mt-3">
        Make your offers and show why you deserve the job.
      </p>
      <p className="text-white font-inter font-thin leading-7 mt-5">
        Golden Tips: Deliver on time, develop your profile, and take <br /> care of your portfolio. The app has an on-chain scoring <br /> system to score contributions.
      </p>
    </div>
    <img src="/human.png" alt="" className="w-96 sm:w-52 md:w-96" />
  </div>

  {/* Section 3 */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-8">
    <img src="/note.png" alt="" className="w-96 sm:w-52 md:w-96" />
    <div className="text-center md:text-left ">
      <p className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent text-lg font-semibold sm:text-left">
        03.
      </p>
      <h4 className="text-white font-inter text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-2">
        Complete the task <br /> and earn rewards.
      </h4>
      <p className="text-white font-inter font-thin leading-7 mt-3">
        Instant payments, fast transactions, and proven professional <br /> authority building.
      </p>
      <p className="text-white font-inter font-thin leading-7 mt-5">
        NFT to prove the specialties and scores of projects carried <br /> out in your profile.
      </p>
    </div>
  </div>
</div>

  )
}

export default Steps