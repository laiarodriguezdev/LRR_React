import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import IndexMenu from './pages/IndexMenu';
import MovieList from './pages/MovieList';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexMenu />} />
        <Route path="/movies/list" element={<MovieList />} />
        <Route path="/movies/add" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
