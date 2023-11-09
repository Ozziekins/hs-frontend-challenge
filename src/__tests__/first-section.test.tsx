import { render, screen } from '@testing-library/react';
import FirstSection from '../app/components/first-section';

test('renders FirstSection component', () => {
  render(<FirstSection />);
  
  expect(screen.getByText('Interaction Design Apprenticeship')).toBeInTheDocument();
  expect(screen.getByText('A fully funded work-study program to launch your tech career')).toBeInTheDocument();
  expect(screen.getByText('Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.')).toBeInTheDocument();
  expect(screen.getByText('Marketing Performance')).toBeInTheDocument();
  expect(screen.getByText('Apply Now')).toBeInTheDocument();
  expect(screen.getByText('Application closes in')).toBeInTheDocument();
  expect(screen.getByText('Location')).toBeInTheDocument();
  expect(screen.getByText('Bangkok')).toBeInTheDocument();
  expect(screen.getByText('Duration')).toBeInTheDocument();
  expect(screen.getByText('1 Year Full-Time')).toBeInTheDocument();
  expect(screen.getByText('Start date')).toBeInTheDocument();
  expect(screen.getByText('30 June 2020')).toBeInTheDocument();
  expect(screen.getByText('End date')).toBeInTheDocument();
  expect(screen.getByText('3 Aug 2020')).toBeInTheDocument();
});
