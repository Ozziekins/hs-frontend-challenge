'use client'

import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import styles from './styles/styles.module.css';
import TestimonialsSlider from './components/testimonial-slider';

interface FAQItem {
  Category: string;
  Question: string;
  Answer: string;
  isExpanded: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DropdownOptions = ['All', 'Admissions', 'Application process', 'Apprenticeship conditions', 'Programme conditions', 'Living in Bangkok'];


const originalTestimonials = [
  {
    name: 'Irene Pereyra',
    designation: 'Interaction Design Fellow ‘19',
    text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.',
    education: 'Education   ·   B.A. Visual Design',
    linkedin: 'https://www.linkedin.com/in/irene-pereyra/',
    imageUrl: '/Image2.png',
  },
  {
    name: 'John Doe',
    designation: 'Graphic Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    education: 'Education   ·   B.A. Graphic Design',
    linkedin: 'https://www.linkedin.com/in/john-doe/',
    imageUrl: '/Image.png',
  }
];

const numberOfDuplicates = 10; 

const testimonials = Array(numberOfDuplicates)
  .fill(originalTestimonials)
  .flat();

const Home: NextPage = () => {
  const [apiData, setApiData] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      Category: "Admissions",
      Question: "Do I get a job placement upon graduation?",
      Answer: "The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes. Harbour.Space is highly recognized among innovative employers and is a strategic partner of B.Grimm multi-industry corporation with 140 years of history in Thailand. Together, we ensure students get the best knowledge about the current job market opportunities. We offer our students paid internships options during studies jointly with our industrial partners. Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech-centric companies. Our industry-specific employability report could be provided to you separately during the admission process.",
      isExpanded: false,
    },
    {
      Category: "Program conditions",
      Question: "What is the duration of the program?",
      Answer: "The program duration is 2 years for a Master's degree and 4 years for a Bachelor's degree.",
      isExpanded: false,
    }
  ]);

  const filteredFaqItems = selectedOption === 'All' ? faqItems : faqItems.filter((item) => item.Category === selectedOption);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const toggleExpansion = (index: number) => {
    const audio = new Audio('/ping.mp3');
    audio.play();
    const updatedItems = [...faqItems];
    updatedItems[index].isExpanded = !updatedItems[index].isExpanded;
    setFaqItems(updatedItems);
  };

  const playSound = () => {
    const audio = new Audio('/ping.mp3');
    audio.play();
  };

  const calculateTimeLeft = (): TimeLeft => {
    const deadline = new Date('2023-11-23T00:00:00Z');
    const currentTime = new Date();
    const difference = deadline.getTime() - currentTime.getTime();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pre-prod.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data);
        setApiData(data);
        if (data.scholarship.faqs && data.scholarship.faqs.items) {
          const formattedFAQItems: FAQItem[] = data.scholarship.faqs.items.map((item: any) => {
            return {
              Category: item.type,
              Question: item.question,
              Answer: item.answer[0].data,
              isExpanded: false,
            };
          });
          setFaqItems(formattedFAQItems);
          console.log('FAQs fetched')
        }
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <main className="min-h-screen flex-col items-center justify-between bg-white">
      {apiData && (
        <div>
      
        {/* Header */}
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
            <button onClick={playSound} className="w-16 h-16 flex items-center justify-center text-center">
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

        {/* Container */}
        <div className="container mx-auto mt-8 md:mt-8 p-8 md:p-12 lg:p-16 flex flex-col md:flex-col items-center justify-center">

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-24">

            {/* Left column */}
            <div className="md:w-1/2 relative flex justify-end">
              {/* Background Icon */}
              <div className="absolute -z-1">
                <Image
                  src="/BackgroundIcon.png"
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
                  src="/Logo.png"
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
                  {timeLeft.days} Days : {timeLeft.hours} Hrs : {timeLeft.minutes} Min : {timeLeft.seconds} Sec
                </div>
              </div>
              <div className="relative w-full">
                <div className="absolute -z-1 w-[80%] bottom-1 right-1 transform translate-x-1/3 translate-y-1/2 hidden md:block">
                  <Image
                    src="/Background.png"
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

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 mb-24">

            {/* Left column with rounded pictures */}
            <div className="md:w-1/2 relative flex items-center align-center justify-center">
              {/* First round picture */}
              <div className="rounded-full overflow-hidden absolute -z-1">
                <Image
                  src="/SecondImage.png"
                  alt="Second Picture"
                  width={400}
                  height={400}
                />
              </div>

              {/* Original round picture */}
              <div className="rounded-full overflow-hidden relative z-1">
                <Image
                  src="/Image.png"
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

          {/* Grid */}
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

          {/* Testimonials Slider */}
          <div className="relative w-full flex align-center justify-center">
                <div className="absolute -z-1 w-full h-full top-1 transform -translate-x-1 -translate-y-1 hidden md:block">
                  <Image
                    src="/SecondBackground.png"
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

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-4 md:w-full">

            {/* Left column */}
            <div className="w-full md:w-1/2 rounded-full justify-start"> 
              <p className="text-indigo-500 text-4xl font-medium font-['Apercu Pro'] m-4">Frequently asked questions</p>
            </div>

            {/* Right column */}
            <div className="w-full md:w-1/2 flex flex-row md:flex-row items-start md:justify-end mr-8">
              <p className="text-neutral-600 font-light font-['Apercu Pro'] md:mr-4 mt-8 mb-4">
                Filter by: 
              </p>
              {/* Dropdown */}
              <div className="relative flex flex-col md:flex-row items-start justify-end mb-4">
                <div className={`relative border border-zinc-300 bg-white ${isDropdownOpen ? 'rounded-[10%]' : 'rounded-full'} px-4 py-2 mt-4 ml-4 flex items-start cursor-pointer`} onClick={handleDropdownToggle}>
                  <div className="flex flex-col">
                    <span className="text-indigo-500 text-lg font-medium font-['Apercu Pro'] mr-2">{selectedOption}</span>
                    {isDropdownOpen && (<div className="flex flex-col">
                    {DropdownOptions.filter(option => option !== selectedOption).map((option) => (
                        <span
                          key={option}
                          className="text-indigo-500 text-lg font-medium font-['Apercu Pro'] mr-2 cursor-pointer py-1 hover:text-black"
                          onClick={() => {
                            handleOptionClick(option);
                            handleDropdownToggle();
                          }}
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-indigo-500 mt-2 transform ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.293 5.293a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-8 md:w-full">
            {filteredFaqItems.map((item, index) => (
              <div key={index} className="flex flex-row md:flex-row items-start justify-between mb-4">
                {/* Horizontal Line */}
                <hr className="my-4 border-zinc-300 w-full md:w-1/3" />

                {/* First Column */}
                <div className="text-indigo-500 font-medium font-['Apercu Pro'] m-4 flex-shrink-0  md:w-1/3 md:justify-start hidden md:block">
                  {item.Category}
                </div>

                {/* Second Column */}
                <div className="text-neutral-600 font-medium font-['Apercu Pro'] m-4 flex-shrink-0 w-2/3 md:w-1/3 md:justify-start">
                  {item.Question}
                  {item.Answer && item.isExpanded && (
                    <div className="flex flex-col">
                      <span className="text-neutral-600 font-light font-['Apercu Pro'] mt-4">
                        {item.Answer}
                      </span>
                    </div>
                  )}
                </div>

                {/* Third Column - Expand Icon */}
                <div className="flex m-4 items-center justify-end flex-grow flex-shrink-0 w-1/3 md:w-1/3 md:justify-end">
                  <button onClick={() => toggleExpansion(index)}>
                    {item.isExpanded ? (
                      <span>
                        <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                          <span className="text-2xl font-light">-</span>
                        </div>
                      </span>
                    ) : (
                      <span>
                        <div className="bg-white border border-zinc-300 rounded-full w-8 h-8 flex items-center justify-center text-zinc-300">
                          <span className="text-2xl font-light">+</span>
                        </div>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
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
                {timeLeft.days} Days : {timeLeft.hours} Hrs : {timeLeft.minutes} Min : {timeLeft.seconds} Sec
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </main>
  )
};

export default Home;