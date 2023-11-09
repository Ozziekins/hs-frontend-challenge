'use client'

import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
const CountdownTimer = () => {

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

  return (
    <div> {timeLeft.days} Days : {timeLeft.hours} Hrs : {timeLeft.minutes} Min : {timeLeft.seconds} Sec </div>
  );
};

export default CountdownTimer;
