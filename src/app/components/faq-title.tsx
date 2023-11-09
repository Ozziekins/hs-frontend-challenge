'use client'

import React, { useState } from 'react';

interface FAQTitleProps {
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  }

const DropdownOptions = ['All', 'Admissions', 'Application process', 'Apprenticeship conditions', 'Programme conditions', 'Living in Bangkok'];

const FAQTitle: React.FC<FAQTitleProps> = ({  setSelectedOption: setParentSelectedOption  }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setParentSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
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
  );
};

export default FAQTitle;
