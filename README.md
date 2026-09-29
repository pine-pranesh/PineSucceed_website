# PineSucceed — static HTML version

A static copy of the PineSucceed website built with plain HTML5, CSS3 and vanilla JavaScript on **Bootstrap 5.0.1**, with **Font Awesome Free 6.5.0** icons and **Swiper 4.2.0** for the About page slider. There is no build step.

## Open it

- **Quickest:** double-click any `.html` file. Everything works over `file://`. An internet connection is needed for the Bootstrap, Font Awesome and Swiper CDN files.
- **Local server:** serve this folder with any static server, for example `npx serve .`, then open the printed URL.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about-us.html` | About |
| `office.html` | Our offices |
| `contact-us.html` | Contact |
| `retail-ecommerce-b2b.html` | Retail & eCommerce |
| `healthcare-fitness-solutions.html` | Healthcare |
| `manufacturing-and-industrial-operations.html` | Manufacturing & Industrial Operations |
| `banking-finance-insurance-solutions.html` | Banking, Finance & Insurance (BFSI) |
| `mining.html` | Mining |
| `legal.html` | Legal |
| `ai-across-sdlc-services.html` | Artificial Intelligence (AI across the SDLC) |

Links to pages that are not part of this folder (for example `/devops-services`) keep their absolute path, so they only work when the files are served next to the live site.

## Libraries

| Library | Version | Loaded from |
|---|---|---|
| Bootstrap (CSS) | 5.0.1 | `@import` at the top of `css/site.css` (jsDelivr) |
| Font Awesome Free | 6.5.0 | `@import` at the top of `css/site.css` (jsDelivr) |
| Swiper | 4.2.0 | `<link>` and `<script>` in `about-us.html` (jsDelivr) |

Bootstrap's JavaScript is not loaded because no page uses a Bootstrap JS component. Menus, modals, tabs, the FAQ accordion and the carousels are handled by the scripts in `js/`.

## Folder structure

```
├── *.html                 pages
├── css/site.css           all site styles (see "How the CSS is organised")
├── js/
│   ├── components/        shared by several pages
│   │   ├── header.js         header: mega menus, mobile menu, scroll shadow, transparent header on About
│   │   ├── modals.js         "Get Free Consultation" / "Request a Proposal" buttons and both modals
│   │   ├── smooth-scroll.js  smooth page scrolling (Lenis 1.1.20 from jsDelivr)
│   │   ├── phone-field.js    international phone input
│   │   └── industry-page.js  industry pages: services tabs, solutions carousel, FAQ accordion
│   └── pages/             one script per page
│       ├── home.js           capability tabs, Industries slider, contact form
│       ├── about.js          competencies slider (Swiper 4.2.0)
│       ├── contact.js        contact page form
│       ├── retail.js         Retail & eCommerce content for industry-page.js
│       ├── healthcare.js     Healthcare content for industry-page.js
│       ├── manufacturing.js  Manufacturing & Industrial content for industry-page.js
│       ├── bfsi.js           BFSI content for industry-page.js
│       ├── mining.js         Mining content for industry-page.js
│       └── legal.js          Legal content for industry-page.js
└── assets/                images, videos, icons and fonts
```

Each page loads `components/phone-field.js`, `components/header.js`, `components/modals.js` and its own page script, all with `defer`. The Retail and Healthcare pages also load `components/industry-page.js`, which holds the behaviour both pages share; their page scripts only pass in the content.

No inline `style` attributes are used. Images that fill their container use the `img-fill` class, and the footer social icons use `social-icon--*` classes.

## How the CSS is organised

`css/site.css` uses cascade layers so that Bootstrap's Reboot never overrides the site's own styles:

1. `@layer vendor` holds Bootstrap 5.0.1 and Font Awesome 6.5.0, imported at the top of the file.
2. Unlayered rules hold the fonts, the phone-input styles, brand variables (`--primary`, `--ink-strong`, …), body/heading fonts, the scrollbar and keyframes.
3. `@layer base` holds element defaults (no default margins, block images, unstyled lists and buttons) and the icon sizing.
4. `@layer components` holds the page and component styles, grouped by header, footer, shared sections, modals and then one group per page.

In the markup, Bootstrap utility classes (`d-flex`, `align-items-center`, `justify-content-between`, `position-relative`, `w-100`, `mx-auto`, `p-3`, `text-center`, `fw-bold`, `rounded-pill`, `d-md-block`, …) are used wherever they produce exactly the same result as the original design. Everything else uses a named component class in `site.css`, for example `header-nav-button` or `industry-faq-title`.

Two things deliberately stay in custom CSS:

- **Breakpoints other than `md`.** The design uses breakpoints at 640, 768, 1024, 1280 and 1536 px. Bootstrap's are 576, 768, 992, 1200 and 1400 px. Only 768 px matches, so only `md` responsive utilities (`d-md-flex`, …) are used. The other breakpoints are media queries in `site.css`, so tablet and laptop layouts switch at exactly the same widths as before.
- **CSS grid layouts, gaps and arbitrary sizes.** Bootstrap 5.0.1 has no CSS-grid or `gap` utilities. Its `row`/`col` gutters also add padding and negative margins, which would change card sizes. So these layouts stay as CSS grid in `site.css`.

## Icons

Icons use Font Awesome Free 6.5.0 as `<i class="icon fa-solid fa-…">`. The `.icon` class keeps each icon in the same box size as the original artwork (24×24 by default, or the size its component class sets). The multi-colour illustration icons in the Retail and Healthcare service tabs are custom artwork with no Font Awesome equivalent, so they stay as inline SVG.

## Forms need a backend

The contact forms and both modals send JSON to `/api/consultation` and `/api/proposal`. A static host has no such endpoints, so the forms show their error message until a backend is available.

- Point the forms at a backend by setting this before the scripts load:
  ```html
  <script>window.PS_API_BASE = "https://your-domain.com";</script>
  ```
- After a successful proposal the modal redirects to `thank-you.html?token=…`. You can change that with `window.PS_THANK_YOU_URL`.

## Known differences

- **Icons:** Font Awesome glyphs are drawn slightly differently from the previous line icons. The size, position and colour are the same.
- **Phone field:** formatting and validation follow `libphonenumber-js`. Non-geographic codes such as `+800` fall back to a 7–15 digit check.
