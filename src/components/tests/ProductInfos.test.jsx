import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect

import ProductInfos from '../ProductInfos';


describe("Elements render of productInfos", () => {
  test("Image render correctly", () => {
    render(<ProductInfos />)
    const imgElement = screen.getByAltText(/macBook-air/i);
    expect(imgElement).toBeInTheDocument()
  })

   test("h5 render correctly", () => {
    render(<ProductInfos />)
    const h5Element = screen.getByRole("heading", {name: /MacBook Air - Gris sidéral/i, level: 5});
    expect(h5Element).toBeInTheDocument();
    expect(h5Element).toHaveClass("mt-4")
  })

   test("h4 render correctly", () => {
    render(<ProductInfos />)
    const h4Element = screen.getByRole("heading", {name: "1 199,00 €", level: 4});
    expect(h4Element).toBeInTheDocument();
    expect(h4Element).toHaveClass("green")
  })

})
