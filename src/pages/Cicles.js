import '../styles/cicles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';


export default function Cicles(){
    useEffect(() => {
        document.title = "Interpreta | Ciclos";
      }, []);

    return (
        <>
            <div className='cicles'>
                <Header />
                <div className='container cicles-container'>
                   <div className='container-fluid cicle-right'>
                        <div className='container cicle-img-unblocked'>
                            <button id='go_button' className='btn go_button'><Link className='link-cicle' to='/cicle1'>Começar</Link></button>
                        </div>
                        <div className='container cicle-text'>
                            <h3 className='text-start'>Ciclo 1</h3>
                            <p> Em alguns casos, a paráfrase é considerada um mecanismo que ajuda a clarificar alguns textos, pois ajuda a explicá-los com termos e expressões que sejam mais simples de compreender, uma vez que a ideia central do conteúdo sempre é mantida. 
                            </p>
                        </div>
                   </div>
                   <div className='container-fluid cicle-left'>
                        <div className='container cicle-img'>
                            <div className='icon-lock'>
                                <FontAwesomeIcon icon='lock'/>
                            </div>
                            <button id='go_button' className='btn btn-primary'>Começar</button>
                        </div>
                        <div className='container cicle-text'>
                            <h3>Ciclo 2</h3>
                            <p> A interpretação do texto é um processo de leitura e releitura do texto. Isso porque muitas vezes perdemos alguns dados durante a primeira leitura, então é natural que precisemos reler o texto duas ou até mais vezes, com bastante atenção, para captarmos suas principais ideias.
                            </p>
                        </div>
                   </div>
                   <div className='container-fluid cicle-right'>
                        <div className='container cicle-img'>
                            <div className='icon-lock'>
                                <FontAwesomeIcon icon='lock'/>
                            </div>
                            <button id='go_button' className='btn btn-primary'>Começar</button>
                        </div>
                        <div className='container cicle-text'>
                            <h3 className='text-start'>Ciclo 3</h3>
                            <p> É importante conhecer o significado das palavras e seus sinônimos porque é fundamental para podermos interpretar o mundo que nos rodeia. Sem sabermos o significado das palavras e seus sinônimos estamos, linguisticamente falando, em desvantagem perante os outros e mais dificilmente criaremos laços sociais.                         
                            </p>
                        </div>
                   </div>
                   <div className='container-fluid cicle-left'>
                        <div className='container cicle-img'>
                            <div className='icon-lock'>
                                <FontAwesomeIcon icon='lock'/>
                            </div>
                            <button id='go_button' className='btn btn-primary'>Começar</button>
                        </div>
                        <div className='container cicle-text'>
                            <h3>Ciclo 4</h3>
                            <p> Se estiver lendo um livro cujo conteúdo cai no vestibular, evite mexer no celular enquanto está se dedicando à essa leitura. O mesmo vale para a TV e outras distrações. Tente focar sua atenção numa coisa de cada vez, especialmente quando está lendo. 
                            </p>
                        </div> 
                   </div>
                   <div className='container-fluid cicle-right'>
                        <div className='container cicle-img'>
                            <div className='icon-lock'>
                                <FontAwesomeIcon icon='lock'/>
                            </div>
                            <button id='go_button' className='btn btn-primary'>Começar</button>
                        </div>
                        <div className='container cicle-text'>
                            <h3 className='text-start'>Ciclo 5</h3>
                            <p> A primeira leitura do texto deverá ser feita com calma e sem interrupções. No primeiro contato com o texto, o mais importante é tentar compreender o sentido global do texto e identificar o seu objetivo. Não é essencial entender a totalidade do texto, nem o significado de todas as palavras. 
                            </p>
                        </div>
                   </div>
                </div>
                <Footer />
            </div>
        </>
    )
}