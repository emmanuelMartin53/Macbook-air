import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect
import App from './App';


describe("Elements renders correctly", () => {
  test('renders learn react link', () => {
    render(<App />);
  });

})
