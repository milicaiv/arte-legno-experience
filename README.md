# Arte Legno Experience

React/Vite sajt za Arte Legno sa kontakt formom i newsletter prijavom.

## Kako forme sada rade

Frontend i dalje salje na iste rute:

- `/api/contact`
- `/api/newsletter`

Ali slanje vise ne zavisi od SMTP/Nodemailer servera. Umjesto toga:

- lokalno `server/index.js` prima zahtjeve i salje email preko Resend API-ja
- na Cloudflare Pages produkciji iste rute rade kroz `functions/api/*`

To znaci da aplikacija moze biti deployana na Cloudflare Pages bez zasebnog Node servera.

## Lokalni razvoj

1. Instalirajte zavisnosti:

```sh
npm install
```

2. Napravite `.env.local` na osnovu `.env.example`

3. Pokrenite frontend:

```sh
npm run dev
```

4. U drugom terminalu pokrenite lokalni API:

```sh
npm run dev:api
```

Frontend ce u developmentu slati na lokalni Express API preko Vite proxy-ja.

## Cloudflare Pages deploy

Na Cloudflare Pages:

- build command: `npm run build`
- build output directory: `dist`

Dodajte ove secret / environment varijable u Pages projektu:

- `RESEND_API_KEY`
- `CONTACT_FORM_RECIPIENT`
- `NEWSLETTER_FORM_RECIPIENT`
- `CONTACT_FORM_SENDER`
- `NEWSLETTER_FORM_SENDER`

`*_SENDER` treba da bude verified adresa na `atlagic.org`, a `*_RECIPIENT` moze biti bilo koji stvarni inbox na koji zelite da stizu poruke.

## DNS i slanje sa domena `atlagic.org`

Da bi slanje radilo sa adresa kao `website@atlagic.org` ili `newsletter@atlagic.org`, domen za slanje mora biti verifikovan u Resend-u.

Prakticni redoslijed:

1. U Namecheap-u postaviti Cloudflare nameservere za `atlagic.org`.
2. Dodati `atlagic.org` kao sending domain u Resend.
3. Upisati DNS zapise koje Resend trazi.
4. Kad domen postane verified, postaviti sender adrese u Cloudflare Pages secrets.

## Napomena

Ako zelite, sljedeci korak mogu odmah uraditi i:

- pripremu `wrangler` konfiguracije za laksi Cloudflare preview
- zamjenu Resend-a nekim drugim providerom
- dodavanje cuvanja newsletter prijava u bazu ili mailing listu umjesto samo slanja na email
