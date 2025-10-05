import React from "react";
import { ArrowUpRight } from "lucide-react";

function Build() {
  return (
    <div className="mt-16">
      <div className="border-b-4 bg-gradient-to-r w-24 m-auto from-three-lightpurple to-three-darkblue"></div>
      
      <div className="relative mt-16">
        <div className="absolute inset-0 bg-[url('/Build.png')] w-full"></div>
        <div className="relative pt-6 pb-8">
        <h2 className="text-center text-7xl sm:text-4xl md:text-7xl font-bold font-inter mb-12 text-white mt-12">
          Let's Build{" "} <br />
          <span className="bg-gradient-to-r from-three-darkblue to-three-skyblue bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <div className="flex justify-center">
          <button className="px-5 py-3 rounded-3xl bg-gradient-to-r from-three-purple to-three-blue text-white font-semibold flex items-center gap-2 hover:opacity-90 transition">
            Open App
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Build;
