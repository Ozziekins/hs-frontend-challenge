import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FAQTitle from '../app/components/faq-title'; // Adjust the import path accordingly

test('renders FAQTitle component', () => {
  render(<FAQTitle setSelectedOption={jest.fn()} />);
  const titleElement = screen.getByText('Frequently asked questions');
  expect(titleElement).toBeInTheDocument();
});

test('renders default selected option as "All"', () => {
  render(<FAQTitle setSelectedOption={jest.fn()} />);
  const selectedOptionElement = screen.getByText('All');
  expect(selectedOptionElement).toBeInTheDocument();
});

test('clicking on dropdown opens options', async () => {
    render(<FAQTitle setSelectedOption={jest.fn()} />);
    
    const dropdownButton = await screen.findByRole('button');
    fireEvent.click(dropdownButton);
  
    const optionElement = screen.getByText('Admissions');
    expect(optionElement).toBeInTheDocument();
  });