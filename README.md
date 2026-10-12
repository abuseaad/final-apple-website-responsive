# Apple Responsive Website

A fully responsive clone of the Apple homepage built with HTML, CSS, Bootstrap and vanilla JavaScript. It adapts from desktop to mobile, including an Apple-style footer that switches from five columns to a collapsible accordion.

## Features

- Fixed navigation bar with a hamburger menu on small screens
- Full-width hero sections for MacBook Pro, iPhone 11 Pro and iPhone 11
- Two-column product tiles that stack on mobile
- Horizontally scrollable image gallery with scroll snapping
- Responsive footer:
  - 5 columns on desktop (1024px and wider)
  - Animated accordion with chevron icons below 1024px
  - Keyboard accessible, with ARIA attributes

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, media queries)
- Bootstrap
- JavaScript (footer accordion) and jQuery (required by Bootstrap)
- Font Awesome and Google Fonts (Montserrat)

## Project Structure

```
final-apple-website-responsive/
├── index.html
├── css/
│   ├── bootstrap.css
│   ├── styles.css     
│   └── mystyle.css    
├── js/
│   ├── bootstrap.js
│   └── footer.js      
└── images/
```

## Getting Started

```bash
git clone https://github.com/abuseaad/final-apple-website-responsive.git
cd final-apple-website-responsive
```

Open `index.html` in your browser, or serve it locally:





## Footer Breakpoint

The footer switches layout at `1023px`. To change it, update both:

- `css/styles.css`: `@media (max-width: 1023px)` in the footer block
- `js/footer.js`: `window.matchMedia('(max-width: 1023px)')`

## Author

Sadik jemal