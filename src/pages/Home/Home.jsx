import { ArrowUpRight } from "lucide-react";
import React from "react";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-6 lg:px-6 py-4 md:py-16">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[70px] lg:leading-[80px] text-white">
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

        <p className="font-inter font-thin text-base md:text-lg leading-6 md:leading-8 mt-4 text-gray-200">
          Spend less money in projects while providing a <br className="hidden sm:block" />
          learning curve for students worldwide
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="mt-6 px-5 py-3 rounded-4xl bg-gradient-to-r from-three-purple to-three-blue text-white font-semibold flex items-center gap-2 hover:opacity-90 transition">
            Open App
            <ArrowUpRight size={18} />
          </button>
        </div>

        <img
          src="/Frame_1.png"
          alt="Hero Illustration"
          className="mt-8 mx-auto md:mx-0 w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5"
        />
      </div>

      <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="/div.banner__images-two.png"
          alt="Div Banner"
          className="w-4/5 sm:w-3/5 md:w-full h-auto"
        />
</div>

    </section>
  );
}

export default Home;
