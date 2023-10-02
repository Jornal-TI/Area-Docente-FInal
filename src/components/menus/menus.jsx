import React from 'react';
import './menus.css';
import Menu from './menu';

function MenusLa() {
  const recentItems = [
    "titulo feed1",
    "titulo feed2",
    "titulo feed3",
  ];

  const archivedItems = [
    "Janeiro 2023",
    "Fevereiro 2023",
    "Março 2023",
  ];

  const categoryItems = [
    "Hardware/Software",
    "Redes",
    "Programação",
    "Senac",
    "Favoritos",
  ];

  return (
    <div>
      <div className='card-menu-lat'>
        <div>
          <div>
            <div className='title-menu'><h5>Pesquisar</h5></div>
            <div className='d-flex'>
              <input type="text" className="input-custom-width"/>
              <button className='btn-menu'>Pesquisar</button>
            </div>
          </div>
        </div>
      </div>

      <Menu title="Posts Recentes" items={recentItems} />
      <Menu title="Arquivados" items={archivedItems} />
      <Menu title="Categorias" items={categoryItems} />
    </div>
  );
}

export default MenusLa;
