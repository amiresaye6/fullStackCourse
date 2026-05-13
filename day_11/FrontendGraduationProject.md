# React Mini Project — Simple Product Store

## Project Overview

In this project, you will build a small React application that simulates a simple online store.

The goal of this project is NOT to create a professional ecommerce website.

The goal is to practice everything we learned in React so far:

- Components
- JSX
- Props
- State
- Event handling
- Conditional rendering
- Lists rendering
- useEffect
- Fetch API
- LocalStorage

---

# What You Will Build

A small application with:

- Navbar
- Footer
- Multiple pages
- Product cards
- Cart system
- API data fetching
- LocalStorage persistence

---

# API

Use this API:

```txt
https://fakestoreapi.com/products
```

Open it in the browser first and inspect the data structure carefully.

---

# Final Application Pages

Your application should contain the following pages:

| Page     | Description           |
| -------- | --------------------- |
| Home     | Landing page          |
| Products | Displays all products |
| About    | Simple about page     |
| Cart     | Displays cart items   |

---

# Technologies

You must use:

- React
- useState
- useEffect
- React Router
- LocalStorage

Optional:

- Tailwind CSS
- Plain CSS

---

# Project Requirements

---

# Part 1 — Project Setup

## Step 1

Create a new React project using Vite.

Project name:

```bash
react-product-store
```

---

## Step 2

Clean the project.

Delete unnecessary files and starter code.

---

## Step 3

Create the following folders:

```txt
src/
|
|-- components/
|-- pages/
|-- assets/
|-- styles/
```

---

# Part 2 — Routing Setup

Install React Router.

---

## Create the following pages:

### Home Page

Contains:

- Welcome message
- Simple hero section

---

### Products Page

Contains:

- Products fetched from API

---

### About Page

Contains:

- Simple information about the project

---

### Cart Page

Contains:

- Cart products

---

# Part 3 — Layout Components

Create reusable components.

---

## Header Component

The Header must contain:

- Website logo/title
- Navigation links

Links:

- Home
- Products
- About
- Cart

---

## Footer Component

The Footer should contain:

- Copyright text
- Your name

---

# Part 4 — Product Fetching

Inside the Products page:

---

## Step 1

Create state variables:

- products
- loading
- error

---

## Step 2

Use useEffect to fetch products from the API.

---

## Step 3

Show loading message while fetching.

Example:

```txt
Loading products...
```

---

## Step 4

Handle errors.

Example:

```txt
Something went wrong
```

---

## Step 5

Store fetched products in state.

---

# Part 5 — Product Card Component

Create a reusable ProductCard component.

---

# Product Card Must Display

- Product image
- Product title
- Product price
- Product category
- Add To Cart button

---

# Important

The ProductCard component MUST receive data using props.

Example props:

- title
- image
- price

---

# Part 6 — Render Products

Inside the Products page:

Use:

```js
.map()
```

to render all product cards dynamically.

---

# Important

Every rendered card MUST have a unique key.

Use:

```js
product.id;
```

---

# Part 7 — Add To Cart Functionality

---

## Step 1

Create cart state.

---

## Step 2

When clicking "Add To Cart":

- Add the selected product to cart state

---

## Step 3

Prevent duplicate products in cart.

Hint:
Check if product already exists before adding.

---

# Part 8 — LocalStorage

---

# Goal

Cart data should persist after refreshing the page.

---

## Step 1

Whenever cart changes:

Save cart into LocalStorage.

---

## Step 2

When app loads:

Read cart data from LocalStorage.

---

# Expected Behavior

- Add products
- Refresh page
- Cart should still exist

---

# Part 9 — Cart Page

The Cart page should display:

- Product image
- Product title
- Product price

---

# Add Functionality

## Remove Button

Remove single product from cart.

---

## Clear Cart Button

Remove all products from cart.

---

# Conditional Rendering

If cart is empty:

Display:

```txt
Your cart is empty
```

---

# Part 10 — UI Improvements

Add simple styling.

Requirements:

- Responsive layout
- Product cards aligned properly
- Buttons styled
- Images sized correctly

---

# Suggested Components

You are encouraged to create:

| Component   | Purpose         |
| ----------- | --------------- |
| Header      | Navigation      |
| Footer      | Footer          |
| ProductCard | Product display |
| CartItem    | Cart product    |

---

# Suggested Folder Structure

```txt
src/
|
|-- components/
|   |-- Header.jsx
|   |-- Footer.jsx
|   |-- ProductCard.jsx
|   |-- CartItem.jsx
|
|-- pages/
|   |-- Home.jsx
|   |-- Products.jsx
|   |-- About.jsx
|   |-- Cart.jsx
|
|-- App.jsx
|-- main.jsx
```

---

# Required React Concepts

Your solution MUST include:

- Components
- Props
- useState
- useEffect
- Event handling
- Conditional rendering
- Lists rendering
- Fetch API
- LocalStorage

---

# Bonus Features (Optional)

If you finish early:

---

## Search Feature

Search products by title.

---

## Category Filter

Filter products by category.

---

## Cart Counter

Show cart item count in Header.

Example:

```txt
Cart (3)
```

---

## Total Price

Calculate total cart price.

---

## Dark Mode

Optional styling improvement.

---

# Important Notes

- Keep components reusable
- Avoid repeating code
- Use meaningful variable names
- Fix console errors
- Organize files properly

---

# Submission

Submit:

- GitHub repository link
- Screenshots
- Short README

---

# Project Goal

After this project, you should understand:

- React application structure
- Dynamic rendering
- State-driven UI
- API integration
- LocalStorage persistence
- Component communication
