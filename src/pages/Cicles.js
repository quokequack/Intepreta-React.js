import '../styles/cicles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';



export default function Cicles(){

    return (
        <>
            <div className='cicles'>
                <Header />
                <div className='container cicles-container'>
                   <div className='container-fluid cicle-right'>
                        <div className='container cicle-img'></div>
                        <div className='container cicle-text'>
                            <h3 className='text-start'>Ciclo 1</h3>
                            <p> text text text text text text text text text text text text
                                text text text text text text text text text etxt text text
                                text text text text text text text text text text text text
                                text text text text text text text text text etxt text text
                                text text text text text text text text text text text text
                                text text text text text text text text text etxt text text
                                text text text text text text text text 
                            </p>
                        </div>
                   </div>
                   <div className='container-fluid cicle-left'>
                        <div className='container cicle-img'></div>
                        <div className='container cicle-text'>
                            <h3>Ciclo 1</h3>
                            <p> text text text text text text text text text text text text
                                text text text text text text text text text etxt text text
                                text text text text text text text text text text text text
                                text text text text text text text text text etxt text text
                                text text text text text text text text text text text text
                                text text text text text text text text text etxt text text
                                text text text text text text text text 
                            </p>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}