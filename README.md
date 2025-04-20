# 🎬 Movie Ticket Booking System

A full-stack web application for movie ticket booking, built with **React** and **Spring Boot** using a RESTful architecture. It includes movie management and ticket booking features.

---

## 🧩 Features

### Frontend (React)
- View all movies with details
- Book tickets for selected movies
- View user booking history
- Admin dashboard to manage movies (Add, Edit, Delete)
- Responsive design using Bootstrap

### Backend (Spring Boot)
- Exposes RESTful APIs
- Full CRUD operations for movies
- Ticket booking logic with validation
- Centralized error handling
- PostgreSQL integration

---

## 🛠 Technologies Used

### Frontend
- React 19
- React Router 6
- Bootstrap 5
- Axios (for API requests)
- Date-fns (date formatting)

### Backend
- Java 21
- Spring Boot 3
- Spring Data JPA
- Hibernate ORM
- PostgreSQL
- Maven

---

## ⚙ Installation

### Prerequisites
- Java 21+
- Maven 3.8+
- Node.js (v16 or higher) and npm
- Springboot

### Backend Setup

```bash
cd Movie_Ticket_Booking
mvn clean install
mvn spring-boot:run
```

> ✅ Backend runs at: `http://localhost:8080`

### Frontend Setup

```bash
cd MovieTicketFront
npm install
npm start
```

> ✅ Frontend runs at: `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint                | Description             |
|--------|-------------------------|-------------------------|
| GET    | `/api/movies`           | Get all movies          |
| GET    | `/api/movies/{id}`      | Get movie by ID         |
| POST   | `/api/movies`           | Add a new movie         |
| PUT    | `/api/movies/{id}`      | Update a movie          |
| DELETE | `/api/movies/{id}`      | Delete a movie          |
| POST   | `/api/movies/booking`   | Book tickets            |
| GET    | `/api/movies/history`   | Get booking history     |

---

## 📁 Project Structure

### Backend

```
Movie_Ticket_Booking/
└── src/
    └── main/
        ├── java/com/movieticket/
        │   ├── controller/        # REST controllers
        │   ├── model/             # Entity classes
        │   ├── repository/        # JPA repositories
        │   ├── service/           # Business logic
        │   └── Application.java   # Spring Boot entry point
        └── resources/
            └── application.properties
```

### Frontend

```
MovieTicketFront/
└── src/
    ├── components/
    │   ├── MovieList.jsx
    │   ├── MovieDetails.jsx
    │   ├── BookingForm.jsx
    │   ├── BookingHistory.jsx
    │   ├── AddMovieForm.jsx
    │   ├── EditMovieForm.jsx
    │   └── Navbar.jsx
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── AdminPage.jsx
    │   └── BookingPage.jsx
    ├── services/
    │   └── movieService.js       # API service layer
    ├── App.js
    └── index.js
```

---

## ⚙ Configuration

### Backend
- Configure DB and port in `application.properties`
- Default port: `8080`

### Frontend
- Base API URL set in `movieService.js`
- Default port: `5173`

---

## ▶️ Usage

- Access the app via `http://localhost:5173`
- Browse movies on the homepage
- Book tickets by clicking **"Book Now"**
- Admin dashboard available at `/admin`
  - Add, edit, delete movies
  - View all booking history

---

## 🧑‍💻 Author

Built with ❤️ by **Tanmay Jadhav**
