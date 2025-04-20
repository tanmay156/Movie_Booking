import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./services/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import BookingPage from "./pages/BookingPage";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import ProtectedRoute from "./utils/Protect";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
