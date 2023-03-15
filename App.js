import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Homescreen from './pages/Homescreen';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFeather, faMoon, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Ciclo1 from './pages/Ciclo1';
import Parafrase from './pages/Parafrase';
import Dicionario from './pages/Dicionario';
import Interpretacao from './pages/Interpretacao';

library.add(faFeather, faMoon, faArrowRight);
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/homescreen' element={<Homescreen />}/> 
      <Route path='/ciclo1' element={<Ciclo1/>}/>
      <Route path='/parafrase' element={<Parafrase/>}/>
      <Route path='/dicionario' element={<Dicionario/>}/>
      <Route path='/interpretacao' element={<Interpretacao/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
