import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFeather, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faFeather, faMoon);
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
