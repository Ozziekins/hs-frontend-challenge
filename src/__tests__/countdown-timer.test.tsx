import React from 'react';
import { render, screen, act } from '@testing-library/react';
import CountdownTimer from '../app/components/countdown-timer';

test('renders countdown timer with initial values', () => {
  render(<CountdownTimer />);
  expect(screen.getByText(/(\d+) Days : (\d+) Hrs : (\d+) Min : (\d+) Sec/i)).toBeInTheDocument();
});

test('renders countdown timer with updated values after 1 second', async () => {
  render(<CountdownTimer />);
  
  // Wait for 1 second 
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
  
  expect(screen.getByText(/(\d+) Days : (\d+) Hrs : (\d+) Min : (\d+) Sec/i)).toBeInTheDocument();
});
