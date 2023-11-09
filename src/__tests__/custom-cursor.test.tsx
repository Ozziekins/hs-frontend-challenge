import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomCursor from '../app/components/custom-cursor';

test('does not render custom cursor when both isPointer and isVisible are false', () => {
    render(<CustomCursor isVisible={false} />);
    const customCursorElement = screen.queryByTestId('custom-cursor-pointer');
    expect(customCursorElement).toBeNull();
  
    const visibleCursorElement = screen.queryByTestId('custom-cursor-visible');
    expect(visibleCursorElement).toBeNull();
  });
  

test('renders custom cursor with drag style when isVisible is true', () => {
  render(<CustomCursor isVisible={true} />);

  const customCursorElement = screen.getByTestId('custom-cursor-visible');
  expect(customCursorElement).toHaveClass('visible');
});
