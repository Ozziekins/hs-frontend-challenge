'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import CustomCursor from './custom-cursor'
import styles from '../styles/TestimonialsSlider.module.css'

const testimonials = [
  {
    name: 'Irene Pereyra',
    designation: 'Interaction Design Fellow ‘19',
    text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
    education: 'Education   ·   B.A. Visual Design',
    linkedin: 'https://www.linkedin.com/in/irene-pereyra/',
    imageUrl: '/Image2.png',
  },
  // {
  //   name: 'Irene Pereyra',
  //   designation: 'Interaction Design Fellow ‘19',
  //   text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
  //   education: 'Education   ·   B.A. Visual Design',
  //   linkedin: 'https://www.linkedin.com/in/irene-pereyra/',
  //   imageUrl: '/Image2.png',
  // },
  // {
    
  //   name: 'Irene Pereyra',
  //   designation: 'Interaction Design Fellow ‘19',
  //   text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
  //   education: 'Education   ·   B.A. Visual Design',
  //   linkedin: 'https://www.linkedin.com/in/irene-pereyra/',
  //   imageUrl: '/Image2.png',
  // mageUrl: '/Image2.png',
  // }
];

const TestimonialsSlider: React.FC = () => {
  const [isCustomCursorVisible, setIsCustomCursorVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsCustomCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCustomCursorVisible(false);
  };

  return (
    <div className={`flex space-x-8 overflow-x-auto items-center justify-center mt-12 ${styles.sliderContainer}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <CustomCursor isVisible={isCustomCursorVisible} />
      {testimonials.map((testimonial, index) => (
        <div key={index} className="border border-zinc-300 rounded max-w-[50%]">
          <div className="bg-white p-4">
            <div className="flex flex-row items-start mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.imageUrl}
                  alt={`${testimonial.name}'s profile photo`}
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-neutral-600 text-base font-medium font-['Apercu Pro']">
                      {testimonial.name}
                    </p>
                    <p className="text-neutral-600 text-base font-light font-['Apercu Pro']">
                      {testimonial.designation}
                    </p>
                  </div>
                  <div>
                    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
                      <Image 
                      src="/Twitter.png"
                      alt="linkedin"
                      width={50}
                      height={50}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 p-6">
            <p className="text-neutral-500 font-light mb-4">
              {testimonial.text}
            </p>
            <p className="text-neutral-600 text-base font-light font-['Apercu Pro'] mb-2">
              {testimonial.education}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSlider;
