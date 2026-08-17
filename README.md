# Custom Shopify Theme

A modern, customizable Shopify theme built with Liquid, CSS, and JavaScript.

## Features

- Responsive design
- Customizable colors and typography
- Hero section with CTA
- Featured products showcase
- Product detail pages
- Header and footer sections
- Mobile-friendly layout
- Smooth animations and transitions

## Theme Structure

```
├── config/
│   └── settings_schema.json    # Theme settings and customization options
├── layout/
│   └── theme.liquid            # Main theme layout
├── templates/
│   ├── index.json              # Home page template
│   ├── product.liquid          # Product detail page
│   └── 404.liquid              # 404 error page
├── sections/
│   ├── header.liquid           # Header section
│   ├── footer.liquid           # Footer section
│   ├── hero.liquid             # Hero banner section
│   └── featured-products.liquid # Featured products section
├── assets/
│   ├── theme.css               # Main stylesheet
│   └── theme.js                # Main JavaScript
└── locales/
    └── en.default.json         # English translations
```

## Installation

### Using GitHub Integration (Recommended)

1. Go to your Shopify Admin
2. Navigate to Sales channels → Online Store → Themes
3. Click "Upload theme"
4. Select "Upload from GitHub"
5. Authorize and select this repository
6. Click "Install"

### Using Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
shopify auth login
shopify theme push
```

### Manual Installation

1. Zip this theme directory
2. Go to Shopify Admin → Themes
3. Click "Upload theme" and upload the zip file

## Customization

### Colors

Edit `config/settings_schema.json` to modify:
- Primary text color
- Background color
- Accent color

### Typography

- Heading font
- Body font

Changes are reflected in real-time in the Shopify theme editor.

## Sections

The theme includes several editable sections:

- **Hero**: Banner with heading, subheading, and CTA button
- **Featured Products**: Grid of products from your store
- **Header**: Navigation and cart
- **Footer**: Store information and links

## Development

To develop locally:

```bash
# Install dependencies
npm install

# Start development server (if using Shopify CLI)
shopify theme dev

# Push changes to Shopify
shopify theme push
```

## Support

For issues or questions, please create an issue in the repository.

## License

This theme is provided as-is for use with Shopify stores.
