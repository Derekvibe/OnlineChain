import React from "react";

function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4  w-auto">
      {/* Logo */}
      <a href="/">
        <img
          src="/web3task_logo.png"
          alt="Web3Task Logo"
          className="w-[180px] h-auto"
        />
      </a>

      {/* Links + Button */}
      <div className="flex items-center gap-8">
        <ul className="flex gap-6">
          <li>
            <a href="/" className="text-white hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
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

        <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-three-purple to-three-blue text-white font-semibold hover:opacity-90 transition">
          Open App
        </button>
      </div>
    </nav>
  );
}

export default Nav;
