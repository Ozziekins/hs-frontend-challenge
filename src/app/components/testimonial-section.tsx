'use client'

import React from 'react';
import Image from 'next/image';
import TestimonialsSlider from './testimonial-slider';

const originalTestimonials = [
    {
      name: 'Irene Pereyra',
      designation: 'Interaction Design Fellow ‘19',
      text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
      education: 'Education   ·   B.A. Visual Design',
      linkedin: 'https://www.linkedin.com/in/irene-pereyra/',
      imageUrl: '/images/Image2.png',
    },
    {
      name: 'John Doe',
      designation: 'Graphic Designer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      education: 'Education   ·   B.A. Graphic Design',
      linkedin: 'https://www.linkedin.com/in/john-doe/',
      imageUrl: '/images/Image.png',
    }
  ];
  
const numberOfDuplicates = 10; 

const testimonials = Array(numberOfDuplicates)
.fill(originalTestimonials)
.flat();
  
const TestimonialSection = () => {
  return (
    <div className="relative w-full flex align-center justify-center">
        <div className="absolute -z-1 w-full h-full top-1 transform -translate-x-1 -translate-y-1 hidden md:block">
            <Image
            src="/images/SecondBackground.png"
            alt="Background 2 Picture"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            />
        </div>
        <div className="relative overflow-x-hidden z-1 flex flex-col md:flex-row gap-8 mb-36">
            <TestimonialsSlider testimonials={testimonials} />
        </div>
    </div>
  );
};

export default TestimonialSection;
