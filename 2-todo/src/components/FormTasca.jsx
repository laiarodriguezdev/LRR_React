import React, { useState } from 'react';

const FormulariTasques = ({ funcAfegirTasca }) => {
  const [textTasca, setTextTasca] = useState('');

  const canviTextTasca = (e) => {
    setTextTasca(e.target.value);
  };

  const enviarForm = (e) => {
    e.preventDefault();
    const tascaNova = {
      text: textTasca,
      completada: false
    };
    funcAfegirTasca(tascaNova);
    setTextTasca('');
  };

  return (
    <form onSubmit={enviarForm}>
      <input type="text" value={textTasca} onChange={canviTextTasca} />
      <button type="submit">Afegir Tasca</button>
    </form>
  );
};

export default FormulariTasques;
