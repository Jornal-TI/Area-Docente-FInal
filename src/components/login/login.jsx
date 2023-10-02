import React, { useState } from "react";
import "./login.css";
import consumoApi from "../consumoApi/consumoApi";
import { useNavigate } from "react-router-dom";




const LoginDialog = ({ isOpen, onClose }) => {
  
  var navigate = useNavigate();
  var [nome, setnome] = useState();
  var [senha, setSenha] = useState();


  const handlenomeChange = (e) => {
    setnome(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  var handleLogin = async () => {

    consumoApi
      .get(`/${nome}/${senha}`)
      .then((response) => {
        setnome(response.data);
        console.log(response.data);
        // navigate('/Inicial');
       response.data === "usuário não encontrado!" ? console.log("") : navigate('/Inicial'); 
       return response.data
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <div className={`login-dialog ${isOpen ? "open" : ""}`}>
      <div className="login-dialog-content">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Usuário:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={handlenomeChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={senha}
              onChange={handleSenhaChange}
              required
              autoComplete="on"
            />
          </div>
          <button type="button" className="button-entrar" onClick={handleLogin}>
            Entrar
          </button>
        </form>
        <button onClick={onClose} className="button-fechar">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default LoginDialog;
