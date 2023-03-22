import '../styles/sac.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Sac(){
    return(
        <>
        <div className='sac'>
            <Header />
            <div className='container sac-container'>
                <h1 className='title'>
                    SAC - Entre em contato conosco
                </h1>
                <div className='form'>
                    <form method='post'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <label for='name'>Nome completo:</label>
                                <input type='text' className='form-control'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    )
}