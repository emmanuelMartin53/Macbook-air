import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect

import Capacity from '../Capacity';

describe("Vérifier les capacités RAM et SSD", () => {
  test("Tester les informations relatives à la RAM", async () => {
    render(<Capacity capacityType="ram" />)

    // <p> paragraph
    const ramParagraph = screen.getByText(/sélectionnez la capacité de la mémoire/i)
    expect(ramParagraph).toBeInTheDocument()

    // <select> select
    const selectElement = screen.getByRole("combobox", {name: /default select/i});
    expect(selectElement).toBeInTheDocument()

    // 2 options <select>

    const allRamOptions = await screen.findAllByRole("option");
    expect(allRamOptions).toHaveLength(3)

    // texte "16Go de mémoire unifiée" selectionné par défaut

    const defaultTextOption = screen.getByRole("option", {name:/16 Go de mémoire unifiée/i});
    expect(defaultTextOption.selected).toBe(true)

  })

  test("Tester les informations relatives au SSD", async () => {
    render(<Capacity capacityType="ssd" />)

    // <p> paragraph

    const ssdParagraph = screen.getByText(/électionnez la capacité de stockage/i);
    expect(ssdParagraph).toBeInTheDocument()

    // <input> SSD de 256Go selected
    const radioInput256 = await screen.findByRole("radio", {name:/SSD de 256 Go/i});
    expect(radioInput256).toBeInTheDocument()
    expect(radioInput256).toBeChecked()

    // 3 more inputs
    const otherRadioInputs = await screen.findAllByRole("radio", {name: /.*\u20AC\)/}) //€)
    expect(otherRadioInputs).toHaveLength(3)

    // All prices

    const priceRadioInputs = otherRadioInputs.map((input) => input.value)
    expect(priceRadioInputs).toEqual(["250", "500", "1000"])
  })
})
