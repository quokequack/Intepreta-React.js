import '../styles/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home(){
    useEffect(() => {
        document.title = "Interpreta | Home";
      }, []);
    return(
        <>
            <div className='home'>
            <Header />
                <div className='container home-container'>
                 <div className='top'>
                 <h2 className='welcome'>
                        Bem-vindo!
                    </h2>
                    <div className='current-cicle'>
                        <h4>Ciclo atual:</h4>
                        <button className='btn ellipse'>
                            <p>1</p>
                        </button>
                    </div>
                 </div>
                    <div className='lessons'>
                        <div className='last-lessons'>
                            <h3>Últimas lições: </h3>
                            <button className='lesson1 btn'>
                                <p className='text-lesson'> Paráfrase Nv. 1 </p>
                            </button>
                            <button className='lesson2 btn'>
                                <p> Dicionário Nv. 1 </p>
                            </button>
                            <button className='lesson3 btn'>
                                <p> Interpretação Nv. 1 </p>
                            </button>
                        </div>
                        <div className='next-lessons'>
                            <h3>Próximas lições: </h3>
                            <button className='lesson1 btn'>
                                <p> Paráfrase Nv. 2 </p>
                            </button>
                            <button className='lesson2 btn'>
                                <p> Dicionário Nv. 2 </p>
                            </button>
                            <button className='lesson3 btn'>
                                <p> Interpretação Nv. 2 </p>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}