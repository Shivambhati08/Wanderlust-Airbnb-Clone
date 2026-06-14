# 🏡 Wanderlust - Airbnb Clone

Wanderlust is a full-stack Airbnb-inspired web application that allows users to discover, create, edit, and review vacation rental listings. The project is built using the MERN backend stack (Node.js, Express.js, MongoDB) with EJS templates for server-side rendering.

## 🚀 Features

- 🔐 User Authentication (Signup/Login/Logout)
- 🏠 Create, Edit & Delete Listings
- 📷 Image Support for Listings
- ⭐ Add and Delete Reviews
- 👤 Authorization (Only owner can edit/delete their listings)
- 🗺️ Interactive Maps for Location Display
- 📱 Responsive UI using Bootstrap
- ⚠️ Flash Messages & Error Handling
- 🔒 Secure Password Hashing using Passport.js

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS Templates

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Express Session

### Other Packages
- Joi Validation
- Connect Flash
- Method Override
- Dotenv
- Multer
- Cloudinary (if configured)
---
## 📂 Project Structure

```
Wanderlust/
│
├── models/
├── routes/
├── controllers/
├── middleware.js
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── package.json
└── README.md
```
---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Wanderlust.git
```
Go inside the project

```bash
cd Wanderlust
```

Install dependencies

```bash
npm install
```

Create a `.env` file
```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
```

Run the application

```bash
nodemon app.js
```

or

```bash
node app.js
```

Visit
```
http://localhost:8080/listings
```
---

## 🎯 Future Improvements
- ❤️ Wishlist Feature
- 💳 Online Payment Integration
- 📅 Booking System
- 🔎 Advanced Search & Filters
- 📍 Nearby Listings
- 📱 Progressive Web App (PWA)
---

## 🤝 Contributing
Contributions are welcome!

Fork the repository and submit a Pull Request.
---

## 📜 License
This project is developed for learning purposes and is inspired by Airbnb.

---
## 👨‍💻 Author
**Shivam Thakur**
If you like this project, don't forget to ⭐ the repository!
