'use client'

import React from 'react';
import Image from 'next/image';
import CountdownTimer from './countdown-timer';

const FirstSection = () => {
const playSound = () => {
    const audio = new Audio('/ping.mp3');
    audio.play();
    };

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-24">

        {/* Left column */}
        <div className="md:w-1/2 relative flex justify-end">
            {/* Background Icon */}
            <div className="absolute -z-1">
            <Image
                src="/images/BackgroundIcon.png"
                alt="Background Icon"
                width={250}
                height={250}
            />
            </div>
            <div className="p-8 rounded-lg relative z-1">
            <p className="text-indigo-500 text-4xl font-medium font-['Apercu Pro'] mb-4 relative z-1">Interaction Design Apprenticeship</p>
            <p className="text-neutral-600 font-medium font-['Apercu Pro'] mb-4">A fully funded work-study program to launch your tech career </p>
            <p className="text-neutral-600 font-light font-['Apercu Pro'] mb-8">Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship. </p>
            <div><span className="text-neutral-600 font-medium font-['Apercu Pro'] mb-4">Position:</span><span className="text-neutral-600 font-medium font-['Apercu Pro']"> </span><span className="text-neutral-600 font-light font-['Apercu Pro']">Marketing Performance</span></div>
            <button onClick={playSound} className="bg-indigo-500 text-white rounded-full px-4 py-2 mt-4">Apply Now</button>
            </div>
        </div>

        {/* Right column */}
        <div className="md:w-1/2 flex flex-col items-start">
            <div className="flex items-center mb-4">
            <Image
                src="/images/Logo.png"
                alt="Logo"
                width={150}
                height={150}
            />
            <div className="ml-12">
                <p className="opacity-50 text-black font-light font-['Apercu Pro'] mb-1">Powered by:</p>
                <p className="text-neutral-600 text-xl font-light font-['Apercu Pro']">Zeptolab</p>
            </div>
            </div>
            <div className="flex-col justify-center items-start gap-4 border border-zinc-300 rounded p-8">
            <div className="text-indigo-500 text-base font-medium font-['Apercu Pro']">Application closes in</div>
            <div className="text-neutral-600 text-3xl font-light font-['Apercu Pro']">
                <CountdownTimer />
            </div>
            </div>
            <div className="relative w-full">
            <div className="absolute -z-1 w-[80%] bottom-1 right-1 transform translate-x-1/3 translate-y-1/2 hidden md:block">
                <Image
                src="/images/Background.png"
                alt="Background Picture"
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
                />
            </div>
            <div className="rounded-lg mt-12 border border-zinc-300 rounded p-8 relative">
                <div className="flex justify-between">
                <div className="w-1/2 mr-12">
                    <span className="text-indigo-500 text-base font-medium">Location<br/></span>
                    <span className="text-neutral-600 text-base font-light">Bangkok</span>
                </div>
                <div className="w-1/2 ml-12">
                    <span className="text-indigo-500 text-base font-medium">Duration<br/></span>
                    <span className="text-neutral-600 text-base font-light">1 Year Full-Time</span>
                </div>
                </div>
                <div className="flex justify-between">
                <div className="w-1/2 mr-12">
                    <span className="text-indigo-500 text-base font-medium">Start date<br/></span>
                    <span className="text-neutral-600 text-base font-light">30 June 2020</span>
                </div>
                <div className="w-1/2 ml-12">
                    <span className="text-indigo-500 text-base font-medium">End date <br/></span>
                    <span className="text-neutral-600 text-base font-light">3 Aug 2020</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default FirstSection;
