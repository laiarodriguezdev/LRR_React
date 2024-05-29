import React, { useState } from 'react';
import Tasca from './Tasca';
import FormulariTasques from './FormTasca';

const LlistatTasques = () => {
  const [tasques, setTasques] = useState([]);

  const afegirTasca = (tasca) => {
    setTasques([...tasques, tasca]);
  };

  const eliminarTasca = (id) => {
    const tasquesRestants = tasques.filter((_, index) => index !== id);
    setTasques(tasquesRestants);
  };

  const completarTasca = (id) => {
    const tasquesActualitzades = tasques.map((tasca, index) => {
      if (index === id) {
        return { ...tasca, completada: !tasca.completada };
      }
      return tasca;
    });
    setTasques(tasquesActualitzades);
  };

  return (
    <div className='llistatTasques'>
      <h1>Llistat de Tasques</h1>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      {tasques.map((tasca, index) => (
        <Tasca
          key={index}
          id={index}
          text={tasca.text}
          completada={tasca.completada}
          funcEliminarTasca={eliminarTasca}
          funcCompletarTasca={completarTasca}
        />
      ))}
    </div>
  );
};

export default LlistatTasques;
