import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // ESLint reconnaît test/expect
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw'

import Configuration from "../Configuration"

test("Gestion des erreurs RAM et SSD", async () => {
  server.resetHandlers(
     http.get('http://localhost:3030/ram', () => {
        return HttpResponse.json(
          { message: 'Erreur serveur' },
          { status: 500 }
        );
    }),

    http.get('http://localhost:3030/ssd', () => {
      return HttpResponse.json(
        { message: 'Erreur serveur' },
        { status: 500 }
      );
    })
  )

  render(<Configuration />)

  // BootstrapAlert

  // const bootstrapAlert = await screen.findAllByRole("alert")
  // expect(bootstrapAlert).toHaveLength(2)

  // const alert = await screen.findAllByText("Nous avons une erreur")
  // expect(alert).toHaveLength(2)


  await waitFor( async () => {
    const alert = await screen.findAllByRole("alert");
    expect(alert).toHaveLength(2)
  })
})
