import '../styles/ciclo1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Header from '../components/header';


export default function Ciclo1() {

    return (
        <>
            <div className='container ciclo1'>
                <div className='container header-ciclo1'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='feather' />
                        </div>
                        <div><h3 className='inter-txt'>INTERPRETA</h3></div>
                        <div><h3 className='demais-txt'>home</h3></div>   
                        <div><h3 className='demais-txt'>perfil</h3></div>
                        <div><h3 className='demais-txt'>ciclos</h3></div>
                        <div><h3 className='logout'>logout</h3></div>
                </div>

                <div className='ciclo1Frame'>
                <div className='topFrame'>
                <div className='txt-ciclo1'>CICLO 1</div>
                <div className='txt-nivel1'>NÍVEL 1</div>
                </div>

                <div>
                    <div className='tipo'><p>PARAFRÁSE</p></div>
                    <div className='linha'></div>
                    <div className='tipo'><p>DICIONÁRIO</p></div>
                    <div className='linha'></div>
                    <div className='tipo'><p>INTERPRETAÇÃO</p></div>
                </div>
                </div>

            </div>
        </>
    )
}