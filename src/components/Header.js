import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
                    <header className='header-app'>
                        <nav className="navbar navbar-expand-lg bg-white navbar-light">
                            <div className="container-fluid">
                                <div className='icon-header'>
                                    <FontAwesomeIcon icon='feather' />
                                </div>
                                <a className="navbar-brand" href="/home">INTERPRETA</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a id='active-nav-item' className="nav-link active" aria-current="page" href="/home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/profile">Perfil</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/cicles">Ciclos</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/logout">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                           </div>
                        </nav>
                    </header>
        </>
    )
}