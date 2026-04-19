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


## Customer - Home Page

<img width="1897" height="867" alt="image" src="https://github.com/user-attachments/assets/0ffca78e-8451-459a-8218-9b8783750fcb" />
<img width="1898" height="702" alt="image" src="https://github.com/user-attachments/assets/b475fe02-5388-4ffd-9307-87e9b1bfec2a" />
<img width="1898" height="634" alt="image" src="https://github.com/user-attachments/assets/7afc9b65-7fea-4bfd-81be-82f572a9df35" />
<img width="1898" height="719" alt="image" src="https://github.com/user-attachments/assets/e0ce6d76-7ef2-4bb0-9b94-b956dd6a5756" />
<img width="1900" height="307" alt="image" src="https://github.com/user-attachments/assets/05f84fd2-e564-412d-b709-860d9c6ae12b" />
<img width="1896" height="640" alt="image" src="https://github.com/user-attachments/assets/f1c5b55e-b939-44e3-b094-603ba99b2e21" />
<img width="1897" height="369" alt="image" src="https://github.com/user-attachments/assets/f8c7c6ad-23d7-44d7-8328-3b64d435d506" />

## Customer - Product Page

<img width="1897" height="871" alt="image" src="https://github.com/user-attachments/assets/da8ee043-e7a5-42d7-874b-b8333d1ae531" />
<img width="1898" height="756" alt="image" src="https://github.com/user-attachments/assets/cf8fe2a1-82e5-4f5f-bac7-fe96cbfd478a" />
<img width="1896" height="867" alt="image" src="https://github.com/user-attachments/assets/7098ec2b-b649-4027-b0ca-82e4d65c28c6" />
<img width="1898" height="865" alt="image" src="https://github.com/user-attachments/assets/57b38cea-bb6c-4187-9ebe-29a7ee0443db" />

## Customer - Cart Page

<img width="1900" height="867" alt="image" src="https://github.com/user-attachments/assets/767e6d4f-7ed7-476b-bf4f-175b96598ba6" />

## Customer - Orders Confirmation

<img width="1899" height="869" alt="image" src="https://github.com/user-attachments/assets/5985b4a6-3b60-4f7c-b16c-0c00ab78574a" />

## Customer - Orders Page

<img width="1904" height="864" alt="image" src="https://github.com/user-attachments/assets/281e52a2-23cf-4376-b63c-b3f2f231eb70" />
<img width="1892" height="861" alt="image" src="https://github.com/user-attachments/assets/e1389cb9-7da5-4ba9-8ab8-e3ee0ace18f1" />

## Customer - Review Page

<img width="1901" height="868" alt="image" src="https://github.com/user-attachments/assets/6f91aaf9-aa40-4b35-879d-036d8249aaeb" />

## Customer - Return/Replacement Page

<img width="1896" height="868" alt="image" src="https://github.com/user-attachments/assets/b279c354-7a24-4b2c-a987-6ae8fcb54bdc" />


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

<img width="1919" height="871" alt="image" src="https://github.com/user-attachments/assets/efa422f9-e9ee-4912-a927-a2056e6046db" />
<img width="1902" height="866" alt="image" src="https://github.com/user-attachments/assets/b521750a-af9c-4f88-a714-3a25e8d04531" />
<img width="1919" height="866" alt="image" src="https://github.com/user-attachments/assets/f51d9439-9eaf-4963-a2f3-c5373e101e8b" />
<img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/9e93f392-883d-44f6-a3f9-79f25fc57093" />
<img width="1919" height="862" alt="image" src="https://github.com/user-attachments/assets/66961944-01d3-411f-9b02-ab4e7bc89ed7" />
<img width="1892" height="869" alt="image" src="https://github.com/user-attachments/assets/558038f9-7e90-44d8-9e30-03f0b0edf3c8" />
<img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/1fa51c77-3f37-4a91-b770-983b82238729" />


---

## Admin Features

- Admin dashboard
- View customers/vendors
- Platform summary
- Manage users
- Manage products
- Monitor orders

<img width="1901" height="872" alt="image" src="https://github.com/user-attachments/assets/0bf7aad4-961b-4f2a-bed2-4fea97e9b850" />


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
