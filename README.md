# BuyNest — E-Commerce Platform

A responsive e-commerce storefront built with **React.js**, **JavaScript**, and **REST APIs**. Features secure payment UI, real-time inventory tracking, cart management, and an admin dashboard.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) ![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript) ![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## Features

- **Responsive Storefront** — Fully responsive UI across mobile and desktop
- **REST API Integration** — Fetches live product data from [FakeStore API](https://fakestoreapi.com)
- **Real-Time Inventory Tracking** — Stock count updates dynamically when items are added to cart
- **Shopping Cart** — Add, remove, and update item quantities with live total calculation
- **Secure Checkout UI** — Payment form with field validation and order summary
- **Order Confirmation** — Success screen with order ID and purchase details
- **Admin Dashboard** — Add, edit, delete products and manage stock levels in real time
- **Search & Filter** — Filter products by name and category

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js 18 | Component-based UI |
| JavaScript (ES6+) | Application logic |
| Vite | Build tool & dev server |
| REST API (FakeStore) | Product data source |
| CSS3 (Custom) | Responsive styling |

---

## Project Structure

```
buynest-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with cart icon
│   │   ├── ProductCard.jsx     # Individual product display card
│   │   ├── Cart.jsx            # Slide-in cart sidebar
│   │   ├── Checkout.jsx        # Payment form with validation
│   │   ├── OrderConfirmation.jsx # Order success screen
│   │   └── AdminDashboard.jsx  # Admin inventory panel
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with featured products
│   │   ├── Products.jsx        # Full product listing with filters
│   │   └── Admin.jsx           # Admin page wrapper
│   ├── App.jsx                 # Root component with state management
│   ├── App.css                 # Component styles
│   ├── index.css               # Global styles & design tokens
│   └── main.jsx                # React DOM entry point
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/buynest-react.git

# 2. Navigate to project folder
cd buynest-react

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## Pages Overview

| Page | Description |
|------|-------------|
| **Home** | Hero section + featured products from API |
| **Products** | All products with search and category filter |
| **Cart** | Slide-in sidebar with quantity controls |
| **Checkout** | Secure payment form with validation |
| **Order Confirmation** | Success screen with order details |
| **Admin Dashboard** | Product management and inventory control |

---

## API Reference

This project uses the [FakeStore API](https://fakestoreapi.com) — a free public REST API.

```
GET https://fakestoreapi.com/products
```

Returns an array of product objects including `id`, `title`, `price`, `image`, `category`, and `rating`.

---

## Key React Concepts Used

- `useState` — manages cart items, products, page state
- `useEffect` — fetches product data from REST API on mount
- **Component-based architecture** — reusable, modular components
- **Props drilling** — state passed from App to child components
- **Conditional rendering** — page routing without React Router

---

## Author

**Surya Maran**
- GitHub: [https://github.com/surya-sde48]

---

