# Arte Legno Experience

Marketing sajt za ATLAGIĆ - ARTE LEGNO, napravljen u `React` + `Vite`, sa kontaktnom formom i newsletter prijavom.

## Lokalni razvoj

1. Instalirati zavisnosti:

```sh
npm install
```

2. Kreirati `.env.local`.

3. Pokrenuti frontend:

```sh
npm run dev
```

4. U drugom terminalu pokrenuti lokalni API:

```sh
npm run dev:api
```

U developmentu frontend koristi lokalni API preko Vite proxy-ja.

## Environment varijable

Potrebne varijable:

- `RESEND_API_KEY`
- `CONTACT_FORM_RECIPIENT`
- `NEWSLETTER_FORM_RECIPIENT`
- `CONTACT_FORM_SENDER`
- `NEWSLETTER_FORM_SENDER`

## Produkcija

Produkcijski deploy ide na `Cloudflare Pages`.

- build command: `npm run build`
- build output directory: `dist`

API rute:

- `/api/contact`
- `/api/newsletter`

Na produkciji ih obrađuju `Cloudflare Pages Functions` iz `functions/api/*`.
