import '../styles/cicle1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


export default function Cicle1() {

    return ( 
        <>
            <div className='cicle1'>
                <Header />
                <div className='container cicle1-container'>
                    <div className='btns'>
                    <div className='task-btn'>
                        <button className='btn task'> PARÁFRASE </button>
                        <div className='line'></div>
                    </div>
                    <div className='task-btn'>
                        <button className='btn task'> PARÁFRASE </button>
                        <div className='line'></div>
                    </div>
                    <div className='task-btn'>
                        <button className='btn task'> PARÁFRASE </button>
                        <div className='line'></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}