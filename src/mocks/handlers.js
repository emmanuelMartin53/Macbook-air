import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/ram', () => {
    console.log("MSW RAM intercepté")
   return HttpResponse.json([
      { id: '16Go', option: '16 Go de mémoire unifiée', price: 0 },
      { id: '24Go', option: '24 Go de mémoire unifiée', price: 250 },
      { id: '32Go', option: '32 Go de mémoire unifiée', price: 500 },
    ])
  }
  ),
  http.get('http://localhost:3030/ssd', () => {
    return HttpResponse.json([
      { id: '256ssd', label: 'SSD de 256 Go', price: 0 },
      { id: '512ssd', label: 'SSD de 512 Go', price: 250 },
      { id: '1tossd', label: 'SSD de 1 To', price: 500 },
      { id: '2tossd', label: 'SSD de 2 To', price: 1000 },
    ])
  }
  ),
];
