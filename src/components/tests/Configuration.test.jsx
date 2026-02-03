import { render, screen, waitFor } from '../../test-utils';
import {describe, test, expect, beforeEach } from 'vitest';
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw';
import userEvent from '@testing-library/user-event';

import Configuration from "../Configuration";
import MacBookProviders from '../../providers/MacBookProviders';

beforeEach(() => {
  // Réinitialiser les handlers avant chaque test pour éviter les conflits
  server.resetHandlers();
});

// --------------------------
// Test 1 : Gestion des erreurs RAM et SSD
// --------------------------



describe("tests sur la es configurations", () => {

  // test("Gestion des erreurs RAM et SSD", async () => {
  //   // Forcer une erreur serveur
  //   server.resetHandlers(
  //     http.get('http://localhost:3030/ram', () =>
  //       HttpResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  //     ),
  //     http.get('http://localhost:3030/ssd', () =>
  //       HttpResponse.json({ message: 'Erreur serveur' }, { status: 500 })
  //     )
  //   );

  //   render(<Configuration />, { wrapper: MacBookProviders });

  //   // Vérifier que les alertes apparaissent
  //   const alerts = await screen.findAllByRole("alert");
  //   expect(alerts).toHaveLength(2);
  //   expect(alerts[0]).toHaveTextContent(/Nous avons une erreur/i);
  //   expect(alerts[1]).toHaveTextContent(/Nous avons une erreur/i);
  // });

  // --------------------------
  // Test 2 : Vérifie select RAM et options
  // --------------------------
  test("Vérifie la présence du select et des options RAM", async () => {
    const user = userEvent.setup();
    render(<Configuration />, { wrapper: MacBookProviders });

    // Récupération des éléments à tester

    // 1) Prix du produit
    const productPrice = screen.getByRole("heading", {name: /^(1\s)?099,00 €$|^(1099,00 €)$/ })
    // 2) capacité Ram dans les infos Produits
    const ramCapacity = screen.getByText("16 Go de mémoire unifiée")
    // 3) Capacité SSD dans les infos produits
    const ssdCapacity = screen.getByText("SSD de 256Go")

    // Attendre que le select RAM soit affiché
    const selectElement = await screen.findByRole("combobox", {
      name: /default select/i
    });
    expect(selectElement).toBeInTheDocument();

    // Attendre que les options soient ajoutées
    await waitFor(() => {
      const options = Array.from(selectElement.options);
      expect(options).toHaveLength(3);
      expect(options[0].textContent).toMatch(/16 Go de mémoire unifiée/i);
      expect(options[1].textContent).toMatch(/24 Go de mémoire unifiée/i);
      expect(options[2].textContent).toMatch(/32 Go de mémoire unifiée/i);
    });

    // Sélectionner une option et vérifier la valeur
    await user.selectOptions(selectElement, "250"); // "24 Go"
    expect(selectElement.value).toBe("250");

    // expect(
    //   screen.getByRole("option", {name:/16 Go de mémoire unifiée/i, exact: false}).selected
    // ).toBe(true)

    // Vérifier le prix du produit suite à la sélection

    expect(productPrice).toHaveTextContent("1 349,00 ")


  });
})
