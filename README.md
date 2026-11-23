# Hagiazo Homes

**Property, Done Properly.** The website for Hagiazo Homes — UK residential leasing and lettings:
guaranteed-rent company leases for landlords, fully managed lettings, professional and contractor
stays, block leases and long-term supported-housing leases.

Static HTML + CSS + vanilla JavaScript. No build step is needed to view or deploy it: open
`index.html` or point any static host at the repository root.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Overview — hero, the Hagiazo standard, 5-step lease cycle, services, who we help, partnership models + rent estimator, case studies, backed by, testimonials, FAQ, contact |
| `engine.html` | The 5-Step Lease Cycle — stats, interactive phase breakdown, self-managed vs Hagiazo table |
| `services.html` | Six core operational areas, EA Interiors studio, strengths |
| `partnership.html` | Guaranteed Rent Landlord / Portfolio Income Partner, rent estimator, security protocols, how rent is secured |
| `track-record.html` | Case studies with income-breakdown modals, portfolio stats |
| `lease-pipeline.html` | Homes under review for lease — cards and a sortable comparison table |
| `faq.html` | Searchable, filterable FAQ and document vault |
| `contact.html` | Inquiry form (opens a pre-filled email) and contact cards |

## Editing content

All copy, figures, contact details and pipeline records live in **`tools/content.cjs`**.
The page markup lives in `tools/build.cjs`. After editing either:

```bash
npm run build      # regenerates the HTML pages in the repository root
npm run serve      # optional: preview at http://localhost:8080
```

Commit the regenerated HTML together with the content change.

## Deploying

- **GitHub Pages**: enable Pages for the repository with *Source: GitHub Actions*. The workflow in
  `.github/workflows/deploy.yml` publishes the root on every push to `main`.
- **Netlify**: connect the repository; `netlify.toml` publishes the root with no build command.
- **Custom domain**: add it in the host's settings and update the `canonical`/`og:url` values if you
  add them to `tools/build.cjs`.

## Structure

- `css/hagiazo.css` — compiled Tailwind v4 stylesheet (do not edit by hand; classes are used verbatim in `tools/build.cjs`).
- `css/site.css` — the few additional rules (menu, modals, animations, extra utilities).
- `js/site.js` — mobile menu, hero cards, 3D gallery, filters, FAQ accordion, rent estimator, modals, phase tabs, form handling, table sorting.
- `assets/` — logo, hero background and all photography (self-hosted).

## Before launch

- Replace the placeholder contact details, rent figures, case studies, pipeline records, stats and
  testimonials in `tools/content.cjs` with real ones.
- Forms open the visitor's email client addressed to the contact email; swap in a form service
  (Netlify Forms, Formspree) if you want submissions captured.
- The footer's Privacy, AML and Terms links point to the FAQ until real pages exist.
