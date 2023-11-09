'use client'

import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import styles from './styles/styles.module.css';

interface FAQItem {
    Category: string;
    Question: string;
    Answer: string;
    isExpanded: boolean;
  }

interface FAQProps {
    selectedOption: string;
}  
  

const FAQ: React.FC<FAQProps> = ({ selectedOption }) => {
    const [apiData, setApiData] = useState<any>(null);
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


  const toggleExpansion = (index: number) => {
    const audio = new Audio('/ping.mp3');
    audio.play();
    const updatedItems = [...faqItems];
    updatedItems[index].isExpanded = !updatedItems[index].isExpanded;
    setFaqItems(updatedItems);
  };

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
  );
};

export default FAQ;
