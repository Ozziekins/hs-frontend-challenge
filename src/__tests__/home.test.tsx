import React from 'react';
import { render } from '@testing-library/react';
import Home from '../app/page';

test('renders Home component correctly', () => {
  const { getByText } = render(<Home />);

  const headerText = getByText(/HARBOUR SPACE/i);
  const faqTitle = getByText(/Frequently Asked Questions/i);

  expect(headerText).toBeInTheDocument();
  expect(faqTitle).toBeInTheDocument();
});
