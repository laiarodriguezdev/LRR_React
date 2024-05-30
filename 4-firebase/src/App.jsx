import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import MovieList from './pages/MovieList';
import AddMovie from './pages/AddMovie';

function App() {
  const movies = [
    { title: 'Inception', image: 'https://via.placeholder.com/300x450', rate: '8.8', direction: 'Christopher Nolan' },
    { title: 'The Matrix', image: 'https://via.placeholder.com/300x450', rate: '8.7', direction: 'The Wachowskis' },
    { title: 'Interstellar', image: 'https://via.placeholder.com/300x450', rate: '8.6', direction: 'Christopher Nolan' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome username="NomUsuari" />} />
        <Route path="/movies/list" element={<MovieList movies={movies} />} />
        <Route path="/movies/add" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
