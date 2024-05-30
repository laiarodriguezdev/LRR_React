import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => {
  return (
    <div className="index-menu">
      <Card 
        title="Llistat de Pel·lícules"
        description="Veure el llistat complet de pel·lícules"
        link="/movies/list"
      />
      <Card 
        title="Afegir una Pel·lícula"
        description="Afegir una nova pel·lícula al llistat"
        link="/movies/add"
      />
    </div>
  );
};

export default IndexMenu;
