import { render, fireEvent } from '@testing-library/react';
import Header from '../app/components/header';

jest.mock('../../public/ping.mp3', () => {
    return {
      default: 'mocked-audio-file',
    };
  });
  
test('clicking "APPLY NOW" button calls playSound function', () => {
    const playMock = jest.fn();
    window.HTMLMediaElement.prototype.play = playMock;
  
    const { getByText } = render(<Header />);
    const applyNowButton = getByText('APPLY NOW');
    fireEvent.click(applyNowButton);
  
    expect(playMock).toHaveBeenCalled();
});

test('clicking menu button calls playSound function', () => {
    const playMock = jest.fn();
  window.HTMLMediaElement.prototype.play = playMock;

  const { getByTestId } = render(<Header />);
  const menuButton = getByTestId('menu-button');
  fireEvent.click(menuButton);

  expect(playMock).toHaveBeenCalled();
  });