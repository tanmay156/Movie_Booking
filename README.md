# Movie Ticket Booking System

## Overview
A full-stack movie ticket booking application built with:

- **React** frontend  
- **Spring Boot** backend  
- **REST API** architecture  
- CRUD operations for movie management  
- Ticket booking functionality  

---

## Features

### Frontend (React)
- View movie details
- Book tickets
- Admin dashboard for movie management
- View booking history
- Responsive design with Bootstrap

### Backend (Spring Boot)
- RESTful API endpoints
- Movie CRUD operations
- Ticket booking logic
- Data validation
- Error handling

---

## Technologies Used

### Frontend
- React 19
- React Router 6
- Bootstrap 5
- Axios (for HTTP requests)
- Date-fns (for date handling)

### Backend
- Java 21
- Spring Boot 3
- Spring Data JPA
- Hibernate
- Psql Database (for development)
- Maven

---

## Installation

### Prerequisites
- Springboot
- Java 21 JDK
- Maven 3.8+

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Movie_Booking
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd MovieTicketFront
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/api/movies`          | Get all movies
| GET    | `/api/movies/{id}`     | Get movie by ID              |
| POST   | `/api/movies`          | Add new movie                |
| PUT    | `/api/movies/{id}`     | Update movie                 |
| DELETE | `/api/movies/{id}`     | Delete movie                 |
| POST   | `/api/movies/booking`  | Book tickets                 |
| GET    | `/api/movies/history`  | Get booking history          |

---

## Project Structure

### Backend

```
src/
├── main/
│   ├── java/com/movieticket/
│   │   ├── controller/        # REST controllers
│   │   ├── model/             # Entity classes
│   │   ├── repository/        # JPA repositories
│   │   ├── service/           # Business logic
│   │   └── Application.java
│   └── resources/
│       ├── application.properties
```

### Frontend

```
src/
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
│   └── movieService.js        # API service
├── App.js
├── index.js
```

---

## Configuration

### Backend
- **Database**: Configured in `application.properties`
- **Port**: Default is `8080` (can be changed)

### Frontend
- **API Base URL**: Set in `movieService.js`
- **Port**: Default is `5173`

---

## Usage

- Access the app at `http://localhost:3000`
- Browse movies on the home page
- Click **"Book Tickets"** to make a reservation
- Admin features available at `/admin` route:
  - Add/edit/delete movies
  - View booking history

---

## Screenshots

### Home Page
> Movie listing page with filters

### Admin Dashboard
> Admin interface for managing movies
