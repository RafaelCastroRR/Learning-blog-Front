// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import CommentsPage from "../src/pages/ComentesPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comments" element={<CommentsPage />} /> {/* Ruta para la página de comentarios */}
      </Routes>
    </Router>
  );
};

export default App;
