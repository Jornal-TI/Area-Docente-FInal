import React, { useState } from 'react';
import './modal-atividades.css';

const ModalAtividades = () => {
  const [selectedUC, setSelectedUC] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');

  const activityOptions = {
    opcao1: ['Atividade 1', 'Atividade 2'],
    opcao2: ['Atividade 3', 'Atividade 4'],
    opcao3: ['Atividade 5', 'Atividade 6'],
    opcao4: ['Atividade 7', 'Atividade 8'],
  };

  const handleUCSelectChange = (event) => {
    const selectedUCValue = event.target.value;
    setSelectedUC(selectedUCValue);
    setSelectedActivity('');
  };

  const handleActivitySelectChange = (event) => {
    const selectedActivityValue = event.target.value;
    setSelectedActivity(selectedActivityValue);
  };

  const handleDownload = () => {
  
  };

  return (
    <div className='atividades-browser'>
      <p>Unidade Curricular:</p>
      <select value={selectedUC} onChange={handleUCSelectChange}>
        <option value="">Unidades Curriculares</option>
        <option value="opcao1">UC1</option>
        <option value="opcao2">UC2</option>
        <option value="opcao3">UC3</option>
        <option value="opcao4">UC4</option>
      </select>

      <p>Atividades para Enviar:</p>
      <select
        value={selectedActivity}
        onChange={handleActivitySelectChange}
        disabled={!selectedUC}
      >
        <option value="">Atividades Realizadas</option>
        {selectedUC &&
          activityOptions[selectedUC].map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
      </select>

      {selectedActivity && (
        <button className='download-btt' onClick={handleDownload}> Enviar {selectedActivity}</button>
      )}
    </div>
  );
};

export default ModalAtividades;
