import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect

import ProductInfos from '../ProductInfos';


describe("Elements render of productInfos", () => {
  test("Image render correctly", () => {
    render(<ProductInfos />)
    const imgElement = screen.getByAltText(/macBook-air/i);
    expect(imgElement).toBeInTheDocument()
  })
  // Nom du produit
   test("h5 render correctly", () => {
    render(<ProductInfos />)
    const h5Element = screen.getByRole("heading", {name: /macBook Air - gris sidéral/i, level: 5});
    expect(h5Element).toBeInTheDocument();
    expect(h5Element).toHaveClass("mt-4")
  })
  // Prix
   test("h4 render correctly", () => {
    render(<ProductInfos />)
    const h4Element = screen.getByRole("heading", { level: 4});
    expect(h4Element).toBeInTheDocument();
    expect(h4Element).toHaveClass("green")
    expect(h4Element).toHaveTextContent("1 099,00 €")
  })

  // Heading
  test("h3 render correctly", () => {
    render(<ProductInfos />)
    const titleDescription = screen.getByRole("heading", {level: 3, name: /personnalisez votre macBook Air - gris sidéral/i});
    expect(titleDescription).toBeInTheDocument();
  })

  // ul
  test("ul render correctly", () => {
    render(<ProductInfos />)
    const productInfoList = screen.getByRole("list");
    expect(productInfoList).toHaveClass("list-unstyled mt-4")
  })
  // 10 <li>
  test("li render correctly", () => {
    render(<ProductInfos />)
    const productInfoItems = screen.getAllByRole("listitem");
    expect(productInfoItems.length).toBe(10)
  })

  // Texte li
  // Option 1
    test("li render correctly", () => {
      render(<ProductInfos />)
      const text01 = screen.getByText(/Puce Apple M4 avec CPU 10 coeurs, GPU 8 coeurs, Neural Engine 16 coeurs/i)
      expect(text01).toBeInTheDocument()
  })

  // Option 2

    test("li render correctly", () => {
      render(<ProductInfos />)
      const productInfoItems = screen.getAllByRole("listitem");
      const featureListItems = productInfoItems.map((item) => item.textContent)
      expect(featureListItems).toEqual([
        "Puce Apple M4 avec CPU 10 coeurs, GPU 8 coeurs, Neural Engine 16 coeurs",
        "16 Go de mémoire unifiée",
        "SSD de 256Go",
        "Écran Liquid Retina 13,6 pouces avec True Tone",
        "Caméra 12MP Center Stage",
        "Port de charge MagSafe 3",
        "Deux ports Thunderbolt 4",
        "Adaptateur secteur USB‑C 30 W",
        "Magic Keyboard rétroéclairé avec Touch ID - Français",
        "Apple Intelligence"
      ])
  })

})
