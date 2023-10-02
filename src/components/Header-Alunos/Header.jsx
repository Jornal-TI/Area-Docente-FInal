import Logo from '../../icons/logo.png'
import { AiOutlineHome } from 'react-icons/ai';

export default function HeaderAluno() {

    const handleHome = () => {
        window.open('/#', '_blank')
    };


    return (
        <div className="containerHeader">

            <div className="data-aluno">
                <img id='logo' src={Logo} alt=''></img>
                <h1 className='titulo-aluno'> Área do Docente </h1>

                <button className='home-aluno' type='submit' onClick={handleHome}><AiOutlineHome /> </button>
            </div>


        </div>
    )
}