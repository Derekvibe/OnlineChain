import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md">
      {/* Logo */}
      <a href="#home">
        <img
          src="/web3task_logo.png"
          alt="Web3Task Logo"
          className="w-[150px] h-auto"
        />
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="text-white hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a
              href="#steps"
              className="text-white hover:text-blue-400 transition"
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="text-white hover:text-blue-400 transition"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a href="#faq" className="text-white hover:text-blue-400 transition">
              FAQ
            </a>
          </li>
        </ul>

        <button className="px-4 py-2 rounded-4xl bg-gradient-to-r from-three-purple to-three-blue text-white font-semibold hover:opacity-90 transition">
          Open App
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-6 md:hidden">
          <a
            href="#home"
            className="text-white hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#steps"
            className="text-white hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </a>
          <a
            href="#roadmap"
            className="text-white hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-white hover:text-blue-400 transition"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>

          <button className="px-4 py-2 rounded-4xl bg-gradient-to-r from-three-purple to-three-blue text-white font-semibold hover:opacity-90 transition">
            Open App
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
