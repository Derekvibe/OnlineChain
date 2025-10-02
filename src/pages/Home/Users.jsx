import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Users() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold:0.3,
  })
  return (
    <div className="mt-32" ref={ref}>
      <div className="border-b-4 bg-gradient-to-r w-24 m-auto from-three-lightpurple to-three-darkblue"></div>
      
      {/* Stats container */}
      <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-10">

        
        <div className="text-center border-b md:border-b-0 md:border-r px-8 py-4">
          <h2 className="font-inter font-bold text-5xl text-white mb-2">
            {inView && <CountUp start={0} end={25} duration={2}/>}
            k+</h2>
          <p className="font-inter font-thin text-sm text-white">Community Members</p>
        </div>

        <div className="text-center border-b md:border-b-0 md:border-r px-8 py-4">
          <h2 className="font-inter font-bold text-5xl text-white mb-2">
            {inView && <CountUp start={0} end={7} duration={2}/>}
            k</h2>
          <p className="font-inter font-thin text-sm text-white">Active Users</p>
        </div>

        <div className="text-center border-b md:border-b-0 md:border-r px-8 py-4">
          <h2 className="font-inter font-bold text-5xl text-white mb-2">
            {inView && <CountUp start={0} end={9} duration={2}/>}
            h</h2>
          <p className="font-inter font-thin text-sm text-white">Average Task Due Date</p>
        </div>

        <div className="text-center px-8 py-4">
          <h2 className="font-inter font-bold text-5xl text-white mb-2">
            ${inView && <CountUp start={0} end={53} duration={2}/>}</h2>
          <p className="font-inter font-thin text-sm text-white">Average Reward per Task</p>
        </div>
      </div>
    </div>
  )
}

export default Users
