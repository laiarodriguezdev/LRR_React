import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Tasca = ({ id, text, completada, funcEliminarTasca, funcCompletarTasca }) => {
  return (
    <div className={`tasca ${completada ? 'tascaCompletada' : ''}`}>
      <div onClick={() => funcCompletarTasca(id)}>{text}</div>
      <FaTrash onClick={() => funcEliminarTasca(id)} className="iconEliminar" />
    </div>
  );
};

export default Tasca;
