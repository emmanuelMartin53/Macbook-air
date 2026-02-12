import { render, screen } from '@testing-library/react';
import { describe, test, expect, it, vi } from 'vitest'; // ESLint reconnaît test/expect
import userEvent from '@testing-library/user-event';


import Validation from '../Validation';



describe("Composant Validation", () => {
    // "configurationStep" => "confirmationStep" => "cartStep"
  it("Bouton 'Valider' s'affiche correctement", () => { // test ou it => meme effet
    render(<Validation nextLevel="confirmationStep"/>)
    const buttonConfirmation = screen.getByRole("button", {name: /valider/i})
    expect(buttonConfirmation).toBeInTheDocument()
  })

  test("Bouton 'Ajouter au panier' s'affiche correctement", () => {
    render(<Validation nextLevel="cartStep"/>)
    const cartButton = screen.getByRole("button", {name: /ajouter au panier/i})
    expect(cartButton).toBeInTheDocument()
  })

  test("Setter 'setStep' invoqué une seule fois pour passer à l'étape de confirmation", async () => {
    const user = userEvent.setup()

    const goToConfirmationStep = vi.fn()
    render(<Validation setStep={goToConfirmationStep} nextLevel="confirmationStep"/>)
    const buttonConfirmation = screen.getByRole("button", {name: /valider/i})

    await user.click(buttonConfirmation)
    expect(goToConfirmationStep).toHaveBeenCalledTimes(1)

  })

  test("Setter 'setStep' invoqué une seule fois pour passer à l'étape du panier", async () => {
    const user = userEvent.setup()

    const goToCartStep = vi.fn()
    render(<Validation setStep={goToCartStep} nextLevel="cartStep"/>)
    const cartButton = screen.getByRole("button", {name: /ajouter au panier/i})

    await user.click(cartButton)
    expect(goToCartStep).toHaveBeenCalledTimes(1)
  })


})
