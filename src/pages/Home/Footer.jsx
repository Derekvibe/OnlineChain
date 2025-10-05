import { ArrowUp } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div>
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 lg:px-6 py-10 md:py-16 gap-8">
        {/* Logo + Social */}
        <div>
          <a href="#home">
             <img
            src="/web3task_logo.png"
            alt="Web3Task Logo"
            className="w-40 h-auto"
          />
          </a>
          <p className="font-thin font-inter text-sm text-white mt-4">
            Join our Discord channel or follow us on <br />
            Twitter to keep up to date with our latest work <br /> and
            announcements.
          </p>

          <div className="flex gap-4 mt-4">
            <img src="/X.png" alt="Footer Twitter Logo" />
            <img src="/Dis.png" alt="Footer Discord Logo" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
          <div className="text-white font-inter font-thin">
            <h5 className="font-inter font-bold mb-2">Quick Link</h5>
            <ul>
              <li className="mb-1"><a href="#home">About</a></li>
              <li className="mb-1"><a href="#steps">How it works</a></li>
              <li className="mb-1"><a href="#roadmap">Roadmap</a></li>
              <li className="mb-1"><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="text-white font-inter font-thin">
            <h5 className="font-inter font-bold mb-2">Community</h5>
            <ul>
              <li className="mb-1"><a href="/">Documentation</a></li>
              <li className="mb-1"><a href="/">Web3Dev</a></li>
              <li className="mb-1"><a href="/">LinkTree</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" border-gray-700 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm px-6">
          <p className="text-center mb-3 md:mb-0">© 2025 Web3Task. All rights reserved.</p>
          <div className="flex gap-6">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="flex items-center gap-2 cursor-pointer">
              Terms of Use
              <ArrowUp size={16} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
