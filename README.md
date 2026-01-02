# Cleveland Renter Website

A modern, professional rental website for Cleveland Renter, a residential property management company serving Cleveland, Lakewood, and Cleveland Heights.

## Features

- **Home Page**: Hero section, property overview cards, and informational sections
- **Explore Listings Page**: Grid layout displaying 15 rental units with detailed information
- **Contact Page**: Contact form with validation and contact information
- **Responsive Design**: Fully responsive, desktop-first design
- **Modern UI**: Clean typography, royal blue theme, smooth transitions

## Tech Stack

- React 18
- React Router DOM
- Vite
- CSS3 (Grid, Flexbox, Custom Properties)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky navigation header
│   ├── Footer.jsx           # Footer with contact info
│   └── UnitDetailModal.jsx  # Modal for unit details
├── pages/
│   ├── Home.jsx             # Home page
│   ├── ExploreListings.jsx  # Listings grid page
│   └── Contact.jsx          # Contact form page
├── data/
│   └── listings.js          # Listing data (15 units)
├── App.jsx                  # Main app component with routing
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Design System

- **Primary Color**: Royal Blue (#1e3a8a)
- **Secondary Color**: White (#ffffff)
- **Accents**: Light gray, subtle blue highlights
- **Typography**: Inter font family
- **Shadows**: Soft, modern shadows for depth
- **Border Radius**: 8-12px for rounded elements

## Pages

### Home Page
- Hero section with CTAs
- 6 property overview cards
- Informational sections (Available Apartments, Application Process, FAQ)

### Explore Listings
- 15 unit listings in responsive grid
- Each listing shows: address, unit number, bedrooms, bathrooms, square feet, rent, availability
- "View Details" opens modal with full information
- "View on Zillow" external link

### Contact Page
- Contact form with validation
- Contact information card
- Success/error states

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

## License

Private project for Cleveland Renter
