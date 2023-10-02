import React, { useEffect, useState } from 'react';
import LoginDialog from '../login/login';
import '../header/styleHeader.css'; // Importe o arquivo CSS aqui

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  const handleOpenLoginDialog = () => {
    setIsLoginDialogOpen(true);
  };

  const handleCloseLoginDialog = () => {
    setIsLoginDialogOpen(false);
  };

  return (
    <div className="containerHeader">
      <div className="background-data">
        <div className="data">
          <p>{currentDate}</p>
        </div>
      </div>

      <div className="background-titulo">
        <div className="titulo">
          <h1>Jornal Senac</h1>
          <p>Projeto Orientador de Ensino</p>
        </div>
      </div>

      <div className="background-nav">
        <nav>
          <ul>
            <li>
            <a className="nav-home" title="Home">
                Home
              </a>
              <button onClick={handleOpenLoginDialog}>Login</button>
            </li>
          </ul>
        </nav>
      </div>

      {isLoginDialogOpen && (
        <LoginDialog isOpen={isLoginDialogOpen} onClose={handleCloseLoginDialog} />
      )}
    </div>
  );
}
