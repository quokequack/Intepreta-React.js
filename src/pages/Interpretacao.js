import '../styles/interpretacao.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';


export default function Interpretacao() {

    return (
        <>
            <div className='interpretacao'>
                <div className='header-interpretacao'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='feather' />
                        </div>
                        <div><h3 className='inter-txt'>INTERPRETA</h3></div>
                        <div><h3 className='demais-txt'>home</h3></div>   
                        <div><h3 className='demais-txt'>perfil</h3></div>
                        <div><h3 className='demais-txt'>ciclos</h3></div>
                        <div><h3 className='logout'>logout</h3></div>
                </div>
                <div className='content-interpretacao'>
                    <h1 className='txt-para'>INTERPRETAÇÃO</h1>
                    <p className='pergunta'>O que o autor quis mencionar no texto abaixo?</p>
                    <div className='linha'></div>
                    <p className='frase'>"O choro é livre"</p>
                </div>
              
                <div className='botoes'>
                    <button className='botao'> Satisfação com a tristeza alheia </button>
                    <button className='botao'>O choro foi libertado da prisão</button>
                    <button className='botao'>Todos podem chorar</button>
                </div>
            </div>
            
        </>
    )
}