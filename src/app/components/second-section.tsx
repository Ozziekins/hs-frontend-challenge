'use client'

import React from 'react';
import Image from 'next/image';

const SecondSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-24">

            {/* Left column with rounded pictures */}
            <div className="md:w-1/2 relative flex items-center align-center justify-center">
              {/* First round picture */}
              <div className="rounded-full overflow-hidden absolute -z-1">
                <Image
                  src="/images/SecondImage.png"
                  alt="Second Picture"
                  width={400}
                  height={400}
                />
              </div>

              {/* Original round picture */}
              <div className="rounded-full overflow-hidden relative z-1">
                <Image
                  src="/images/Image.png"
                  alt="Picture"
                  width={320}
                  height={320}
                />
              </div>
            </div>

            {/* Right column with text content */}
            <div className="md:w-1/2 flex flex-col align-center justify-center mt-12">
              <p className="text-indigo-500 text-4xl font-medium font-['Apercu Pro'] mb-8">
                About the apprenticeship
              </p>
              <p className="text-neutral-600 font-light font-['Apercu Pro']">
                Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience, and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.
              </p>
            </div>
          </div>
  );
};

export default SecondSection;
