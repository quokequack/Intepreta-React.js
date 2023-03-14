import '../styles/homescreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default function Homescreen() {

    return (
        <>
            <div className='homescreen'>
                <div className='header-Homescreen'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='feather' />
                        </div>
                        <div><h3>INTERPRETA</h3></div>
                        <div><h3>Home</h3></div>   
                        <div><h3>Perfil</h3></div>
                        <div><h3>Ciclos</h3></div>
                </div>

                <div><h2 className='txt-Wel'>Bem Vindo nome</h2></div>   
                <div className='txt-padrao'><h3>Últimas lições:</h3></div>
                <div className='caixa'><p className='txtCaixa'>Paráfrase nivel 1</p></div>
                <div className='caixa'><p className='txtCaixa'>Dicionário nivel 1</p></div>
                <div className='caixa'><p className='txtCaixa'>Interpretação nivel 1</p></div>
                <div className='txt-padrao'><h3>Próximas lições:</h3></div>
                <div className='caixa'><p className='txtCaixa'>Paráfrase nivel 2</p></div>
                <div className='caixa'><p className='txtCaixa'>Dicionário nivel 2</p></div>
                <div className='caixa'><p className='txtCaixa'>Interpretação nivel 2</p></div>
                <div className='btnFixo'><p className='txtFixo'>1</p></div>

            </div>
        </>
    )
}