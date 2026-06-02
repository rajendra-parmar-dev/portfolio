# Rajendra Parmar — Portfolio

A premium, fully responsive personal portfolio for **Rajendra Parmar — Senior Full Stack Developer & AI Engineer**.

Built with **vanilla HTML5, CSS3, and JavaScript** — no frameworks, no build tools, no backend. Ready to host on **GitHub Pages**.

## ✨ Features

- Premium SaaS-style design (Stripe / Vercel / Linear inspired)
- 🌗 Dark **and** Light mode (toggle + remembers preference)
- Animated aurora background, glassmorphism, scroll reveals, animated counters, sticky navbar with scroll progress
- Mobile-first responsive layout
- Sections: Hero · About · Skills · Projects · Experience · Services · Tech Stack · Why Me · Contact · Footer
- SEO-friendly (meta tags, Open Graph, JSON-LD structured data)
- Accessible (reduced-motion support, keyboard-friendly nav)
- Printable / downloadable resume page (`resume.html`)

## 📁 Structure

```
index.html     # Main single-page site
styles.css     # All styles + theming
script.js      # Data, rendering, interactions
resume.html    # Printable resume (linked by "Download Resume")
.nojekyll      # Tells GitHub Pages to serve files as-is
```

## 🚀 Deploy on GitHub Pages

1. Create a repo (e.g. `rajendraparmar.github.io` for a user site, or any name for a project site).
2. Push these files to the `main` branch.
3. Go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Your site goes live at `https://<username>.github.io/` (or `/<repo>/`).

## 🛠 Customize

- **Personal data** (skills, projects, timeline, services, etc.) lives in arrays at the top of `script.js` — edit there.
- **Colors / fonts / spacing** are CSS variables in `:root` (and `[data-theme="light"]`) at the top of `styles.css`.
- Replace placeholder links: email `rajendraparmar0119@gmail.com`, `linkedin.com/in/rajendra-parmar-dev`, `github.com/rajendraparmar0119-sketch`.
- ⚠️ **Replace the sample testimonials** in the `TESTIMONIALS` array in `script.js` with real, permissioned client quotes before sharing publicly.
- Optional: add a real `resume.pdf` and point the resume buttons to it, and add an `og-image.png` for richer social sharing.

## 📄 License

Personal portfolio — free to adapt for your own use.
