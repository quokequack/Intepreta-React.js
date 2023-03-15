import '../styles/register.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';


export default function Register(){
    useEffect(() => {
        document.title = "Interpreta | Registre-se";
      }, []);
    return(
        <>
            <body className='register-page'>
                <div className='container register-container'>
                    <div className='container register-container2'>
                        <div className='header'>
                            <div className='icon'>
                                <FontAwesomeIcon icon='feather' />
                            </div>
                            <h3>Interpreta</h3>
                        </div>
                        <div className='form'>
                            <form className='form-horizontal'>
                                <label htmlFor='name'>Email:</label>
                                <input type='email' name='name' class='form-control'/>
                                <label htmlFor='name'>Senha:</label>
                                <input type='password' name='name' class='form-control'/><br/> 
                            </form>                           
                            <div className='login-link'>
                                <button type='submit' className='btn btn-primary'>Entrar!</button> 
                                <p>Ainda não possui conta?</p>
                                <button id='btn-log' className='btn btn-primary'><Link className='link' to='/login'>Cadastre-se!</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}