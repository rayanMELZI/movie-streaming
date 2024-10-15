import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import TrendingPage from "./pages/TrendingPage";
// import LoginSignUpPage from "./pages/LoginSignUpPage";
import AuthPage from "./pages/AuthPage";
import MoviePlayerPage from "./pages/MoviePlayerPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginSignUpPage />} /> */}
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/movie/:id" element={<MoviePlayerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
