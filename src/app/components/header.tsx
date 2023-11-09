'use client'

import React from 'react';

const Header = () => {
  const playSound = () => {
    const audio = new Audio('/ping.mp3');
    audio.play();
  };

  return (
    <div className="w-full h-16 bg-indigo-500 flex items-center justify-start px-8">
          <span className="text-white text-l font-['Apercu Pro'] uppercase">HARBOUR SPACE / </span>
          <span className="text-white text-xs font-['Apercu Pro'] uppercase">  INTERACTION DESIGN</span>

          <div className="absolute top-1 -right-[-8%] transform translate-y-1/2">

            {/* Green circular button */}
            <button onClick={playSound} className="bg-green-700 w-16 h-16 rounded-full flex items-center justify-center text-white font-['Apercu Pro'] text-xs text-center">
              APPLY NOW
            </button>
          </div>

          <div className="absolute top-1 -right-[1px] transform translate-y-1">

            {/* Menu */}
            <button onClick={playSound} className="w-16 h-16 flex items-center justify-center text-center" data-testid="menu-button">
              {/* Menu Icon */}
              <div className="w-6 h-6 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-white"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
  );
};

export default Header;
