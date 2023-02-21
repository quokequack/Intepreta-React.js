import '../styles/login.css';
import { useEffect } from 'react';


export default function Homepage(){
    useEffect(() => {
        document.title='Interpreta | Login ';
    },[]);
    return(
        <>
            <body className='login'>
                <div className='container login-container'>
                    <div className='container login-container2'>
                        <h1> Essa é a página de login </h1>
                    </div>
                </div>
            </body>
        </>
    )
}