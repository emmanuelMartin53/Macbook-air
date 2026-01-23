import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect
import App from './App';


describe("Elements renders correctly", () => {
  test('renders learn react link', () => {
    render(<App />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument()

    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeInTheDocument()

  });

})
