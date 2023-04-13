import React from 'react';
import '../styles/register.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import CadastroForm from '../backend/componentes-crud/CadastroForm';
import { useEffect } from 'react';

export default function Homepage(){
    useEffect(() => {
        document.title = "Interpreta | Cadastre-se!";
      }, []);
    return(
        <>
            <body className='login'>
                <div className='container login-container'>
                    <div className='container login-container2'>
                        <div className='header'>
                            <div className='icon'>
                                <FontAwesomeIcon icon='feather' />
                            </div>
                            <h3>Interpreta</h3>
                        </div>
                        <CadastroForm />
                    </div>
                </div>
            </body>
        </>
    )
}