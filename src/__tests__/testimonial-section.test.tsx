import { render } from '@testing-library/react';
import TestimonialSection from '../app/components/testimonial-section';

test('renders TestimonialSection component correctly', () => {
  const { getByText, getByAltText } = render(<TestimonialSection />);

//   const testimonial1 = getByText('Irene Pereyra');
//   expect(testimonial1).toBeInTheDocument();

//   const testimonial2 = getByText('John Doe');
//   expect(testimonial2).toBeInTheDocument();

  const backgroundImage = getByAltText('Background 2 Picture');
  expect(backgroundImage).toBeInTheDocument();
});
