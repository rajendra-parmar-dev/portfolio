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
styles.css     # Design system + all styles + theming
script.js      # Data, rendering, interactions
resume.html    # Printable resume (linked by "Download Resume")
og-image.svg   # Social share image (export to .png for LinkedIn/Twitter)
sitemap.xml    # SEO sitemap
robots.txt     # Crawler directives
.nojekyll      # Tells GitHub Pages to serve files as-is
```

## 🚀 Deploy on GitHub Pages

1. Repo name: **`rajendra-parmar-dev`** (project site under your account).
2. Push these files to the `main` branch.
3. Go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Your site goes live at **`https://rajendraparmar0119-sketch.github.io/rajendra-parmar-dev/`**.

## 🛠 Customize

- **Personal data** (skills, projects, timeline, services, etc.) lives in arrays at the top of `script.js` — edit there.
- **Colors / fonts / spacing** are CSS variables in `:root` (and `[data-theme="light"]`) at the top of `styles.css`.
- Replace placeholder links: email `rajendraparmar0119@gmail.com`, `linkedin.com/in/rajendra-parmar-dev`, `github.com/rajendraparmar0119-sketch`.
- ⚠️ **Replace the sample testimonials** in the `TESTIMONIALS` array in `script.js` with real, permissioned client quotes before sharing publicly.
- 🔗 **Add real project URLs**: set the `links: { demo, code }` for each item in the `PROJECTS` array in `script.js`. Use `''` (empty) for `demo` to show a "Private" chip for confidential client work; leave `'#'` only as a temporary placeholder.
- Optional: add a real `resume.pdf` and point the resume buttons to it.
- 🖼️ **Social image**: `og-image.svg` is provided. For full LinkedIn/Twitter support, export it to a 1200×630 `og-image.png` (e.g. open the SVG in a browser and screenshot, or use an online SVG→PNG tool) and switch the `og:image` / `twitter:image` tags in `index.html` to `.png`.

## ⚡ Deployment best practices (GitHub Pages)

- **Keep paths relative.** All asset references (`styles.css`, `script.js`, `resume.html`) are relative so the site works under the `/rajendra-parmar-dev/` project subpath. Avoid leading-slash absolute paths.
- **`.nojekyll` is included** so Pages serves files as-is (no Jekyll processing) — keeps folders/files starting with `_` working.
- **Custom domain (optional):** add a `CNAME` file with your domain and configure DNS; then update the absolute URLs in `index.html`, `sitemap.xml`, and `robots.txt`.
- **HTTPS:** enable "Enforce HTTPS" in Settings → Pages.
- **Cache busting:** when you change CSS/JS, bump a query string in `index.html` (e.g. `styles.css?v=2`) so visitors get the latest version.
- **Submit your sitemap** to [Google Search Console](https://search.google.com/search-console) for indexing.
- **Validate before sharing:** run [Lighthouse](https://developer.chrome.com/docs/lighthouse/) (Performance/SEO/Accessibility) and preview link cards with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
- **Optional minification:** for max performance, create `styles.min.css` / `script.min.js` and reference those in production.

## 📄 License

Personal portfolio — free to adapt for your own use.
