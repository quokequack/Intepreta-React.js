import '../styles/parafrase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function Parafrase() {

    return (
        <>
            <div className='parafrase'>
                <div className='header-parafrase'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='feather' />
                        </div>
                        <div><h3 className='inter-txt'>INTERPRETA</h3></div>
                        <div><h3 className='demais-txt'>home</h3></div>   
                        <div><h3 className='demais-txt'>perfil</h3></div>
                        <div><h3 className='demais-txt'>ciclos</h3></div>
                        <div><h3 className='logout'>logout</h3></div>
                        
                </div>
                <div className='content-parafrase'>
                    <h1 className='txt-para'>PARÁFRASE</h1>
                    <p className='pergunta'>Qual palavra pode substituir a destacada?</p>
                    <div className='linha'></div>
                    <p className='frase'>"João é <strong>ferrenho</strong> no futebol."</p>
                </div>
                <div className='botoes'>
                    <button> Alegre </button>
                    <button>Bom</button>
                    <button>Implacável</button>
                    <button>Ruim</button>
                </div>
            </div>
        </>
    )
}