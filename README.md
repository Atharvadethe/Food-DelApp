# Food-DelApp

A full-stack Food Delivery Application with user, admin, and backend services. This project allows users to browse menus, add items to cart, place orders (including online and cash on delivery), and manage orders. Admins can manage food items and view orders. Built with React, Node.js, Express, and MongoDB.

---

## Features
- User authentication (register/login)
- Browse food menu and categories
- Add/remove items to/from cart
- Place orders (online payment & cash on delivery)
- View order history
- Admin dashboard for food and order management
- Responsive UI for web and mobile

---

## Tech Stack
- **Frontend:** React, Vite, Axios, React Router, React Toastify
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Multer, Stripe
- **Admin Panel:** React, Vite

---

## Project Structure
```
Food-DelApp/
  ├── admin/        # Admin dashboard (React)
  ├── backend/      # Express API & MongoDB
  └── frontend/     # User-facing app (React)
```

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Food-DelApp.git
cd Food-DelApp
```

### 2. Setup Backend
```bash
cd backend
npm install
# Create a .env file with your MongoDB URI and JWT secret
# Example .env:
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
npm run server
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Setup Admin Panel
```bash
cd ../admin
npm install
npm run dev
```

---

## Usage
- Visit the frontend app at `http://localhost:5173` (default Vite port)
- Visit the admin panel at `http://localhost:5174` (or the port shown in terminal)
- Backend runs on `http://localhost:4000` by default

---

## API Endpoints

### User
- `POST /api/user/register` — Register a new user
- `POST /api/user/login` — Login

### Food
- `GET /api/food/list` — List all food items
- `POST /api/food/add` — Add a food item (admin, with image upload)
- `POST /api/food/remove` — Remove a food item (admin)

### Cart
- `POST /api/cart/get` — Get user's cart (auth required)
- `POST /api/cart/add` — Add item to cart (auth required)
- `POST /api/cart/remove` — Remove item from cart (auth required)

### Orders
- `GET /api/order/list` — List all orders (admin)
- `POST /api/order/userorders` — Get user's orders (auth required)
- `POST /api/order/place` — Place an order (auth required)
- `POST /api/order/placecod` — Place order (Cash on Delivery, auth required)
- `POST /api/order/status` — Update order status (admin)
- `POST /api/order/verify` — Verify order payment

---

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact
**Author:** Atharva Dethe

For questions or support, please open an issue on GitHub.