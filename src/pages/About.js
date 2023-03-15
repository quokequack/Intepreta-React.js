import '../styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        document.title = "Interpreta | Sobre";
      }, []);
    return (
        <>
            <div className='about'>
                <div className='container about-container'>
                    <div className='header'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='feather' />
                        </div>
                        <h3>Interpreta</h3>
                    </div>
                    <div className='about-content'>
                        <h2>Sobre o que é o Interpreta?</h2>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button id='btn-collapsed'className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        CICLOS
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    São 5 ciclos de aprendizado!
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button id='btn-collapsed'className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        GRUPOS
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Cada ciclo tem 3 grupos de tarefas
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button id='btn-collapsed'className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        NÍVEIS
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    Conforme o ciclo aumenta, os níveis de dificuldade aumentam também!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btn-next'>
                        <button type='button' className='btn btn-primary'><Link className='link' to='/home'><FontAwesomeIcon icon='arrow-right' /></Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}