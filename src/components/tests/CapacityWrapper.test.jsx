import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect

import CapacityWrapper from '../CapacityWrapper';


describe("Wrapper renders correctly", () => {
  test("paragraph render correctly", () => {
    render(<CapacityWrapper />)

    const paragraphStorage = screen.getAllByRole("paragraph");
    expect(paragraphStorage).toBeInTheDocument();
  })
})
