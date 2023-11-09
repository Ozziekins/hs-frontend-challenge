import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../app/components/faq';

test('renders FAQ component', () => {
  render(<FAQ selectedOption="All" />);
  const questionElement = screen.getByText('Do I get a job placement upon graduation?');
  expect(questionElement).toBeInTheDocument();
});

test('toggles FAQ expansion', async () => {
    render(<FAQ selectedOption="All" />);

    
    const expansionButtons = screen.getAllByTestId('expand-button');
    
    fireEvent.click(expansionButtons[0]);

    const answerElement = screen.getAllByTestId('faq-answer');
    
    expect(answerElement[0]).toBeInTheDocument();
  });
  
  
  
  
  
  