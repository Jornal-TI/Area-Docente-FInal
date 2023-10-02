import React from 'react';
import './Horarios.css'

const HorariosInfos = () => {
  
  return (
    <div className="tabela-aulas">
      <table>
        <thead>
          <tr>
            <th>Dias</th>
            <th>Horários</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Segunda-feira</td>
            <td>08:00 - 12:00</td>
          </tr>
          <tr>
            <td>Terça-feira</td>
            <td>08:00 - 12:00</td>
          </tr>
          <tr>
            <td>Quarta-feira</td>
            <td>08:00 - 12:00</td>
          </tr>
          <tr>
            <td>Quinta-feira</td>
            <td>08:00 - 12:00</td>
          </tr>
          <tr>
            <td>Sexta-feira</td>
            <td>08:00 - 12:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}




export default HorariosInfos;
