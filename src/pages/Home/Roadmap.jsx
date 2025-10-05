import React from 'react'
import { motion } from "framer-motion";


function Roadmap() {
  return (
    <motion.section
      id="roadmap"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
    <div className="mt-32">
      
      <div className="border-b-4 bg-gradient-to-r w-24 m-auto from-three-lightpurple to-three-darkblue"></div>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-12 text-white mt-12"> The {" "}
        <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
          Roadmap
        </span>
      </h2>

      <img src="/levels.png" alt="" className="w-full sm:w-md md:w-2/4 m-auto" />
      </div>
      </motion.section>
  )
}

export default Roadmap