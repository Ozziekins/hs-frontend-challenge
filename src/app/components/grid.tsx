'use client'

import React from 'react';

const Grid = () => {
  return (
    <div className="flex w-full flex-row md:flex-cols grid md:grid-cols-3 gap-8 mb-52">

            {/* Box A */}
            <div className="col-span-2 md:col-span-1 row-span-2 md:row-span-3 border border-zinc-300 rounded p-4">
              <div className="text-indigo-500 text-base font-medium pb-2">Scholarship value</div>
              <div className="text-neutral-600 text-5xl font-light pb-4">€31,300</div>

              {/* Horizontal Line */}
              <hr className="my-4 border-zinc-300 md:mt-[80%] md:mb-[20%]" />

              <div className="w-full grid md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <span className="text-indigo-500 text-base font-medium">Tuition covered<br/></span>
                  <span className="text-neutral-600 text-base font-light">€20,900</span>
                </div>
                <div className="col-span-1">
                  <span className="text-indigo-500 text-base font-medium">Remaining<br/></span>
                  <span className="text-neutral-600 text-base font-light">€2,000</span>
                </div>
                <div className="col-span-2">
                  <span className="text-indigo-500 text-base font-medium">Living stipend<br/></span>
                  <span className="text-neutral-600 text-base font-light">€8,400 (€700/month)</span>
                </div>
              </div>
            </div>

            {/* Box B */}
            <div className="col-span-2 md:col-span-1 md:row-span-1 border border-zinc-300 rounded p-4">
              <div className="text-indigo-500 text-base font-medium pb-2">Study commitment</div>
              <div className="text-neutral-500 font-light pb-4">3 hours / day</div>
              <hr className="my-4 w-8 border-zinc-300" />
              <div className="text-neutral-600 text-base font-light">You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time. </div>
            </div>

            {/* Box C */}
            <div className="col-span-2 md:col-span-1 md:row-span-1 border border-zinc-300 rounded p-4">
              <div className="text-indigo-500 text-base font-medium pb-2">Work commitment</div>
              <div className="text-neutral-500 font-light pb-4">4 hours / day</div>
              <hr className="my-4 w-8 border-zinc-300" />
              <div className="text-neutral-600 text-base font-light">Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.</div>
            </div>

            {/* Graduation Text with Horizontal Line */}
            <div className="col-span-2 text-center relative">
              <div className="text-neutral-600 text-base font-medium">GRADUATION</div>
              <hr className="border-zinc-300 absolute w-full h-0.5 top-1/2 left-0 transform translate-y-(-50%)" />
            </div>

            {/* Box D */}
            <div className="col-span-2  row-span-1 md:row-span-1 border border-zinc-300 rounded p-4">
              <div className="text-indigo-500 text-base font-medium pb-2">A full-time contract</div>
              <div className="text-neutral-500 text-[26px] font-light pb-4">1 Year / Full-Time</div>
              <hr className="my-4 w-8 border-zinc-300" />
              <div className="text-neutral-600 text-base font-light">You’ll be guaranteed a 1-year contract with SCG upon graduation.</div>
            </div>
          </div>
  );
};

export default Grid;
