import React from 'react';
import { Link } from 'react-router-dom';
import './styles/card.css';

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className="card-link">Go</Link>
    </div>
  );
};

export default Card;
