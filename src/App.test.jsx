import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest'; // ESLint reconnaît test/expect
import App from './App';

describe("Renders Element correctly", () => {

  test('renders learn react link', () => {
    render(<App />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument()
  });

  test("inpot render correctly", () => {
    render(<App />)
    const inputElement = screen.getByRole("textbox")
    expect(inputElement).toBeInTheDocument()
  })

})
