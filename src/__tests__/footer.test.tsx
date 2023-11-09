import { render, screen } from '@testing-library/react';
import Footer from '../app/components/footer';

test('renders Footer component', () => {
  render(<Footer />);
  
  expect(screen.getByText('Zeptolab')).toBeInTheDocument();
  expect(screen.getByText('Marketing Performance')).toBeInTheDocument();
  expect(screen.getByText('Location')).toBeInTheDocument();
  expect(screen.getByText('Bangkok')).toBeInTheDocument();
  expect(screen.getByText('Duration')).toBeInTheDocument();
  expect(screen.getByText('1 Year Full-Time')).toBeInTheDocument();
  expect(screen.getByText('Start date')).toBeInTheDocument();
  expect(screen.getByText('3 Aug 2020')).toBeInTheDocument();
  expect(screen.getByText('Application deadline')).toBeInTheDocument();
});
