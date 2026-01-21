import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest'; // ESLint reconnaît test/expect
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});
