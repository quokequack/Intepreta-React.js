import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';

export default function Footer(){
    return(
        <>
           <footer className='pt-5 my-5 text-muted'>
            <div className='footer'>
                <div className='abt'>
                    <div className='inter-icon'>
                    <div className='footer-icon'>
                        <FontAwesomeIcon icon='feather'/>
                   </div>
                   <h3>Interpreta</h3>
                    </div>
                   <p>Desvendando o significado por trás das palavras</p>
                </div>
                <div className='divider'></div>
                <div className='contats'>
                    <h3><b>Entre em contato conosco</b></h3>
                    <h4>(82) 9999-9999</h4>
                    <h4>interpreta@email.com</h4>
                    <h3><b>FAQ - Perguntas Frequentes</b></h3>
                    <button className='btn badge'>
                        <p>Feito com amor por <a target='_blank' href='https://github.com/quokequack'> @quokequack </a> e <a target='_blank' href='https://github.com/Galdino13'> @galdino13 </a> </p>
                    </button>
                </div>
            </div>
           </footer>
        </>
    )
}