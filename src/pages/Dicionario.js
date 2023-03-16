import '../styles/dicionario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';


export default function Dicionario() {

    return (
        <>
            <div className='dicionario'>
                <div className='header-dicionario'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='feather' />
                        </div>
                        <div><h3 className='inter-txt'>INTERPRETA</h3></div>
                        <div><h3 className='demais-txt'>home</h3></div>   
                        <div><h3 className='demais-txt'>perfil</h3></div>
                        <div><h3 className='demais-txt'>ciclos</h3></div>
                        <div><h3 className='logout'>logout</h3></div>
                </div>
                <div className='content-dicionario'>
                    <h1 className='txt-para'>DICIONÁRIO</h1>
                    <p className='pergunta'>Aprenda o significado das palavras!</p>
                </div>
                
                <div className='botoes'>
                    <div className='div-1-1'>

                    <div className='div-2-1'>
                    <button className='btn1'>SOLICITUDE</button>
                    <button className='btn2'>FERRENHO</button>
                    </div>

                    <div className='div-2-2'>
                    <button className='btn3'>MODULAR</button>
                    <button className='btn4'>INSALUBRE</button>
                    </div>

                    <div className='div-2-3'>
                    <button className='btn5'>NÓDOA</button>
                    <button className='btn6'>DETURPAÇÃO</button>
                    <button className='btn7'>EXÍCIO</button>
                    </div>

                    </div>
                    <div className='div-1-2'>
                    <button className='btn8'>SALUTAR</button>
                    </div>
                </div>
              {/*  <footer className='rodape'>
 
 
 <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                    <button className='icone'><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></button>
                    <button className='icone'><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
                
                
                
                </footer>*/}
            </div>
 
        </>
    )
}