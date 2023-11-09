'use client'

import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Header from './components/header';
import FirstSection from './components/first-section';
import SecondSection from './components/second-section';
import Grid from './components/grid';
import TestimonialSection from './components/testimonial-section';
import FAQTitle from './components/faq-title';
import FAQ from './components/faq'
import Footer from './components/footer';

const Home: NextPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>('All'); 

  return (
    <main className="min-h-screen flex-col items-center justify-between bg-white">
        <div>
      
        {/* Header */}
        <Header />

        {/* Container */}
        <div className="container mx-auto mt-8 md:mt-8 p-8 md:p-12 lg:p-16 flex flex-col md:flex-col items-center justify-center">

          {/* Two-column layout */}
          <FirstSection />

          {/* Two-column layout */}
          <SecondSection />

          {/* Grid */}
          <Grid />

          {/* Testimonials Slider */}
          <TestimonialSection />

          {/* Two-column layout */}
          <FAQTitle setSelectedOption={setSelectedOption} />

          {/* FAQ Section */}
          <FAQ selectedOption={selectedOption} />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
};

export default Home;