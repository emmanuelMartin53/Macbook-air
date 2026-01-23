import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect

import Header from '../Header';

describe("testing Elements correctly", () => {
  test("h1 with classfw-bold & text 'Mackbook Air'", () =>{
    render(<Header />)

    const h1Element = screen.getByRole("heading", {name: /macbook air/i, level: 1});
    expect(h1Element).toBeInTheDocument()
    expect(h1Element).toHaveClass("fw-bold")
  })
})
