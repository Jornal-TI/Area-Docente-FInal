import React, { useState } from 'react';

function Menu({ title, items }) {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(items.length / itemsPerPage) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  return (
    <div className='card-menu-lat margin-top'>
      <div>
        <div>
          <div className='title-menu'><h5>{title}</h5></div>
          <div className='d-flex'>
            {displayedItems.map((item, index) => (
              <a
                href="https://www.senac.br/"
                className="overflow-text"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pagination">
            <button onClick={handlePrevPage}>&lt; Anterior</button>
            <button onClick={handleNextPage}>Próximo &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
