import { render } from '@testing-library/react';
import SecondSection from '../app/components/second-section';

test('renders SecondSection component correctly', () => {
  const { getByText, getByAltText } = render(<SecondSection />);

  const titleElement = getByText('About the apprenticeship');
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = getByText(/Our scholarships are designed to give talented and driven young people/i);
  expect(descriptionElement).toBeInTheDocument();

  const firstImage = getByAltText('Second Picture');
  expect(firstImage).toBeInTheDocument();

  const secondImage = getByAltText('Picture');
  expect(secondImage).toBeInTheDocument();
});
