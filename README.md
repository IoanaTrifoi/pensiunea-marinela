# Pensiunea Marinela – website

Site static (HTML/CSS/JS, fără build) pentru Pensiunea Marinela, Lazu Baciului 167A, Sighetu Marmației, Maramureș.

Deschide `index.html` în browser. Pentru publicare se poate folosi orice hosting static (GitHub Pages, Netlify etc.).

## Structură

- `index.html` – pagina principală (despre, camere, facilități, galerie, împrejurimi, rezervare, contact)
- `css/style.css` – stiluri
- `js/main.js` – meniu mobil, formular de rezervare (trimite cererea pe WhatsApp), lightbox galerie
- `images/` – fotografii

## Fotografii

Imaginile actuale din `images/` sunt decupate provizoriu dintr-o captură Google Maps (rezoluție mică).
De înlocuit cu fotografiile de pe Booking.com / ale proprietarului, păstrând numele fișierelor:

- `images/exterior.jpg` – fațada (folosită în hero, „Despre” și galerie)
- `images/camera.jpg` – cameră (folosită la camere și în galerie)
- `images/sala-comuna.jpg` – sala comună

Pentru poze noi în galerie, adaugă în secțiunea `#galerie` din `index.html` câte un bloc:

```html
<a href="images/poza.jpg" class="gallery-item"><img src="images/poza.jpg" alt="Descriere" loading="lazy"></a>
```

## De verificat cu proprietarul

- Numărul de WhatsApp pentru rezervări (`WHATSAPP_NUMBER` în `js/main.js`, acum 0744 404 459)
- Orele de check-in / check-out, tipurile de camere și facilitățile
- Adresa de email, dacă se dorește afișată
