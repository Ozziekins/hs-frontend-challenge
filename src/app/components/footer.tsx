'use client'

import React from 'react';
import CountdownTimer from './countdown-timer';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-auto bg-white border border-zinc-300 flex flex-col md:flex-row items-center justify-center mt-8 px-8 z-11 hidden md:block">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-col items-start mb-2 md:mb-0">
              <div className="text-neutral-600 text-base md:text-lg font-medium font-['Apercu Pro']">Zeptolab</div>
              <div className="text-neutral-600 text-base md:text-lg font-light font-['Apercu Pro']">Marketing Performance</div>
            </div>
            <div className="flex-col items-start mb-2 md:mb-0">
              <div className="text-neutral-600 text-base md:text-lg font-medium font-['Apercu Pro']">Location</div>
              <div className="text-neutral-600 text-base md:text-lg font-light font-['Apercu Pro']">Bangkok</div>
            </div>
            <div className="flex-col items-start mb-2 md:mb-0">
              <div className="text-neutral-600 text-base md:text-lg font-medium font-['Apercu Pro']">Duration</div>
              <div className="text-neutral-600 text-base md:text-lg font-light font-['Apercu Pro']">1 Year Full-Time</div>
            </div>
            <div className="flex-col items-start mb-2 md:mb-0">
              <div className="text-neutral-600 text-base md:text-lg font-medium font-['Apercu Pro']">Start date</div>
              <div className="text-neutral-600 text-base md:text-lg font-light font-['Apercu Pro']">3 Aug 2020</div>
            </div>
            <div className="flex-col items-start mb-2 md:mb-0">
              <div className="text-neutral-600 text-base md:text-lg font-medium font-['Apercu Pro']">Application deadline</div>
              <div className="text-neutral-600 text-base md:text-lg font-light font-['Apercu Pro']">30 June 2020</div>
            </div>
            <div className="flex-col items-start mb-2 md:mb-0">
              <div className="text-neutral-600 text-base md:text-lg font-medium font-['Apercu Pro']">Application closes in</div>
              <div className="text-neutral-600 text-base md:text-lg font-light font-['Apercu Pro']">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
  );
};

export default Footer;
