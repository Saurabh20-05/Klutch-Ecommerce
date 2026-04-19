# Klutch — Multi-Vendor MERN E-Commerce Platform

A full-stack **multi-vendor e-commerce marketplace** built with the **MERN stack (MongoDB, Express.js, React, Node.js)** featuring role-based access for **Customers, Vendors, and Admin**, product management, cart and ordering, returns/replacements, reviews, and responsive UI.

---

# Features

## Customer Features

- User registration and login (JWT authentication)
- Browse products from multiple vendors
- View vendor name on products
- View Reviews of products
- Product quick-view modal
- Add to cart
- Place orders
- Order history
- Submit return / replacement requests
- Leave product reviews
- Fully responsive customer interface

---

## Vendor Features

- Vendor dashboard
- Add products
- Edit/Delete own products
- View **only own products**
- View **only reviews for own products**
- View **only returns related to own products**
- Take actions to return/replacement requests
- View vendor orders
- Update order status
- Responsive vendor portal

---

## Admin Features

- Admin dashboard
- View customers/vendors
- Platform summary
- Manage users
- Manage products
- Monitor orders

---

# Tech Stack

## Frontend

- React
- React Router
- Axios
- Tailwind CSS
- React Hot Toast

## Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Multer (image upload)

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/klutch-ecommerce.git
cd klutch-ecommerce
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create:

```bash
.env
```

Add:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

# API Endpoints

## Auth

```http
POST /api/auth/register
POST /api/auth/login
```

## Products

```http
GET /api/products
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

## Cart

```http
POST /api/cart/add
GET /api/cart
PUT /api/cart/update
```

## Orders

```http
POST /api/orders
GET /api/orders/my
GET /api/orders/vendor
```

## Returns

```http
POST /api/returns
GET /api/returns/my
```

---

# Authentication

Uses:

- JWT token authentication
- Protected routes
- Role-based authorization:

- Customer
- Vendor
- Admin

---

# Author

**Saurabh**

GitHub:

https://github.com/Saurabh20-05

LinkedIn:

https://www.linkedin.com/in/saurabh-05s20/

---

# If you found this project useful

⭐ Star this repository.
