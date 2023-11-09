import { render, screen } from '@testing-library/react';
import Grid from '../app/components/grid';

test('renders Grid component', () => {
  render(<Grid />);

  expect(screen.getByText('Scholarship value')).toBeInTheDocument();
  expect(screen.getByText('€31,300')).toBeInTheDocument();
  expect(screen.getByText('Tuition covered')).toBeInTheDocument();
  expect(screen.getByText('€20,900')).toBeInTheDocument();
  expect(screen.getByText('Remaining')).toBeInTheDocument();
  expect(screen.getByText('€2,000')).toBeInTheDocument();
  expect(screen.getByText('Living stipend')).toBeInTheDocument();
  expect(screen.getByText('€8,400 (€700/month)')).toBeInTheDocument();
  expect(screen.getByText('Study commitment')).toBeInTheDocument();
  expect(screen.getByText('3 hours / day')).toBeInTheDocument();
  expect(screen.getByText('You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.')).toBeInTheDocument();
  expect(screen.getByText('Work commitment')).toBeInTheDocument();
  expect(screen.getByText('4 hours / day')).toBeInTheDocument();
  expect(screen.getByText('Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.')).toBeInTheDocument();
  expect(screen.getByText('GRADUATION')).toBeInTheDocument();
  expect(screen.getByText('A full-time contract')).toBeInTheDocument();
  expect(screen.getByText('1 Year / Full-Time')).toBeInTheDocument();
  expect(screen.getByText('You’ll be guaranteed a 1-year contract with SCG upon graduation.')).toBeInTheDocument();
});
