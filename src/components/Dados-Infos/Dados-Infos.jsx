import '../../App.css'
import '../Modal-Dados/modal-dados.css'
import './Dados-Infos.css'
import ModalDados from '../Modal-Dados/modal-dados'
import React, { useState, useEffect } from 'react'
import ModalAtividades from '../Modal-Atividades/modal-atividades'
import HorariosInfos from '../Horarios/Horarios-Infos'
import NotasInfos from '../Notas/Notas'
import MaterialInfos from '../Material-Infos/Material'

import Livro from "../../icons/livro.svg"
import Lapis from "../../icons/lapis.svg"
import Relogio from "../../icons/relogio.svg"
import Licao from "../../icons/licao.svg"
import Usuario from "../../icons/usu.svg"
import consumoApi from "../consumoApi/consumoApi";

const DadosInfos = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAtividades, setShowAtividades] = useState(false);
    const [showHorarios, setShowHorarios] = useState(false);
    const [showTeste, setShowTeste] = useState(false);
    const [showNotas, setShowNotas] = useState(false);
    const [showMaterial, setShowMaterial] = useState(false);
    var [nome, setnome] = useState();

    var handleLogin = async () => {

        consumoApi
            .get(`/Gabriel.Pensador/123456`)
            .then((response) => {
                setnome(response.data);
                //console.log(response.data);
                console.log(nome?.codAdm)
                // navigate('/Inicial');
                // response.data === "usuário não encontrado!" ? console.log("") : navigate('/Inicial'); 
                //return response.data
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    };

    const handleModalClick = () => {
        setShowModal(!showModal);
        console.log(handleLogin());
        handleLogin();
        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleAtividadesClick = () => {
        setShowAtividades(!showAtividades);

        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleHorariosClick = () => {
        setShowHorarios(!showHorarios);

        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleNotasClick = () => {
        setShowNotas(!showNotas);

        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showMaterial ? setShowMaterial(!showMaterial) : setShowMaterial(showMaterial);
    };

    const handleMaterialClick = () => {
        setShowMaterial(!showMaterial);

        showAtividades ? setShowAtividades(!showAtividades) : setShowAtividades(showAtividades);
        showModal ? setShowModal(!showModal) : setShowModal(showModal);
        showTeste ? setShowTeste(!showTeste) : setShowTeste(showTeste);
        showHorarios ? setShowHorarios(!showHorarios) : setShowHorarios(showHorarios);
        showNotas ? setShowNotas(!showNotas) : setShowNotas(showNotas);
    };

    useEffect(() => {
        consumoApi
            .get(`/Gabriel.Pensador/123456`)
            .then((response) => {
                setnome(response.data);
                //console.log(response.data);
                console.log(response.data)
                // navigate('/Inicial');
                // response.data === "usuário não encontrado!" ? console.log("") : navigate('/Inicial'); 
                //return response.data
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    return (

        <div className='navbar-alinhamento'>

            <nav clasname="navbar-main">

                <div className='background-app'>
                    <button className='dados-button button-nav' onClick={handleModalClick}>
                        <img src={Usuario} /> Meus Dados
                        <p>{nome?.codAdm}</p>
                    </button>

                    <button className='atividades-button button-nav' onClick={handleAtividadesClick}>
                        <img src={Licao} /> Atividade
                    </button>

                    <button className='horarios-button button-nav' onClick={handleHorariosClick}>
                        <img src={Relogio} /> Cronograma
                    </button>

                    <button className='notas-button button-nav' onClick={handleNotasClick}>
                        <img src={Lapis} /> Notas
                    </button>



                </div>

            </nav>

            {showModal && (

                <div className='infos'>
                    <ModalDados pNome={nome?.nome} />
                </div>
            )}

            {showAtividades && (

                <div className='infos'>
                    <ModalAtividades />
                </div>
            )}

            {showHorarios && (

                <div className='infos'>
                    <HorariosInfos />
                </div>
            )}

            {showNotas && (

                <div className='infos'>
                    <NotasInfos />
                </div>
            )}
    

        </div>
    )

}

export default DadosInfos;