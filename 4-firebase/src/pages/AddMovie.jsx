import React, { useState } from 'react';
import { db } from '../config/config';
import { collection, addDoc } from 'firebase/firestore';

const MoviesAdd = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    direction: '',
    image: '',
    rate: 1,
    year: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'movies'), movie);
      console.log('Document written with ID: ', docRef.id);
      // Clear the form after submission
      setMovie({
        title: '',
        description: '',
        direction: '',
        image: '',
        rate: 1,
        year: '',
        duration: ''
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="movie-add-form">
      <h2>Afegir una Nova Pel·lícula</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Títol" value={movie.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Descripció" value={movie.description} onChange={handleChange} required />
        <input type="text" name="direction" placeholder="Direcció" value={movie.direction} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Imatge (URL)" value={movie.image} onChange={handleChange} required />
        <input type="number" name="rate" placeholder="Nota (1-5)" value={movie.rate} onChange={handleChange} min="1" max="5" required />
        <input type="text" name="year" placeholder="Any" value={movie.year} onChange={handleChange} required />
        <input type="number" name="duration" placeholder="Durada (min)" value={movie.duration} onChange={handleChange} required />
        <button type="submit">Afegir Pel·lícula</button>
      </form>
    </div>
  );
};

export default MoviesAdd;
