import React, { useEffect, useState } from 'react';
import { db } from '../config/config';
import { collection, getDocs } from 'firebase/firestore';
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const querySnapshot = await getDocs(collection(db, 'movies'));
      const moviesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMovies(moviesList);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
};

export default MoviesList;
