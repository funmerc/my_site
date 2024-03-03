import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders References PLACEHOLDER', () => {
  render(<App />);
  const spanElement = screen.getByText(/References Page PLACEHOLDER/i);
  expect(spanElement).toBeInTheDocument();
});
