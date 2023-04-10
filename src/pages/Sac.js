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
                        
                            <div className='col-md-24'>
                                <label for='name'>Nome completo:</label>
                                <input type='text' className='form-control'/>
                            </div>
                            <div className='col-md-12'>
                                <label> Email</label>
                                <input type='text' name='email' className='form-control'/>
                                <label> Telefone</label>
                                <input type='number' name='telefone' className='form-control'/>
                            </div>
                            <div className='col-md-12'>
                                <label> Assunto</label>
                                <input type='text' name='assunto'className='form-control'/>
                                <textarea className='form-control'></textarea>
                            </div>
           
                    </form>
                </div>
            </div>
            <Footer />
        </div>
        
        </>
    )
}