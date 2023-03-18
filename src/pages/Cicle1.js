import '../styles/cicle1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect } from 'react';


export default function Cicle1() {
    useEffect(() => {
        document.title = "Interpreta | Ciclo 1";
      }, []);
    return ( 
        <>
            <div className='cicle1'> 
                <Header />
                <div className='container cicle1-container'>
                    <div className='buttons-tasks'>
                    <div className='task-btn'>
                        <button className='btn task'><Link className='link-cicle1' to='/inter'>PARÁFRASE</Link></button>
                        <div className='line'></div>
                    </div>
                    <div className='task-btn'>
                        <button className='btn task'><Link className='link-cicle1' to='/inter'>DICIONÁRIO</Link></button>
                        <div className='line'></div>
                    </div>
                    <div className='task-btn'>
                        <button className='btn task'><Link className='link-cicle1' to='/inter'>INTERPRETAÇÃO</Link></button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}