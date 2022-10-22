import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import DatosEscolares from './components/DatosEscolares';
import Gustos from './components/Gustos';
import DatosPersonales from './components/DatosPersonales';
import NavBarExample from './layouts/Navegacion';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <DatosPersonales /> } />
    <Route path='DatosEscolares' element={ <DatosEscolares/> } />
    <Route path='Gustos' element={ <Gustos /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
