'use client'

import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import Image from 'next/image';
import CustomCursor from './custom-cursor'
import styles from '../styles/TestimonialsSlider.module.css'

interface Testimonial {
  name: string;
  designation: string;
  text: string;
  education: string;
  linkedin: string;
  imageUrl: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials = [] }) => {
  const totalTestimonials = testimonials.length;
  const [testimonialWidth, setTestimonialWidth] = useState(100);
  const [isCustomCursorVisible, setIsCustomCursorVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsCustomCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCustomCursorVisible(false);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = Math.abs(info.offset.x);
    const maxDragDistance = 100;

    if (dragDistance > maxDragDistance) {
      const direction = info.offset.x > 0 ? -1 : 1;
      const nextIndex = (currentIndex + direction + totalTestimonials) % totalTestimonials;
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    const updateTestimonialWidth = () => {
      const vw = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
      if (vw >= 768) {
        setTestimonialWidth(40); // Set testimonial width to 40vw for screens wider than or equal to 768px
      } else {
        setTestimonialWidth(100); // Set testimonial width to 100vw for screens smaller than 768px
      }
    };

    updateTestimonialWidth();

    window.addEventListener('resize', updateTestimonialWidth);

    return () => {
      window.removeEventListener('resize', updateTestimonialWidth);
    };
  }, []);

  const translateXValue = -currentIndex * testimonialWidth * (totalTestimonials > 2 ? 1 : 2);
  const dragConstraints = {
    left: -(totalTestimonials - 2) * testimonialWidth,
    right: totalTestimonials > 2 ? testimonialWidth * 2 : 0,
  };

  return (
    <div className={`flex space-x-8 overflow-x-hidden items-center justify-center mt-12 ${styles.sliderContainer}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <CustomCursor isVisible={isCustomCursorVisible} />
      <motion.div
        className="flex space-x-8"
        drag="x"
        dragConstraints={{ left: -(totalTestimonials * testimonialWidth), right: (totalTestimonials * testimonialWidth) }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        style={{
          width: `${totalTestimonials * testimonialWidth}vw`,
          transform: `translateX(${translateXValue}vw)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`border border-zinc-300 rounded min-w-[20%]`}
            style={{
              width: `${testimonialWidth}%`,
            }}
          >
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
      </motion.div>
    </div>
  );
};

export default TestimonialsSlider;
