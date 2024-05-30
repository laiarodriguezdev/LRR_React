import React from 'react';
import './styles/moviecard.css'; 

const MovieCard = ({ title, image, rate, direction }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={`${title} poster`} className="movie-image" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-rate">Rating: {rate}</p>
        <p className="movie-direction">Directed by: {direction}</p>
      </div>
    </div>
  );
};

export default MovieCard;
