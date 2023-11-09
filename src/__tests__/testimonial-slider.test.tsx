import React from 'react';
import { render } from '@testing-library/react';
import TestimonialsSlider from '../app/components/testimonial-slider';

const testimonials = [
  {
    name: 'John Doe',
    designation: 'Designer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    education: 'B.A. in Design',
    linkedin: 'https://www.linkedin.com/in/john-doe/',
    imageUrl: '/images/john-doe.jpg',
  }
];

test('renders TestimonialsSlider component correctly', () => {
  const { getByText, getByAltText } = render(<TestimonialsSlider testimonials={testimonials} />);

  const nameElement = getByText(/John Doe/i);
  const designationElement = getByText(/Designer/i);
  const textElement = getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i);
  const educationElement = getByText(/B.A. in Design/i);

  expect(nameElement).toBeInTheDocument();
  expect(designationElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(educationElement).toBeInTheDocument();
});
