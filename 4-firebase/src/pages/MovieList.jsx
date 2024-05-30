import React from 'react';
import MovieCard from '../components/MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          rate={movie.rate}
          direction={movie.direction}
        />
      ))}
    </div>
  );
};

export default MovieList;
