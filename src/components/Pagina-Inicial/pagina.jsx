import React from "react";
import HeaderAluno from "../Header-Alunos/Header";
import DadosInfos from '../Dados-Infos/Dados-Infos';
import "./pagina.css"
import '../../App.css';

function Inicial() {
    

    return (
        <div >
            
            <nav className='nav-aluno'> <HeaderAluno />  </nav>

            <div className="App">



                <DadosInfos />





            </div>
        </div>
    )
}

export default Inicial;