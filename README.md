# Rock Band Landing Page (HTML and CSS Assessment)

## Overview

This project is a performance assessment focused on building a responsive landing page for a rock band.

The main objective is to deliver a visually strong, responsive, and well-structured website using semantic HTML and organized CSS.

## Current Project Structure

```text
├── assets
│   ├── css
│   │   ├── about.css
│   │   ├── base.css
│   │   ├── events.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── main.css
│   │   ├── media.css
│   │   ├── responsive.css
│   │   └── style.css
│   ├── icons
│   │   └── logo.ico
│   ├── img
│   │   ├── img-1.jpg ... img-10.jpg
│   │   └── guide.png
│   └── js
│       └── main.js
├── index.html
└── README.md
```

## Requirements

1. Build the landing page with semantic HTML5.
2. Include core sections: Header, Hero, Events, About, Media, and Footer.
3. Use Flexbox and/or Grid for layout.
4. Include at least one unordered list.
5. Optionally use a table for events (extra points).
6. Ensure responsive behavior for desktop and mobile.

## CSS Organization

Styles are split by concern to keep the codebase clean and maintainable:

1. base.css: Global reset, variables, shared utilities, typography base.
2. header.css: Header and navigation styles.
3. hero.css: Hero section styles.
4. events.css: Events section and table styles.
5. about.css: About section styles.
6. media.css: Gallery/media grid styles.
7. footer.css: Footer styles.
8. responsive.css: All media query rules.
9. main.css: Central import file for all style modules.

Note: style.css is kept as a legacy reference file and is not part of the active styling flow.

## Responsive Behavior

The page includes breakpoints for tablet and mobile layouts.

Key responsive features:

1. Collapsible navigation menu on smaller screens.
2. Section content stacking for narrow viewports.
3. Adaptive gallery columns.
4. Scaled typography and table controls for mobile readability.

## JavaScript

The script in assets/js/main.js currently handles:

1. Dynamic year in the footer.
2. Mobile navigation toggle behavior.
3. Auto-closing menu when clicking links or outside the menu.

## How to Run

1. Clone or download the repository.
2. Open index.html in your browser.
3. Optional: use Five Server (or similar extension) for live reload during development.

No build step or package installation is required.

## Good Practices Followed

1. Semantic HTML structure.
2. Modular CSS by component/section.
3. Dedicated responsive stylesheet.
4. Readable naming and consistent spacing.
5. Accessible navigation controls with ARIA attributes.
