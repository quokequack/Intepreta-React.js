import React from 'react';
import '../styles/login.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

export default function Homepage(){
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
                        <div className='form'>
                            <form className='form-horizontal'>
                                <label htmlFor='name'>Nome:</label>
                                <input type='text' name='name' class='form-control'/>
                                <label htmlFor='name'>Email:</label>
                                <input type='email' name='name' class='form-control'/>
                                <label htmlFor='name'>Senha:</label>
                                <input type='password' name='name' class='form-control'/><br/> 
                            </form>                           
                            <div className='register'>
                                <button type='submit' className='btn btn-primary'>Fazer cadastro!</button> 
                                <p>Já possui uma conta?</p>
                                <button id='btn-reg' className='btn btn-primary'><Link className='link' to='/register'>Entre!</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}